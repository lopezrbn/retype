import reflex as rx
import socket

config = rx.Config(
    app_name="words",
    api_url=("http://152.228.134.180" if socket.gethostname() == "vps-955fe093" else "http://localhost:8000"),
    # env=(rx.Env.PROD if socket.gethostname() == "vps-955fe093" else rx.Env.DEV),
)