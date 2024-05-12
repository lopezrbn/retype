import reflex as rx
from datetime import datetime

from retype.state import State
from retype.styles.styles import Size


def header_var() -> rx.Component:
    return rx.chakra.box(
        rx.chakra.hstack(
            rx.chakra.link(
                rx.chakra.image(src="/main-logo-transparent.png"),
                href="./home",
            ),
            rx.chakra.heading(
                State.date_today,
                font_size= Size.MEDIUM_BIG.value,
            ),
            align_items="center",
        ),
        rx.chakra.divider(),
    )