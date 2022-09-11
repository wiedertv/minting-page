import { ThemeProvider, DefaultTheme } from 'styled-components'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styled-components/GlobalStyles.styled'


const theme: DefaultTheme = {
  colors: {
    primary: '#FEFFFE',
    secondary: '#DDDDDD',
    offColor: '#c3c3c3',
    spheres: '#FF3640',
    accent: '#A5E7E1',
  },
  backgrounds:{
    primary: '#252D5B',
    secondary: '#1D2248',
    offColor: '#737373',
    accent: '#A5E7E1',
  }
}

/*
#FF3640 Accent
#00BDD3 Accent 2
#252D5B BackGround
#1D2248 Footer Background
#A5E7E1 Buttons 
*/
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
