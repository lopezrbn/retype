import reflex_chakra as rx

from retype.state import State


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
            rx.spacer(),
            rx.text(
                "Logged in as ",
                rx.span(
                    rx.link(
                        f"{State.data['player_name']}",
                        href="/"
                    ),
                ),
            ),
        ),
        rx.divider(),
    )