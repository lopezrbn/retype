from mysql.connector import connect, Error
from contextlib import closing
from typing import Dict, List

import trophies_description as td


def connect_to_db(query: str):
    try:
        with closing(connect(**db)) as connection:
            with closing(connection.cursor()) as cursor:
                cursor.execute(query)
                connection.commit()
                print("Query correctly executed.\n\n")
                return None
    except Error as e:
        print(f"{e}\n\n")
        # return e


def create_db_query(db_name):
    query = f"CREATE DATABASE {db_name}"
    print(f"Query: create database {db_name}")
    print(f"\n\t{query}\n")
    return query


def create_insert_trophies_description_query(trophies_description: Dict) -> str:
    query = """
        INSERT INTO trophies_description (trophy_description)
        VALUES
    """
    for k,v in trophies_description.items():
        query += f"\t\t('{v}'),\n"
    query = query[:-2]
    print(f"Query: insert trophies description into table 'trophies_description'")
    print(f"{query}")
    return query


def create_table_query(table_name, table_vars):
    query = f"CREATE TABLE {table_name} ("
    for var in table_vars:
        query += var
    query += ")"
    print(f"Query: create table {table_name}")
    print(f"\n\t{query}\n")
    return query


if __name__ == "__main__":

    # database parameters
    db = {"user": "your_database_user",         # same user that you set when creating the database
        "host": "your_database_host",           # "localhost" as default
        "database": "your_database_name",       # "retype" as default
        "password": "your_database_password"    # same password that you set when creating the database
    }

    # names of tables to be created
    table_names = ["day_letters", "players", "words", "trophies_description", "trophies_earned"]

    # vars for tables to be created
    tables_vars = [
        (
            "id INT AUTO_INCREMENT PRIMARY KEY,",
            "date_creation DATE,",
            "l0 VARCHAR (1),",
            "l1 VARCHAR (1),",
            "l2 VARCHAR (1),",
            "l3 VARCHAR (1),",
            "l4 VARCHAR (1),",
            "l5 VARCHAR (1),",
            "l6 VARCHAR (1)"
        ),

        (
            "id INT AUTO_INCREMENT PRIMARY KEY,",
            "name VARCHAR (20),",
            "date_creation DATETIME(6),",
            "date_modification DATETIME(6)"
        ),

        (
            "id INT AUTO_INCREMENT PRIMARY KEY,",
            "player_id INT,",
            "date_creation DATETIME(6),",
            "date_modification DATETIME(6),",
            "word VARCHAR(20),",
            "no_letters INT,",
            "points INT,",
            "FOREIGN KEY(player_id) REFERENCES players(id)"
        ),

        (
            "trophy_id INT AUTO_INCREMENT PRIMARY KEY,",
            "trophy_description VARCHAR(100)",
        ),

        (
            "id INT AUTO_INCREMENT PRIMARY KEY,",
            "trophy_id INT,",
            "player_id INT,",
            "date_creation DATETIME(6),",
            "date_modification DATETIME(6),",
            "word VARCHAR(20),",
            "still_valid BOOLEAN,",
            "FOREIGN KEY(trophy_id) REFERENCES trophies_description(trophy_id),",
            "FOREIGN KEY(player_id) REFERENCES players(id)"
        )
    ]

    # create database
    query = create_db_query(db_name=db['database'])
    connect_to_db(query=query)

    # create tables
    for table_name, table_vars in zip(table_names, tables_vars):
        query = create_table_query(table_name, table_vars)
        connect_to_db(query=query)

    # insert trophies description into trophies table
    query = create_insert_trophies_description_query(trophies_description=td.trophies_description)
    connect_to_db(query=query)