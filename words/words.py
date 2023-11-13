import reflex as rx
import words.styles.styles as styles
from words.state import State
from .pages.index import index
from .pages.home import home
from .pages.stats import stats
from .pages.trophies import trophies


# Add state and page to the app.
app = rx.App(
    state=State,
    style=styles.BASE_STYLE
)
app.add_page(index)
app.add_page(home)
app.add_page(stats)
app.add_page(trophies)
app.compile()