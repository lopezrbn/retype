import reflex as rx
import socket
frontend_port=<frontend_port>
backend_port=<backend_port>


config = rx.Config(
    app_name="retype",
    frontend_port=frontend_port,
    backend_port=backend_port,
)