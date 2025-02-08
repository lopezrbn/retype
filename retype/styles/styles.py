import reflex_chakra as rx
from enum import Enum

# Constants
MAX_WIDTH = "560px"
# TEXT_COLOR = "black"
# PRIM_COLOR = "#f5f5f5"  # WHITE + GRAY  Used for background. Usually lighter than SEC_COLOR
# SEC_COLOR = "#848482"   # WHITE + GRAY  Used for remarking details. Usually darker than PRIM_COLOR
# PRIM_COLOR = "#FEFAEB"    # Amarillos
# SEC_COLOR = "#FAC934"
# TEXT_COLOR = "#0B3C49"
# PRIM_COLOR = "#F8F9FA"      # Grises
# SEC_COLOR = "#A6AEBB"
# TEXT_COLOR = "#2C3E50"
PRIM_COLOR = "#ECEFF4"      # Azul claro
SEC_COLOR = "#A3B4C7"
TEXT_COLOR = "#2E3440"


# Sizes
class Size(Enum):
    SMALL = "0.5em"
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    MEDIUM_BIG = "1.5em"
    BIG = "2em"
    EXTRA_BIG = "2.5em"

# Styles
BASE_STYLE = {
    rx.box: {
        "margin": Size.SMALL.value,
        # "border_width": "medium",
        "border_radius": "lg",
        "border_color": SEC_COLOR,
        # "padding": Size.SMALL.value,
    },
    rx.button: {
        "display": "block",
        "padding": Size.SMALL.value,
        "border_radius": Size.MEDIUM.value,
        "bg": SEC_COLOR,
        "color": TEXT_COLOR,
    },
    rx.divider: {
        "color": SEC_COLOR,
        "border_width": "thin",
    },
    rx.heading: {
        "color": TEXT_COLOR,
        "text_align": "center",
        "font_size": Size.MEDIUM_BIG.value,
    },
    rx.input: {
        "border_color": SEC_COLOR,
        "border_width": "medium",
        "color": TEXT_COLOR,
        # "text_align": "center",
        "placeholder_color": TEXT_COLOR,
    },
    rx.link: {
        "text_decoration": "underline",
        # "_hover": {},
        "color": TEXT_COLOR,
        # "font_size": Size.MEDIUM_BIG.value,
    },
    rx.radio_group: {
        "color": TEXT_COLOR,
        # "color_scheme": "red",
        # "border_width": "medium",
        # "accent_color": "red",
    },
    rx.table: {
        # "color": TEXT_COLOR,
        # "variant": "stripped",
        # "color_scheme": "teal",
        # "border": "2px solid black",
        # "border_width": "medium",
        # "border_top_width": "medium",
        # "border_top_color": "yellow",
        # "border_inline_start_width": "medium",
        # "border_inline_start_color": "pink",
        # "border_bottom_width": "medium",
        # "border_bottom_color": "red",
        # "border_bottom": ["1px", "solid", "black"]
    },
    rx.text: {
        "color": TEXT_COLOR,
        "text_align": "center",
    },
    "bg": PRIM_COLOR,
}

title_style = dict(
    width="100%",
    padding_top=Size.DEFAULT.value
)

button_title_style = dict(
    font_size=Size.DEFAULT.value
)

button_body_style = dict(
    font_size=Size.MEDIUM.value
)
