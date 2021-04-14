import Head from 'next/head'
import React from 'react'
import {ThemeProvider as StyledThemeProvider, createGlobalStyle} from 'styled-components'

export const colors = {
    dark: {
        background: '#20252a',
        card: '#404348',
        text: '#dce1e8',
    },
    light: {
        background: '#e9ecf3',
        card: '#ffffff',
        text: '#20252a',
    },
}

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props: any) => props.theme.background};
        color: ${(props: any) => props.theme.text};
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        box-sizing: border-box;
        font-family: Sen;
        user-select: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
    }

    #__next {
        width: 100vw;
    }

    * {
        transition: 0.2s color ease-in-out, 0.2s background-color ease-in-out;
    }
`

export const ThemeProvider: React.FC = ({children}) => {
    return (
        <StyledThemeProvider theme={colors.dark}>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css?family=Playfair+Display:400,500,700,800,900|Sen&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <GlobalStyles />
            {children}
        </StyledThemeProvider>
    )
}
