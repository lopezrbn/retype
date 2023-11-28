import reflex as rx

from words.state import State


def main_form() -> rx.Component:
    return rx.form(
        rx.vstack(
            rx.input(
                placeholder="Enter a valid query",
                value = State.compound_text,
                id="query",
                on_change=State.set_text_to_show
            ),
            rx.checkbox(
                "Select",
                id="select",
                is_checked=State.select_db_petition,
                on_change=State.set_select_db_petition,
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
        on_submit=State.submit_dbpetition_handler
    )


def main_response() -> rx.Component:
    return rx.box(
        rx.table(
                # headers=["Letters", "Found", "Total found", "%"],
                rows=State.db_petition_output,
                text_align="center",
            ),
    )


def main_dbpetitions() -> rx.Component:
    return rx.box(

        rx.vstack(

            main_form(),

            rx.spacer(),

            main_response(),
            
        ),
        flex_grow="1",
        # border_width="medium",
        align_items="center",
    )