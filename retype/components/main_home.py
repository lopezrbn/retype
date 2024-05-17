import reflex as rx

from retype.state import State
from retype.styles.styles import Size


def build_alert_dialog(trophy_number, trophy_description, word):
    return rx.chakra.box(
         rx.chakra.alert_dialog(
            rx.chakra.alert_dialog_overlay(
                rx.chakra.alert_dialog_content(
                    rx.chakra.alert_dialog_header("New tropy!"),
                    rx.chakra.alert_dialog_body(
                        f"Trophy {trophy_number} - {trophy_description}: {word}.\nCongratulations!"
                    ),
                    rx.chakra.alert_dialog_footer(
                        rx.chakra.button(
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
    return rx.chakra.center(
        rx.chakra.box(
            rx.chakra.heading(
                "Today's letters are:",
                font_size=Size.BIG.value,
            ),
            rx.chakra.spacer(),
            rx.chakra.button_group(
                rx.chakra.button(
                    State.data["day_letters"][0],
                    on_click=State.set_button_letter(State.data["day_letters"][0]),
                ),
                rx.chakra.button(
                    State.data["day_letters"][1],
                    on_click=State.set_button_letter(State.data["day_letters"][1]),
                ),
                rx.chakra.button(
                    State.data["day_letters"][2],
                    on_click=State.set_button_letter(State.data["day_letters"][2]),
                ),
                rx.chakra.button(
                    State.data["day_letters"][3],
                    on_click=State.set_button_letter(State.data["day_letters"][3]),
                ),
                rx.chakra.button(
                    State.data["day_letters"][4],
                    on_click=State.set_button_letter(State.data["day_letters"][4]),
                ),
                rx.chakra.button(
                    State.data["day_letters"][5],
                    on_click=State.set_button_letter(State.data["day_letters"][5]),
                ),
                rx.chakra.button(
                    State.data["day_letters"][6],
                    on_click=State.set_button_letter(State.data["day_letters"][6]),
                ),
            ),
        )
    )


def main_form() -> rx.Component:
    return rx.chakra.form(
        rx.chakra.vstack(
            rx.chakra.input(
                placeholder="Enter a word",
                value = State.compound_text,
                id="word",
                on_change=State.set_text_to_show
            ),
            rx.chakra.hstack(
                rx.chakra.button(
                    "Submit",
                    type_="submit",
                ),
                rx.chakra.button(
                    "Reset",
                    type_="reset",
                    on_click=State.set_text_to_show(""),
                ),
            )
        ),
        on_submit=State.submit_word_handler
    )


def main_response() -> rx.Component:
    return rx.chakra.box(
        rx.chakra.vstack(
            rx.chakra.text(State.response[0]),
            rx.chakra.spacer(),
            rx.chakra.text(
                rx.chakra.span(
                    State.response[1][0],
                    as_="i"
                ),
                State.response[1][1],
            ),
        ),
    )


def main_home() -> rx.Component:
    return rx.chakra.box(
        rx.chakra.center(
            rx.chakra.vstack(
                main_letters_box(),
                rx.chakra.spacer(),
                main_form(),
                rx.chakra.spacer(),
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
        # width=["320px", "700px", "1024px"],
        width=["350px", "600px", "400px", "250px"]
        # min_w="1024px",
    )