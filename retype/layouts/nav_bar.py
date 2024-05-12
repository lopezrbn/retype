import reflex as rx

from retype.state import State


def nav_bar() -> rx.Component:
    return rx.chakra.box(
        rx.chakra.hstack(
            rx.chakra.link(
                "Home",
                href="/home"
            ),
            rx.chakra.link(
                "Stats",
                href="/stats"
            ),
            rx.chakra.link(
                "Trophies",
                href="/trophies"
            ),
            rx.chakra.spacer(),
            rx.chakra.text(
                "Logged in as ",
                rx.chakra.span(
                    rx.chakra.link(
                        f"{State.data['player_name']}",
                        href="/"
                    ),
                ),
            ),
        ),
        rx.chakra.divider(),
    )