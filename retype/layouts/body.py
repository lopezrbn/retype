import reflex as rx

from ..components.sidebarleft import sidebarleft
from ..components.sidebarright import sidebarright


def body(*args) -> rx.Component:
    return rx.chakra.flex(
        rx.chakra.flex(
            *args,
            sidebarleft(),
            align="stretch",
            justify="center",
            wrap="wrap",
            direction="row-reverse",
            grow="1",
        ),
        sidebarright(),
        align="stretch",
        justify="center",
        wrap="wrap",
    )