import reflex as rx

from ..state import State


def index():
    return rx.center(
        rx.vstack(
            rx.cond(
               State.player_name_cookie,
               rx.box(
                  rx.center(
                     rx.vstack(
                        rx.image(
                            src="/main-logo-transparent.png",
                        ),
                        rx.heading(f"Welcome back to rety.pe,\n", State.player_name_cookie, f"!"),
                        rx.spacer(),
                        rx.button(
                           "Log in",
                           on_click=State.login_handler()
                        ),
                     ),
                     height="90vh",
                  ),
               ),
               rx.box(
                  rx.center(
                     rx.vstack(
                        rx.image(
                           src="/main-logo-transparent.png",
                        ),
                        rx.heading("Welcome to rety.pe!"),
                        rx.spacer(),
                        rx.input(
                           placeholder="Enter your name",
                           value=State.text_player_name_input,
                           on_change=State.set_text_player_name_input,
                        ),
                        rx.spacer(),
                        rx.button(
                           "Log in",
                           on_click=lambda: State.write_cookies(State.text_player_name_input),
                        ),
                     ),
                     height="90vh",
                  ),
               ),
            ),
         ),
      )