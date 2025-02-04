import reflex_chakra as rx

from ..components.sidebarleft import sidebarleft
from ..components.sidebarright import sidebarright


def body(*args) -> rx.Component:
    return rx.flex(
        rx.flex(
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