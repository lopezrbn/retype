import reflex as rx
import retype.styles.styles as styles
from retype.state import State
from .pages.index import index
from .pages.home import home
from .pages.stats import stats
from .pages.trophies import trophies
from .pages.dbpetitions import dbpetitions


title = "Rety.pe - A game of words"

# Add state and page to the app.
app = rx.App(
    style=styles.BASE_STYLE,
    theme=rx.theme(
        appearance= "light",
        colors={
            "background": styles.PRIM_COLOR,
            "primary": styles.SEC_COLOR,
            "text": styles.TEXT_COLOR,
        },
    ),
)
app.add_page(
    index,
    title=title,
)
app.add_page(
    home,
    title=title,
    on_load=[State.reload_static_data, State.reload_day_letters],
)
app.add_page(
    stats,
    title=title,
    on_load=[State.reload_static_data, State.load_stats],
)
app.add_page(
    trophies,
    title=title,
    on_load=[State.reload_static_data, State.load_trophies],
)
app.add_page(
    dbpetitions,
    title=title,
    on_load=State.reload_static_data,
),