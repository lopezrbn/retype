import reflex as rx


def global_values_bar() -> rx.Component:
    return rx.box(
        rx.text(
            """Today 1 people have participated and 1 words have been found, 
            scoring 8 points per word on average"""
        ),
        border_color="black",
        border_width="thick",
        border_radius="lg",
    )