import reflex as rx


def sidebar_left_form() -> rx.Component:
    return rx.form(
                rx.vstack(
                    rx.hstack(
                        rx.button(
                            "Top points"
                        ),
                        rx.button(
                            "More words"
                        ),
                        rx.button(
                            "Longest word"
                        )
                    ),
                    rx.hstack(
                        rx.radio_group(
                            ["Day", "Week", "Month"]
                        )
                    )
                )
            )


def sidebar_left_table() -> rx.Component:
    return rx.table_container(
        rx.table(
            headers=["#", "Player", "Points"],
            rows=[
                ("1", "Player_name", "100"),
                ("2", "Player_name", "100"),
                ("3", "Player_name", "100"),
                ("4", "Player_name", "100"),
                ("5", "Player_name", "100"),
            ],
            variant="stripped",
        )
    )


def main_letters_box() -> rx.Component:
    return rx.center(
        rx.box(
            rx.heading("Today's letters are:"),
            rx.button_group(
                rx.button("letter 1"),
                rx.button("letter 2"),
                rx.button("letter 3"),
                rx.button("letter 4"),
                rx.button("letter 5"),
                rx.button("letter 6"),
                rx.button("letter 7"),
            ),
            text_align="center",
        )
    )


def main_form() -> rx.Component:
    return rx.form(
        rx.vstack(
            rx.input(
                placeholder="Enter a word"
            ),
            rx.hstack(
                rx.button("Submit", type_="submit"),
                rx.button("Reset", type_="reset"),
            )
        )
    )


def main_response() -> rx.Component:
    return rx.box(
        rx.text("Response")
    )


def sidebar_right_list() -> rx.Component:
    return rx.center(
        rx.ordered_list(
            items=[f"Word {i}" for i in range(1, 11)]
        ),
    )


def sidebar_left() -> rx.Component:
    return rx.box(
        rx.vstack(

            rx.box(
                rx.heading(
                    "Ranking top players"
                ),
            ),

            rx.divider(border_color="black"),

            rx.box(
                sidebar_left_form(),
            ),

            rx.divider(border_color="black"),

            rx.box(
                sidebar_left_table(),
            )
        ),
        width="25%",
        height="100%",
        border_color="black",
        border_width="thick",
        border_radius="lg",
    )


def main() -> rx.Component:
    return rx.box(

        rx.vstack(

            rx.box(
                rx.heading("Welcome to Words, Rubén!"),
                # border_color="black",
                # border_width="thick",
                # border_radius="lg",

            ),

            rx.divider(border_color="black"),

            rx.box(

                rx.vstack(

                    main_letters_box(),

                    rx.spacer(),

                    main_form(),

                    rx.spacer(),

                    main_response(),

                ),
                # border_color="black",
                # border_width="thick",
                # border_radius="lg",

            ),

        ),
        width="49%",
        # border_color="black",
        # border_width="thick",
        # border_radius="lg",

    )


def sidebar_right() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.box(
                rx.heading("Your points"),
                rx.text("8 points"),
            ),

            rx.divider(border_color="black"),

            rx.box(
                rx.heading("Your words"),
                sidebar_right_list(),
            ),
        ),
        width="25%",
        height="100%",
        border_color="black",
        border_width="thick",
        border_radius="lg",
    )


def body() -> rx.Component:
    return rx.box(
        rx.hstack(
            sidebar_left(),
            main(),
            sidebar_right(),
            align_items="top",
            justify_content="True"
        )
    )