import reflex as rx

from retype.state import State


def footer() -> rx.Component:
    return rx.box(
        rx.divider(),
        rx.text(f"Today {State.global_values_today_to_show[0]} people have \
                participated and {State.global_values_today_to_show[1]} words \
                have been found, scoring {State.global_values_today_to_show[2]} \
                points per word on average.",
        ),
        rx.text(
            rx.span(
                rx.link(
                    "2023",
                    href="./dbpetitions",
                    text_decoration="none"
                )
            ),
            " | @lopezrbn",
        ),
    )