import reflex_chakra as rx

from retype.state import State


def main_form() -> rx.Component:
    return rx.form(
        rx.vstack(
            rx.input(
                placeholder="Enter a valid query",
                value = State.db_petition_query,
                id="query",
                on_change=State.set_db_petition_query,
            ),
            rx.select(
                [
                    "SELECT * FROM words",
                    "SELECT * FROM players",
                    "SELECT * FROM words ORDER BY date_creation DESC",
                    f"""
                        SELECT p.id, p.name, o.date_creation, o.word, o.no_letters, o.points
                        FROM players AS p
                        INNER JOIN words AS o
                            ON p.id = o.player_id
                        ORDER BY o.date_creation DESC
                    """,
                ],
                placeholder="Select a query",
                on_change=State.set_db_petition_query,
            ),
            rx.password(
                placeholder="Enter the db password",
                on_change=State.set_db_petition_password_entered,
            ),
            rx.hstack(
                rx.button(
                    "Submit",
                    type_="submit",
                ),
                rx.button(
                    "Reset",
                    type_="reset",
                    on_click=State.set_db_petition_query(""),
                ),
            )
        ),
        on_submit=State.submit_dbpetition_handler
    )


def main_response() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.text(State.db_petition_warning_message),
            rx.table(
                    # headers=["Letters", "Found", "Total found", "%"],
                    rows=State.db_petition_output,
                    text_align="center",
            ),
        ),
    )


def main_dbpetitions() -> rx.Component:
    return rx.box(
        rx.center(
            rx.vstack(
                main_form(),
                rx.spacer(),
                main_response(),
            ),
        ),
        flex_grow="1",
        # border_width="medium",
        align_items="center",
    )