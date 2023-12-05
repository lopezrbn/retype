import random
import requests
from datetime import datetime, date

import words.database as db


def check_trophies(State) -> dict:
    functions = [check_trophy1, check_trophy2, check_trophy3, check_trophy4,
                 check_trophy5, check_trophy6, check_trophy7]
    variables = ["trophy_id", "player_id", "date_creation", "word", "still_valid"]
    values = [f"_", f"{State.data['player_id']}", f"{datetime.now()}", f"{State.data['word']}", f"1"]
    for i, function in enumerate(functions):
        if function(State):
            values[0] = str(i+1)
            query = db.create_insert_query(table="trophies_earned", variables=variables, values=values)
            db.connect_to_db(query=query, select=False)
            State.trophy_alert_dialog_show(trophy_number=i+1)
    return None


def check_trophy1(State) -> bool:
    # Trophy description: Discover a word for the first time today
    query = f"""
        SELECT 1
        FROM words_game.words
        WHERE word = '{State.data["word"]}' AND DATE(date_creation) = '{date.today()}';
    """
    result = db.connect_to_db(query=query, select=True)
    if result:
        return False
    else:
        return True


def check_trophy2(State) -> bool:
    # Trophy description: Discover a word for the first time ever
    query = f"""
        SELECT 1
        FROM words_game.words
        WHERE word = '{State.data["word"]}';
    """
    result = db.connect_to_db(query=query, select=True)
    if result:
        return False
    else:
        return True

def check_trophy3(State) -> bool:
    # Trophy description: Discover the longest word of a day
    query = f"""
        SELECT MAX(no_letters)
        FROM words_game.words
        WHERE DATE(date_creation) = '{date.today()}'
    """
    print("Query: ")
    print(f"{query}")
    result = db.connect_to_db(query=query, select=True)[0][0]
    if result is None:
        result = 0
    if len(State.data["word"]) > result:
        # if the new word is longer than the previous words of the day, those words' trophy 3 is not valid anymore, so set still_valid column to 0.
        query = f"""
            UPDATE trophies_earned
            SET still_valid = 0
            WHERE trophy_id = 3 AND player_id = {State.data['player_id']};
        """
        print("Query: update still_valid column to 0 for the rest of the words if a new longer word has been found today")
        print(f"\t{query}\n")
        db.connect_to_db(query=query, select=False)
        # Finally, return True as the trophy 3 has been earned
        return True
    else:
        return False
    

def check_trophy4(State) -> bool:
    # Trophy description: Discover the longest word so far ever
    query = f"""
        SELECT MAX(no_letters)
        FROM words_game.words
    """
    result = db.connect_to_db(query=query, select=True)[0][0]
    if result is None:
        result = 0
    if len(State.data["word"]) > result:
        # if the new word is longer than any other, those words' trophy 4 is not valid anymore, so set still_valid column to 0.
        query = f"""
            UPDATE trophies_earned
            SET still_valid = 0
            WHERE trophy_id = 4 AND player_id = {State.data['player_id']};
        """
        print("Query: update still_valid column to 0 for the rest of the words if a new longer word has been found")
        print(f"\t{query}\n")
        db.connect_to_db(query=query, select=False)
        # Finally, return True as the trophy 4 has been earned
        return True
    else:
        return False


def check_trophy5(State) -> bool:
    # Trophy description: Discover a word using all available letters
    for letter in State.data["day_letters"]:
        if letter not in State.data["word"]:
            return False
    return True


def check_trophy6(State) -> bool:
    # Trophy description: Discover a word using all the vowels
    for vowel in ["a", "e", "i", "o", "u"]:
        if vowel not in State.data["word"]:
            return False
    return True


def check_trophy7(State) -> bool:
    # Trophy description: Discover the word retype
    return True if State.data["word"] == "retype" else False


def check_word_and_get_definition_and_points(input_word):

    url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + input_word.lower()

    try:
        r = requests.get(url)
        r.raise_for_status()
        resp = r.json()
        definition = resp[0]["meanings"][0]["definitions"][0]["definition"]
        points = 2 ** len(input_word)
    except requests.exceptions.RequestException as e:
        definition = ""
        points = 0
        print(e)

    return (definition, points)


def is_repeated_word(input_word, words_log):
    if input_word.lower() in words_log:
        return True
    else:
        return False


def is_valid_word(input_word, *, day_letters):
    if len(input_word) < 2:
        return False
    for letter in input_word.lower():
        if letter not in day_letters:
            return False
    return True


def generate_letters():
    vowels = [97, 101, 105, 111, 117]
    alphabet = list(range(97, 123))
    day_letters = []

    for _ in range(setup_data["n_vow_min"]):
        letter = random.choice(vowels)
        day_letters.append(letter)
        vowels.remove(letter)
        alphabet.remove(letter)

    for _ in range(setup_data["n_letters"] - setup_data["n_vow_min"]):
        letter = random.choice(alphabet)
        day_letters.append(letter)
        alphabet.remove(letter)

    random.shuffle(day_letters)
    day_letters = [chr(letter) for letter in day_letters]
    print(f"Generated letters: {day_letters}")
    return day_letters


def readfdb_checkword_assingpoints_writetdb(State):
    # Reading from db and initializing variables
    # State.data["words_log"] = db.read_words_log_from_db(State.data["player_id"])
    # State.data["points_total"] = db.read_points_from_db(State.data["player_id"])
    State.data["points"] = 0

    # Checking status of word (valid letters used and not a repeated word)
    State.data["word_valid_flag"] = is_valid_word(State.data["word"], day_letters=State.data["day_letters"])
    State.data["word_repeated_flag"] = is_repeated_word(State.data["word"], State.data["words_log"])
    if not State.data["word_valid_flag"]:
        State.data["word_status"] = "invalid"
    elif State.data["word_repeated_flag"]:
        State.data["word_status"] = "repeated"
    else:
        State.data["word_status"] = "valid"
    
    # Assign points and calculate len of word if it is a valid word
    if State.data["word_status"] == "valid":
        State.data["definition"], State.data["points"] = check_word_and_get_definition_and_points(input_word=State.data["word"])
        if State.data["points"] > 0:
            State.data["words_log"].append(State.data["word"].lower())
            State.data["points_total"] += State.data["points"]
            State.data["word_len"] = len(State.data["word"])
            check_trophies(State)

            # Writing in db
            variables = ["player_id", "date_creation", "word", "no_letters", "points"]
            values = [f"{State.data['player_id']}", f"{datetime.now()}", f"{State.data['word']}",
                      f"{State.data['word_len']}", f"{State.data['points']}"]
            query = db.create_insert_query(table="words", variables=variables, values=values)
            db.connect_to_db(query=query, select=False)

            # Update rankings, stats, trophies and global values
            State.data["ranking"] = db.read_rankings_from_db()
            # State.data["stats"] = db.get_stats_from_db(State.data["player_id"])
            # State.data["trophies"] = ""
            State.data["global_values_today"] = db.read_global_values_from_db()
            

    # Deleting word from input text
    State.set_text_to_show("")

    return None


setup_data = {
    "language_code": "en",
    "n_letters": 7,
    "n_vow_min": 2,
    "n_cons_min": 2,
}
