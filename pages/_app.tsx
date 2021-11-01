// next
import { AppProps } from "next/dist/shared/lib/router/router"
import Head from "next/head"
// styled-components
import { ThemeProvider } from "styled-components"
// theme
import GlobalStyle from "theme/GlobalStyle"
import DefaultTheme from "theme/DefaultTheme"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
            </Head>
            <ThemeProvider theme={DefaultTheme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp
