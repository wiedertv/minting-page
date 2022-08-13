import { ThemeProvider, DefaultTheme } from 'styled-components'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styled-components/GlobalStyles.styled'


const theme: DefaultTheme = {
  colors: {
    primary: 'blue',
    secondary: '#0070f3',
  },
  backgrounds:{
    primary: '#feffff',
    secondary: '#f3f3f3',
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
