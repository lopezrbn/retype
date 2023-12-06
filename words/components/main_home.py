import reflex as rx

from words.state import State
from words.styles.styles import Size


def build_alert_dialog(trophy_number, trophy_description, word):
    return rx.box(
         rx.alert_dialog(
            rx.alert_dialog_overlay(
                rx.alert_dialog_content(
                    rx.alert_dialog_header("New tropy!"),
                    rx.alert_dialog_body(
                        f"Trophy {trophy_number} - {trophy_description}: {word}.\nCongratulations!"
                    ),
                    rx.alert_dialog_footer(
                        rx.button(
                            "Close",
                            on_click=State.trophy_alert_dialog_hide(trophy_number),
                        )
                    ),
                )
            ),
            is_open=State.alert_dialog_show[trophy_number],
        ),
    )


def main_letters_box() -> rx.Component:
    return rx.center(
        rx.box(
            rx.heading(
                "Today's letters are:",
                font_size=Size.BIG.value,
            ),
            rx.spacer(),
            rx.button_group(
                rx.button(
                    State.data["day_letters"][0],
                    on_click=State.set_button_letter(State.data["day_letters"][0]),
                ),
                rx.button(
                    State.data["day_letters"][1],
                    on_click=State.set_button_letter(State.data["day_letters"][1]),
                ),
                rx.button(
                    State.data["day_letters"][2],
                    on_click=State.set_button_letter(State.data["day_letters"][2]),
                ),
                rx.button(
                    State.data["day_letters"][3],
                    on_click=State.set_button_letter(State.data["day_letters"][3]),
                ),
                rx.button(
                    State.data["day_letters"][4],
                    on_click=State.set_button_letter(State.data["day_letters"][4]),
                ),
                rx.button(
                    State.data["day_letters"][5],
                    on_click=State.set_button_letter(State.data["day_letters"][5]),
                ),
                rx.button(
                    State.data["day_letters"][6],
                    on_click=State.set_button_letter(State.data["day_letters"][6]),
                ),
            ),
        )
    )


def main_form() -> rx.Component:
    return rx.form(
        rx.vstack(
            rx.input(
                placeholder="Enter a word",
                value = State.compound_text,
                id="word",
                on_change=State.set_text_to_show
            ),
            rx.hstack(
                rx.button(
                    "Submit",
                    type_="submit",
                ),
                rx.button(
                    "Reset",
                    type_="reset",
                    on_click=State.set_text_to_show(""),
                ),
            )
        ),
        on_submit=State.submit_word_handler
    )


def main_response() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.text(State.response[0]),
            rx.spacer(),
            rx.text(
                rx.span(
                    State.response[1][0],
                    as_="i"
                ),
                State.response[1][1],
            ),
        ),
    )


def main_home() -> rx.Component:
    return rx.box(
        rx.center(
            rx.vstack(
                main_letters_box(),
                rx.spacer(),
                main_form(),
                rx.spacer(),
                main_response(),
                build_alert_dialog(7, State.trophies_description[7], State.data["word"]),
                build_alert_dialog(6, State.trophies_description[6], State.data["word"]),
                build_alert_dialog(5, State.trophies_description[5], State.data["word"]),
                build_alert_dialog(4, State.trophies_description[4], State.data["word"]),
                build_alert_dialog(3, State.trophies_description[3], State.data["word"]),
                build_alert_dialog(2, State.trophies_description[2], State.data["word"]),
                build_alert_dialog(1, State.trophies_description[1], State.data["word"]),
            ),
            height="50vh",
        ),
        flex_grow="1",
        # border_width="medium",
        align_items="center",
        width="1024px",
        # min_w="1024px",
    )