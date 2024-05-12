import reflex as rx

from ..state import State


def index():
    return rx.chakra.center(
        rx.chakra.vstack(
            rx.cond(
               State.player_name_cookie,
               rx.chakra.box(
                  rx.chakra.center(
                     rx.chakra.vstack(
                        rx.chakra.image(
                            src="/main-logo-transparent.png",
                        ),
                        rx.chakra.heading(f"Welcome back to rety.pe,\n", State.player_name_cookie, f"!"),
                        rx.chakra.spacer(),
                        rx.chakra.button(
                           "Log in",
                           on_click=State.login_handler()
                        ),
                     ),
                     height="90vh",
                  ),
               ),
               rx.chakra.box(
                  rx.chakra.center(
                     rx.chakra.vstack(
                        rx.chakra.image(
                           src="/main-logo-transparent.png",
                        ),
                        rx.chakra.heading("Welcome to rety.pe!"),
                        rx.chakra.spacer(),
                        rx.chakra.input(
                           placeholder="Enter your name",
                           value=State.text_player_name_input,
                           on_change=State.set_text_player_name_input,
                        ),
                        rx.chakra.spacer(),
                        rx.chakra.button(
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