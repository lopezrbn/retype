import reflex as rx


def navbar() -> rx.Component:
    return rx.box(
        rx.hstack(
            rx.text(
                "Navbar",
                # height="40px"
            ),
            position="sticky",
            # padding_x="16px",
            # padding_y="8px",
            z_index="999",
            border_color="black",
            border_width="thick",
            border_radius="lg",
        )
    )