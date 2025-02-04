import reflex_chakra as rx

from retype.state import State


def sidebarleft_table() -> rx.Component:
    return rx.table_container(
        rx.table(
            headers=["#", "Word"],
            rows=State.words_log_to_show,
        )
    )


def sidebarleft() -> rx.Component:
    return rx.box(

        rx.box(
            rx.vstack(
                rx.heading("Your points"),
                rx.text(State.data["points_total"]),
            ),
        ),

        rx.divider(),
        
        rx.box(
            rx.heading("Your words"),
            sidebarleft_table(),
        ),

        border_width="medium",
        width=["350px", "350px", "350px", "250px"],
        # flex_grow="1",
    )