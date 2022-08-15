import { ThemeProvider, DefaultTheme } from 'styled-components'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styled-components/GlobalStyles.styled'


const theme: DefaultTheme = {
  colors: {
    primary: '#FEFFFE',
    secondary: '#FFFFFF',
    offColor: '#c3c3c3',
    spheres: '#EDBF6B',
    accent: '#EDBF6B',
  },
  backgrounds:{
    primary: '#0F0E0E',
    secondary: '#161616',
    offColor: '#737373',
    accent: '#EDBF6B',
  }
}


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
