import reflex as rx
from my_reflex_webapp.components.global_values_bar import global_values_bar
from my_reflex_webapp.components.navbar import navbar
from my_reflex_webapp.components.body import body
from my_reflex_webapp.components.footer import footer
import my_reflex_webapp.styles.styles as styles


class State(rx.State):
    # Base vars
    day_letters: list = list("abcdefgh")
    text_to_show: str = ""
    index: int = 0

    # Event handlers
    def update_index(self):
        self.index += 1
        self.text_to_show = self.day_letters[self.index]

    # Computed vars
    @rx.var
    def compound_text(self):
        return self.day_letters[self.index]



def index() -> rx.Component:
    return rx.center(
        rx.box(
            global_values_bar(),
            navbar(),
            body(),
            footer(),
            rx.button(
                "a",
                on_click=State.update_index,
                ),
            rx.input(
                placeholder="Enter a word",
                value = State.text_to_show,
                on_change=State.set_text_to_show,
                ),
            width="99%",
#            text_align="center",
            border_color="black",
            border_width="thick",
            border_radius="lg",
        ),
        # bg="yellow",
    )


# Add state and page to the app.
app = rx.App(
    style=styles.BASE_STYLE
)
app.add_page(index)
app.compile()
