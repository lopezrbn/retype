import reflex as rx

from ..layouts.nav_bar import nav_bar
from ..layouts.header_var import header_var
from ..layouts.body import body
from ..layouts.footer import footer
from ..components.main_home import main_home


def home() -> rx.Component:
    return rx.box(
        nav_bar(),
        header_var(),
        body(main_home()),
        footer(),
        width="99%",
    )