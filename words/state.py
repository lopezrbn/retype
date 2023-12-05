import reflex as rx
from typing import List, Dict, Tuple
from datetime import timedelta, date

import words.database as db
import words.business_logic as bl


def insert_new_lines_in_str(text, every=75):
        lines = []
        for i in range(0, len(text), every):
            lines.append(text[i:i+every])
        return "\n\n".join(lines)


class ComplexType(rx.Base):
    attribute: List[Tuple]


class State(rx.State):
    
    # Base vars
    
    alert_dialog_show: bool = False
    button_letter: str = ""
    db_petition_output: List[Tuple] = []
    form_data: dict = {}
    player_name_cookie: str = rx.Cookie(name="player_name_cookie", max_age=timedelta(days=400).total_seconds())
    player_id_cookie: str = rx.Cookie(name="player_id_cookie" ,max_age=timedelta(days=400).total_seconds())
    query_db_petition: str = ""
    radio_value: str = "Day"
    select_db_petition: bool = True
    text_to_show: str = ""
    text_player_name_input: str = ""
    trophy_description_to_show: str = ""
    trophy_number_to_show: int = 0

    data: Dict[str, List[str]] = {}
    data["day_letters"]:list = db.read_day_letters_from_db()
    data["definition"]: str = ""
    data["global_values_today"]: List[int | float] = db.read_global_values_from_db()
    data["player_name"]: str = ""
    data["player_id"]: str = "0"
    data["points_total"]: int = 0
    data["ranking"] = db.read_rankings_from_db()
    data["stats"]: List[Tuple[int, int, int]] = [
        (2,0,0),
        (3,0,0),
        (4,0,0),
        (5,0,0),
        (6,0,0),
        (7,0,0),
        (8,0,0),
    ]
    data["trophies_description"]: Dict[int, str] = dict(db.read_trophies_description_from_db())
    data["trophies_earned"]: List[Tuple[int, str, date, str]] = db.read_trophies_earned_from_db(data["player_id"])
    data["word"]: str = ""
    data["words_log"]: list = []
    data["word_status"]: str = ""


    # Event handlers
    def load_stats(self):
        self.data["stats"] = db.get_stats_from_db(self.data["player_id"])


    def load_trophies(self):
        self.data["trophies_earned"]: List[Tuple[int, str, date, str]] = db.read_trophies_earned_from_db(self.data["player_id"])


    def login_handler(self):
        self.data["words_log"]: list = db.read_words_log_from_db(self.data["player_id"])
        self.data["points_total"]: int = db.read_points_from_db(self.data["player_id"])
        self.data["stats"] = db.get_stats_from_db(self.data["player_id"])
        return rx.redirect("/home")


    def ranking_longest_word_button_handler(self):
       self.data["ranking_selected"] = "longest_word"
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

    
    def ranking_top_points_button_handler(self):
       self.data["ranking_selected"] = "top_points"
       self.data["ranking_period"] = self.radio_value.lower()
       self.data["ranking"] = db.read_rankings_from_db(
           ranking_type=self.data["ranking_selected"],
           period=self.data["ranking_period"])
    

    def reload_day_letters(self):
        self.data["day_letters"]:list = db.read_day_letters_from_db()


    def reload_static_data(self):
        self.data["points_total"]: int = db.read_points_from_db(self.data["player_id"])
        self.data["words_log"]: list = db.read_words_log_from_db(self.data["player_id"])
        self.data["ranking"] = db.read_rankings_from_db()
        self.data["global_values_today"]: List[int | float] = db.read_global_values_from_db()
        

    def submit_dbpetition_handler(self, form_data: dict):
        self.form_data = form_data
        self.query_db_petition = self.form_data["query"]
        self.select_db_petition = self.form_data["select"]
        print("Query: manual query from user.")
        print(f"\n\t{self.query_db_petition}\n")
        self.db_petition_output = db.connect_to_db(query=self.query_db_petition, select = self.select_db_petition)
        if not self.db_petition_output:
            self.db_petition_output = []
        self.set_text_to_show("")


    def submit_word_handler(self, form_data: dict):
        self.form_data = form_data
        self.data["word"] = self.form_data["word"]
        bl.readfdb_checkword_assingpoints_writetdb(self)


    def trophy_alert_dialog_hide(self):
        self.alert_dialog_show = False


    def trophy_alert_dialog_show(self, trophy_number:int=0):
        self.trophy_number_to_show = trophy_number
        self.trophy_description_to_show = self.data["trophies_description"][trophy_number]
        self.alert_dialog_show = True

    
    def write_cookies(self, player_name):
        self.player_name_cookie = player_name
        self.player_id_cookie = db.insert_player_into_db(player_name)[0][0]


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
    def response(self) -> List[str]:
        response_message = ""
        response_definition = ""
        if self.data["word_status"] == "valid":
            if self.data["points"] > 0:
                response_message = f"Good! +{self.data['points']} points!"
                self.data["definition"] = insert_new_lines_in_str(self.data["definition"])
                response_definition = [self.data["word"].capitalize() + ": ", self.data["definition"]]
                # response_definition = self.insert_new_lines_in_str(response_definition)
            else:
                response_message = "Not found in the dictionary."
        elif self.data["word_status"] == "invalid":
            response_message = "Invalid word! Please, use only the given letters."
        elif self.data["word_status"] == "repeated":
            response_message = "Word already submitted!"
        else:
            response_message = ""
            response_definition = ""
        return [response_message, response_definition]


    @rx.var
    def stats_to_show(self) -> List[Tuple]:
        return [
            (
                self.data["stats"][i][0],
                self.data["stats"][i][1],
                self.data["stats"][i][2],
                f"{(self.data['stats'][i][1] / self.data['stats'][i][2] * 100 if self.data['stats'][i][2] != 0 else 0.0):.2f} %"
            ) for i in range(7)
        ]


    @rx.var
    def trophies_to_show(self) -> List[Tuple]:
        return self.data["trophies_earned"]


    @rx.var
    def words_log_to_show(self) -> List[Tuple]:
        return [
            (i+1, word.capitalize()) for i, word in enumerate(self.data["words_log"])
        ]
    

    @rx.var
    def date_today(self) -> str:
        return date.today().strftime("%d %B %Y")
    

    @rx.var
    def global_values_today_to_show(self) -> Tuple[str]:
        return (
            f"{self.data['global_values_today'][0]}",
            f"{self.data['global_values_today'][1]}",
            f"{self.data['global_values_today'][2]:.2f}"
        )