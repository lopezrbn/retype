import reflex as rx


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
            # position="sticky",
            # padding_x="16px",
            # padding_y="8px",
            # z_index="999",
        ),
        rx.divider(),
    )