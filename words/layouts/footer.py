import reflex as rx

from words.state import State


def footer() -> rx.Component:
    return rx.box(
        rx.divider(),
        rx.text(f"Today {State.data["global_values_today"][0]} people have \
                participated and {State.data["global_values_today"][1]} words \
                have been found, scoring {State.data["global_values_today"][2]} \
                points per word on average.",
        ),
        rx.text(
            "2023 | @lopezrbn",
        ),
    )