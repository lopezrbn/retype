import reflex as rx

from retype.state import State


def sidebarright_form() -> rx.Component:
    return rx.chakra.form(
                rx.chakra.vstack(
                    rx.chakra.hstack(
                        rx.chakra.button(
                            "Top points",
                            on_click=State.ranking_top_points_button_handler,
                        ),
                        rx.chakra.button(
                            "More words",
                            on_click=State.ranking_more_words_button_handler,
                        ),
                        rx.chakra.button(
                            "Longest word",
                            on_click=State.ranking_longest_word_button_handler,
                        )
                    ),
                    rx.chakra.hstack(
                        rx.chakra.radio_group(
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
    return rx.chakra.table_container(
        rx.chakra.table(
            headers=["#", "Player", "Points"],
            rows=[
                ("1", State.data["ranking"][0][0], State.data["ranking"][0][1]),
                ("2", State.data["ranking"][1][0], State.data["ranking"][1][1]),
                ("3", State.data["ranking"][2][0], State.data["ranking"][2][1]),
                ("4", State.data["ranking"][3][0], State.data["ranking"][3][1]),
                ("5", State.data["ranking"][4][0], State.data["ranking"][4][1]),
            ],
        )
    )


def sidebarright() -> rx.Component:
    return rx.chakra.box(
        rx.chakra.box(
            rx.chakra.heading("Ranking top players")),
        rx.chakra.box(
            sidebarright_form(),
        ),
        rx.chakra.divider(),
        rx.chakra.box(
            sidebarright_table(),
        ),
        border_width="medium",
        width="350px",
        # flex_grow="1",
    )