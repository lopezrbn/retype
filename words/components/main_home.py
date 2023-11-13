import reflex as rx

from words.state import State


def main_letters_box() -> rx.Component:
    return rx.center(
        rx.box(
            rx.heading("Today's letters are"),
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
        rx.text(State.response),
    )


def main_home() -> rx.Component:
    return rx.box(

        rx.vstack(

            main_letters_box(),

            rx.spacer(),

            main_form(),

            rx.spacer(),

            main_response(),
            
            rx.box(
                rx.alert_dialog(
                    rx.alert_dialog_overlay(
                        rx.alert_dialog_content(
                            rx.alert_dialog_header("New tropy!"),
                            rx.alert_dialog_body(
                                f"Trophy {State.trophy_number_to_show} - {State.trophy_description_to_show}: {State.data['word']}.\nCongratulations!"
                            ),
                            rx.alert_dialog_footer(
                                rx.button(
                                    "Close",
                                    on_click=State.trophy_alert_dialog_hide,
                                )
                            ),
                        )
                    ),
                    is_open=State.alert_dialog_show,
                ),
            ),
        ),
        flex_grow="1",
        border_width="medium",
    )