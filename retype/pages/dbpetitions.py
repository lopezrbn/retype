import reflex as rx

from ..layouts.nav_bar import nav_bar
from ..layouts.header_var import header_var
from ..layouts.body import body
from ..layouts.footer import footer
from ..components.main_dbpetitions import main_dbpetitions


def dbpetitions() -> rx.Component:
    return rx.chakra.box(
        nav_bar(),
        header_var(),
        main_dbpetitions(),
        footer(),
        width="99%",
    )