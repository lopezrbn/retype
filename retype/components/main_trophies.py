import reflex as rx

from retype.state import State


def main_trophies() -> rx.Component:
    return rx.chakra.box(
        rx.chakra.vstack(
            rx.chakra.heading("Your trophies"),
            rx.chakra.table(
                headers=["Trophy number", "Description", "Date", "Word"],
                rows=State.trophies_to_show,
                # rows=State.data["trophies_earned"]
            ),
        ),
        flex_grow="1",
        # border_width="medium",
    )