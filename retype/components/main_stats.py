import reflex as rx

from retype.state import State


def main_stats() -> rx.Component:
    return rx.chakra.box(
        rx.chakra.vstack(
            rx.chakra.heading("Your stats"),
            rx.chakra.table(
                headers=["Letters", "Found", "Total found", "%"],
                rows=State.stats_to_show,
                text_align="center",
            ),
        ),
        flex_grow="1",
        # border_width="medium",
    )