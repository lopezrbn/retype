import reflex as rx

from retype.state import State


def footer() -> rx.Component:
    return rx.chakra.box(
        rx.chakra.divider(),
        rx.chakra.text(f"Today {State.global_values_today_to_show[0]} people have \
                participated and {State.global_values_today_to_show[1]} words \
                have been found, scoring {State.global_values_today_to_show[2]} \
                points per word on average.",
        ),
        rx.chakra.text(
            rx.chakra.span(
                rx.chakra.link(
                    "2023",
                    href="./dbpetitions",
                    text_decoration="none"
                )
            ),
            " | @lopezrbn",
        ),
    )