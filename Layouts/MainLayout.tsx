import { FC, PropsWithChildren } from "react"
import Head from "next/head"
import { Menu } from "../components/Menu"
import styled from "styled-components"
import { device } from "../utils/devices"
import { MetamaskButton } from "../components/MetamaskButton"

interface Props {
    title?: string
    description?: string
}

const MainWrapper = styled.main`
  min-height: 82vh;
  position: relative;
  z-index: 10;
`

const FooterStyled = styled.footer`
  position: relative;
  z-index: 10;
  min-height: 3vh;
  width: 100vw;
  padding: 0 5vw;
  background: ${(props) => props.theme.backgrounds.secondary};
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media ${device.mobileXS} {
    flex-direction: column;
    h1{
      font-size: 2rem;
      text-align: center;
    }
    p{
      font-size: 0.8rem;
    }

    @media ${device.laptop} {
      flex-direction: row;
      justify-content: space-between;
      h1{
        font-size: 1.3rem;
      }
      p{
        color: ${(props) => props.theme.colors.offColor};
        font-size: 0.8rem;
      }
}
`


export const MainLayout: FC<PropsWithChildren<Props>> = ({ children, title, description }) => {
  return (
    <> {/* <React.Fragment> */ }
        <Head>
        <title>{ title || 'Not Only a JPG' }</title>
        <meta name="description" content={`${
            description || 
            "Not Only a JPG is a platform for 3d crypto Art."}`
            } />
        <link rel="ico" href="/favicon.ico" />
        </Head>
        <Menu />
        <MainWrapper>
            
            {children}
        
        </MainWrapper>
        


        <FooterStyled>
            <h1>
              Not Only <br/>
                a JPG
            </h1>
            <p>
              NOJPG is a registered trademark - 2022.
            </p>
        </FooterStyled>
    </>
  )
}
