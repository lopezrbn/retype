import reflex as rx


def footer() -> rx.Component:
    return rx.box(
        rx.text(
            "Footer"
        ),
        border_color="black",
        border_width="thick",
        border_radius="lg",
    )