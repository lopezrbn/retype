import reflex as rx

from words.state import State


def nav_bar() -> rx.Component:
    return rx.box(
        rx.hstack(
            rx.link(
                "Home",
                href="/home"
            ),
            rx.link(
                "Stats",
                href="/stats"
            ),
            rx.link(
                "Trophies",
                href="/trophies"
            ),
            rx.text(
                f"Logged in as {State.data['player_name']}"
            ),
            # position="sticky",
            # padding_x="16px",
            # padding_y="8px",
            # z_index="999",
        ),
        rx.divider(),
    )