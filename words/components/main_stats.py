import reflex as rx

from words.state import State


def main_stats() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.heading("Your stats"),
            rx.table(
                headers=["Letters", "Found", "Total found", "%"],
                rows=State.stats_to_show,
                text_align="center",
            ),
        ),
        flex_grow="1",
        # border_width="medium",
    )