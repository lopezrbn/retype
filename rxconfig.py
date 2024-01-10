import reflex as rx
import socket


front_port = 3001
back_port = 8001

config = rx.Config(
    app_name="retype",
    api_url=("https://rety.pe" if socket.gethostname() == "vps-955fe093" else f"http://localhost:{back_port}"),
    # env=(rx.Env.PROD if socket.gethostname() == "vps-955fe093" else rx.Env.DEV),
    frontend_port=front_port,
    backend_port=back_port
)