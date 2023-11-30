import reflex as rx

from words.state import State


def main_trophies() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.heading("Your trophies"),
            rx.table(
                headers=["Trophy number", "Description", "Date", "Word"],
                rows=State.trophies_to_show,
                # rows=State.data["trophies_earned"]
            ),
        ),
        flex_grow="1",
        # border_width="medium",
    )