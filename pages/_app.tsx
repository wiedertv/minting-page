import { ThemeProvider, DefaultTheme } from 'styled-components'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styled-components/GlobalStyles.styled'


const theme: DefaultTheme = {
  colors: {
    primary: '#FEFFFE',
    secondary: '#DDDDDD',
    offColor: '#c3c3c3',
    spheres: '#ECBF6A',
    accent: '#ECBF6A',
  },
  backgrounds:{
    primary: '#1d1d1d',
    secondary: '#161616',
    offColor: '#737373',
    accent: '#ECBF6A',
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
