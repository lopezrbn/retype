import reflex as rx
from typing import List, Dict, Tuple
from datetime import timedelta

import words.database as db
import words.business_logic as bl


class ComplexType(rx.Base):
    attribute: List[Tuple]


class State(rx.State):
    # Base vars
    
    form_data: dict = {}
    text_to_show: str = ""
    text_player_name_input: str = ""
    button_letter: str = ""
    radio_value: str = "Day"
    alert_dialog_show: bool = False
    trophy_number_to_show: int = 0
    trophy_description_to_show: str = ""
    player_name_cookie: str = rx.Cookie(name="player_name_cookie", max_age=timedelta(days=400).total_seconds())
    player_id_cookie: str = rx.Cookie(name="player_id_cookie" ,max_age=timedelta(days=400).total_seconds())

    data: Dict[str, List[str]] = {}
    
    data["day_letters"] = db.read_day_letters_from_db()
    data["player_name"]: str = ""
    data["player_id"]: str = "0"
    data["words_log"]: list = []
    data["points_total"]: int = 0
    data["stats"]: List[Tuple[int, int, int]] = [
        (2,0,0),
        (3,0,0),
        (4,0,0),
        (5,0,0),
        (6,0,0),
        (7,0,0),
        (8,0,0),
    ]
    data["global_values_today"]: List[Tuple[int, int, float]] = db.read_global_values_from_db()
    data["ranking"] = db.read_rankings_from_db()
    data["word_status"]:str = ""
    data["trophies"]: Dict[int, Dict] = {
        1: {
            "id": 1,
            "description": "Discover a word for the first time",
            "achieved": False,
            "word": "",
            "date": ""
        },
        2: {
            "id": 2,
            "description": "Discover the longest word so far",
            "achieved": False,
            "word": "",
            "date": ""
        },
        3: {
            "id": 3,
            "description": "Discover a word using all available letters",
            "achieved": False,
            "word": "",
            "date": ""
        }
    }



    # Event handlers
    def write_cookies(self, player_name):
        self.player_name_cookie = player_name
        self.player_id_cookie = db.insert_player_into_db(player_name)[0][0]

    
    def login_handler(self):
        self.data["words_log"]: list = db.read_words_log_from_db(self.data["player_id"])
        self.data["points_total"]: int = db.read_points_from_db(self.data["player_id"])
        self.data["stats"] = db.get_stats_from_db(self.data["player_id"])
        return rx.redirect("/home")


    def trophy_alert_dialog_show(self, trophy_number:int=0):
        self.trophy_number_to_show = trophy_number
        self.trophy_description_to_show = self.data["trophies"][self.trophy_number_to_show]["description"]
        self.alert_dialog_show = True

    
    def trophy_alert_dialog_hide(self):
        self.alert_dialog_show = False


    def submit_word_handler(self, form_data: dict):
        self.form_data = form_data
        self.data["word"] = self.form_data["word"]
        bl.readfdb_checkword_assingpoints_writetdb(self)


    def ranking_top_points_button_handler(self):
       self.data["ranking_selected"] = "top_points"
       self.data["ranking_period"] = self.radio_value.lower()
       self.data["ranking"] = db.read_rankings_from_db(
           ranking_type=self.data["ranking_selected"],
           period=self.data["ranking_period"])
    

    def ranking_more_words_button_handler(self):
       self.data["ranking_selected"] = "more_words"
       self.data["ranking_period"] = self.radio_value.lower()
       self.data["ranking"] = db.read_rankings_from_db(
           ranking_type=self.data["ranking_selected"],
           period=self.data["ranking_period"])

    
    def ranking_longest_word_button_handler(self):
       self.data["ranking_selected"] = "longest_word"
       self.data["ranking_period"] = self.radio_value.lower()
       self.data["ranking"] = db.read_rankings_from_db(
           ranking_type=self.data["ranking_selected"],
           period=self.data["ranking_period"])


    # Computed vars    
    @rx.var
    def cookies_to_data(self):
        self.data["player_name"] = self.player_name_cookie
        self.data["player_id"] = self.player_id_cookie

    @rx.var
    def compound_text(self) -> str:
        self.text_to_show += self.button_letter
        self.button_letter = ""
        return self.text_to_show
    
    
    @rx.var
    def response(self) -> str:
        response_message = ""
        if self.data["word_status"] == "valid":
            if self.data["points"] > 0:
                response_message = f"Good! +{self.data['points']} points!"
            else:
                response_message = "Not found in the dictionary."
        elif self.data["word_status"] == "invalid":
            response_message = "Invalid word! Please, use only the given letters."
        elif self.data["word_status"] == "repeated":
            response_message = "Word already submitted!"
        else:
            response_message = ""
        return response_message


    @rx.var
    def stats_to_show(self) -> List[Tuple]:
        return [
            (
                self.data["stats"][i][0],
                self.data["stats"][i][1],
                self.data["stats"][i][2],
                self.data["stats"][i][1] / self.data["stats"][i][2] if self.data["stats"][i][2] != 0 else 0
            ) for i in range(7)
        ]


    @rx.var
    def trophies_to_show(self) -> List[Tuple]:
        return [
            (
                self.data["trophies"][i]["id"],
                self.data["trophies"][i]["description"],
                "Yes" if self.data["trophies"][i]["achieved"] else "No",
                self.data["trophies"][i]["word"].capitalize() if self.data["trophies"][i]["achieved"] else "-",
                self.data["trophies"][i]["date"].strftime("%d/%m/%Y - %H:%M") if self.data["trophies"][i]["achieved"] else "-",
            ) for i in range(1,4)
        ]
    

    @rx.var
    def words_log_to_show(self) -> List[Tuple]:
        return [
            (i+1, word.capitalize()) for i, word in enumerate(self.data["words_log"])
        ]