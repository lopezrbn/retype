import socket

db = {
    "user": "ubuntu" if socket.gethostname() == "vps-955fe093" else "root",
    "host": "localhost",
    "database": "words_game",
    "password": "tartadequeso"
}