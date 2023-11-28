import reflex as rx
import words.styles.styles as styles
from words.state import State
from .pages.index import index
from .pages.home import home
from .pages.stats import stats
from .pages.trophies import trophies
from .pages.dbpetitions import dbpetitions


# Add state and page to the app.
app = rx.App(
    state=State,
    style=styles.BASE_STYLE
)
app.add_page(
    index,
    title="Rety.pe - A words game",
)
app.add_page(
    home,
    title="Rety.pe - A words game",
    on_load=[State.reload_static_data, State.reload_day_letters],
)
app.add_page(
    stats,
    title="Rety.pe - A words game",
    on_load=[State.reload_static_data, State.load_stats],
)
app.add_page(
    trophies,
    title="Rety.pe - A words game",
    on_load=[State.reload_static_data, State.load_trophies],
)
app.add_page(
    dbpetitions,
    title="Rety.pe - A words game",
    on_load=State.reload_static_data,
),
app.compile()