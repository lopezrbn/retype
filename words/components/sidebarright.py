import reflex as rx

from words.state import State


def sidebarright_form() -> rx.Component:
    return rx.form(
                rx.vstack(
                    rx.hstack(
                        rx.button(
                            "Top points",
                            on_click=State.ranking_top_points_button_handler,
                        ),
                        rx.button(
                            "More words",
                            on_click=State.ranking_more_words_button_handler,
                        ),
                        rx.button(
                            "Longest word",
                            on_click=State.ranking_longest_word_button_handler,
                        )
                    ),
                    rx.hstack(
                        rx.radio_group(
                            ["Day", "Week", "Month"],
                            # default_value="Day",
                            # default_checked=True,
                            value=State.radio_value,
                            on_change=State.set_radio_value,
                            id="period",
                        )
                    )
                )
            )


def sidebarright_table() -> rx.Component:
    return rx.table_container(
        rx.table(
            headers=["#", "Player", "Points"],
            rows=[
                ("1", State.data["ranking"][0][0], State.data["ranking"][0][1]),
                ("2", State.data["ranking"][1][0], State.data["ranking"][1][1]),
                ("3", State.data["ranking"][2][0], State.data["ranking"][2][1]),
                ("4", State.data["ranking"][3][0], State.data["ranking"][3][1]),
                ("5", State.data["ranking"][4][0], State.data["ranking"][4][1]),
                ("6", State.data["ranking"][5][0], State.data["ranking"][5][1]),
                ("7", State.data["ranking"][6][0], State.data["ranking"][6][1]),
                ("8", State.data["ranking"][7][0], State.data["ranking"][7][1]),
                ("9", State.data["ranking"][8][0], State.data["ranking"][8][1]),
                ("10", State.data["ranking"][9][0], State.data["ranking"][9][1]),
            ],
        )
    )


def sidebarright() -> rx.Component:
    return rx.box(
        rx.box(
            rx.heading("Ranking top players")),
        rx.box(
            sidebarright_form(),
        ),
        rx.divider(),
        rx.box(
            sidebarright_table(),
        ),
        border_width="medium",
        width="350px",
        # flex_grow="1",
    )