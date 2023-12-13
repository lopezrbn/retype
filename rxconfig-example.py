import reflex as rx
import socket

config = rx.Config(
    app_name="retype",
    api_url=("https://your-domain.com" if socket.gethostname() == "your-hostname" else "http://localhost:8000"),
)