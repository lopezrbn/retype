import reflex as rx

from retype.state import State


def sidebarleft_table() -> rx.Component:
    return rx.chakra.table_container(
        rx.chakra.table(
            headers=["#", "Word"],
            rows=State.words_log_to_show,
        )
    )


def sidebarleft() -> rx.Component:
    return rx.chakra.box(

        rx.chakra.box(
            rx.chakra.vstack(
                rx.chakra.heading("Your points"),
                rx.chakra.text(State.data["points_total"]),
            ),
        ),

        rx.chakra.divider(),
        
        rx.chakra.box(
            rx.chakra.heading("Your words"),
            sidebarleft_table(),
        ),

        border_width="medium",
        width=["350px", "350px", "350px", "250px"],
        # flex_grow="1",
    )