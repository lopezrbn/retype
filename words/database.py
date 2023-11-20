from mysql.connector import connect, Error
from contextlib import closing
from datetime import date, timedelta, datetime

from .db_connection import db
from .business_logic import generate_letters


def connect_to_db(query: str, select: bool = True):
    try:
        with closing(connect(**db)) as connection:
            with closing(connection.cursor()) as cursor:
                cursor.execute(query)
                if select:
                    result = cursor.fetchall()
                    print("Query correctly executed.\n")
                    return result
                else:
                    connection.commit()
                    cursor.execute("SELECT LAST_INSERT_id()")
                    last_id = cursor.fetchall()
                    print("Query correctly executed.\n")
                    print(last_id)
                    return last_id
    except Error as e:
        print(e)
        return e


def create_global_values_query(query_number):
    today = date.today()
    if query_number == 0:
        variables = "player_id, COUNT(id)"
        group_by = "GROUP BY player_id, date"
        select = "COUNT(player_id)"
    elif query_number == 1:
        variables = "word, COUNT(id)"
        group_by = "GROUP BY word, date"
        select = "COUNT(word)"
    elif query_number == 2:
        variables, group_by, select = "points", "", "AVG(points)"
    else:
        variables, group_by, select = "", "", ""

    query = f"""
        WITH t1 as (
            SELECT {variables}, DATE(date_creation) AS date
            FROM words_game.words
            {group_by}
            HAVING date = "{today}"
        )
        SELECT {select}
        FROM t1
    """
    print(f"Query: {query}")
    return query


def create_insert_query(table: str, variables: list, values: list) -> str:
    query = f"INSERT INTO {table} ("
    for var in variables:
        query += var + ", "
    query = query[:-2] + ")\nVALUES ("
    for value in values:
        query += '"' + value + '"' + ", "
    query = query[:-2] + ")"
    print(f"Query: {query}")
    return query


def create_rankings_query(ranking_type: str, period: str) -> str:

    if ranking_type == "more_words":
        grouped_by_var_0 = "COUNT(o.id)"
        group_by_0 = "GROUP BY p.name, date"
        grouped_by_var_1 = "SUM(grouped_by_var)"
        group_by_1 = "GROUP BY name"
    elif ranking_type == "longest_word":
        grouped_by_var_0 = "o.no_letters"
        group_by_0 = ""
        grouped_by_var_1 = "grouped_by_var"
        group_by_1 = ""
    elif ranking_type == "top_points":
        grouped_by_var_0 = "SUM(o.points)"
        group_by_0 = "GROUP BY p.name, date"
        grouped_by_var_1 = "SUM(grouped_by_var)"
        group_by_1 = "GROUP BY name"
    else:
        grouped_by_var_0 = ""
        group_by_0 = ""
        grouped_by_var_1 = ""
        group_by_1 = ""

    if period == "day":
        start_daterange = date.today()
        end_daterange = date.today()
    elif period == "week":
        end_daterange = date.today()
        week_day = end_daterange.weekday()
        start_daterange = date.today() - timedelta(days=week_day)
    elif period == "month":
        end_daterange = date.today()
        month_day = end_daterange.day
        start_daterange = date.today() - timedelta(days=month_day)
    else:
        start_daterange = ""
        end_daterange = ""

    query = f"""
        WITH t1 as (
            SELECT p.name, DATE(o.date_creation) AS date, {grouped_by_var_0} AS grouped_by_var
            FROM words_game.players AS p
            INNER JOIN words_game.words AS o
                ON p.id = o.player_id
            {group_by_0}
            HAVING date BETWEEN "{start_daterange}" AND "{end_daterange}"
            ORDER BY grouped_by_var DESC
            LIMIT 5)
        SELECT name, {grouped_by_var_1}
        FROM t1
        {group_by_1}
        ORDER BY {grouped_by_var_1} DESC"""
    print(f"Query: {query}")
    return query


def create_select_query(variables: list, table: str, where_clause: str = None) -> str:
    query = f"SELECT "
    for var in variables:
        query += var + ", "
    query = query[:-2] + f" FROM {db['database']}.{table}"
    if where_clause:
        query += f" WHERE {where_clause}"
    print(f"Query: {query}")
    return query


def get_stats_from_db(player_id: int) -> list:
    output = []
    for i in range(2, 9):
        query_total_words = f"""
            SELECT COUNT(DISTINCT word)
            FROM words_game.words
            WHERE no_letters = {i}
        """

        query_user_words = f"""
            SELECT COUNT(DISTINCT word)
            FROM words_game.words
            WHERE no_letters = {i} AND player_id = {player_id}
        """

        print(f"Query: {query_user_words}")
        user_words = connect_to_db(query=query_user_words, select=True)[0][0]
        print(f"Query: {query_total_words}")
        total_words = connect_to_db(query=query_total_words, select=True)[0][0]
        output.append((i, user_words, total_words))

    return output


def insert_player_into_db(player_name):
    variables = ["name", "date_creation"]
    values = [player_name, str(datetime.now())]
    query = create_insert_query(table="players", variables=variables, values=values)
    last_id = connect_to_db(query=query, select=False)
    return last_id


def read_day_letters_from_db():
    today = str(date.today())
    query = create_select_query(variables=["*"], table="day_letters",
        where_clause=f"date_creation='{today}'")
    result = connect_to_db(query=query, select=True)
    if result:
        output = [column for column in result[0][2:]]
    else:
        output = generate_letters()
        variables = ["date_creation", "l0", "l1", "l2", "l3", "l4", "l5", "l6"]
        values = [today] + output
        query = create_insert_query(table="day_letters", variables=variables, values=values)
        connect_to_db(query=query, select=False)
    return output


def read_global_values_from_db():
    global_values_today = []
    for i in range(3):
        query = create_global_values_query(i)
        global_values_today.append(connect_to_db(query=query, select=True)[0][0])
    global_values_today[2] = 0.0 if global_values_today[2] is None else (
        float(global_values_today[2]))
    return global_values_today


def read_points_from_db(player_id):
    variables = ["points"]
    where_clause = f"player_id = \"{player_id}\" AND DATE(date_creation)='{str(date.today())}'"
    query = create_select_query(variables=variables, table="words", where_clause=where_clause)
    result = connect_to_db(query=query, select=True)
    points_total = 0
    for row in result:
        points_total += row[0]
    return points_total


def read_rankings_from_db(ranking_type: str = "top_points", period: str = "day"):
    query = create_rankings_query(ranking_type=ranking_type, period=period)
    result = connect_to_db(query=query, select=True)
    if len(result) < 5:
        for _ in range(len(result), 5):
            result.append(("No player", 0))
    result_int = []
    for i in range(5):
        result_int.append((result[i][0], int(result[i][1])))
    return result_int


def read_words_log_from_db(player_id):
    variables = ["word"]
    where_clause = f"player_id = \"{player_id}\" AND DATE(date_creation)='{str(date.today())}'"
    query = create_select_query(variables=variables, table="words", where_clause=where_clause)
    result = connect_to_db(query=query, select=True)
    words_log = []
    for row in result:
        words_log.append(row[0])
    return words_log