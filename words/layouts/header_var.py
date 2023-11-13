import reflex as rx

from words.state import State
from words.styles.styles import Size


def header_var() -> rx.Component:
    return rx.box(
        rx.heading(
            f"Welcome to Words, {State.data["player_name"]}!",
            font_size=Size.EXTRA_BIG.value,
        ),
        rx.divider(),
    )