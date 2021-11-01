const colors = {
    black: {
        light: "#2B2626",
        main: "#201D1D",
        dark: "#151313",
    },
    orange: {
        main: "#BB4430",
    },
    white: "#EFE6DD",
}

const DefaultTheme = {
    colors: colors,
    components: {
        body: {
            background: colors.black.dark,
            font: colors.white,
        },
        navbar: {
            background: colors.black.main,
            font: colors.white,
        },
    },
}

export default DefaultTheme
