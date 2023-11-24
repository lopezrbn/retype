import reflex as rx
from datetime import datetime

from words.state import State
from words.styles.styles import Size


def header_var() -> rx.Component:
    return rx.box(
        rx.hstack(
            rx.heading(
                f"Words ",
                font_size=Size.EXTRA_BIG.value,
                text_align="left",
            ),
            rx.text(State.date_today),
        ),
        rx.divider(),
    )