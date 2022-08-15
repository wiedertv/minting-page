import type { NextPage } from 'next'
import styled from 'styled-components'
import { MainLayout } from '../Layouts/MainLayout'

const MintingPage = styled.section`
  display: grid;
  grid-template-columns: 3fr 2fr;
  position: absolute;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-items: center;
  margin-top: 1rem auto;
  `;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 10vh;
  width: 70%;
  position: relative;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  margin: 0;
  color: ${(props) => props.theme.colors.primary};
`;

const Counter = styled.h3`
  font-size: 4rem;
  font-weight: 400;
  margin: 0;
  text-align: center;
  color: ${(props) => props.theme.colors.accent};
`;

const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  margin: 0;
  color: ${(props) => props.theme.colors.primary};
  `;

const MintingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const FormControllerWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: row;
  justify-content: center;
  gap: 1.5rem;
  align-items: center;
  width: 100%;
  `;

const FormControllerButton = styled.button`
  font-size: 2.2rem;
  padding: 0 0.7rem;
  margin: 0;
  font-weight: 300;
  text-align: center;
  background: ${(props) => props.theme.backgrounds.offColor};
  border: none;
  color: ${(props) => props.theme.colors.primary};
  border-radius: 100%;
`;

const FormControllerInput = styled.input`
        font-size: 2rem;
        border: 1px solid white;
        border-radius: 7px;
        padding: 0.5rem 0.7rem;
        margin: 0;
        text-align: center;
        background: transparent;
        color: ${props => props.theme.colors.primary};
        max-width: 10%;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    &[type=number] {
    -moz-appearance: textfield;
    }
`;
const MintButton = styled.button`
  background: ${props => props.theme.backgrounds.accent};
  color: ${props => props.theme.colors.primary };
  border: 1px solid ${props => props.theme.backgrounds.primary};
  border-radius: 10px;
  width: 50%;
  padding: 0.8rem 2.5rem;
  margin: 1.4rem 0.5rem 0 0.5rem;
  font-size: 1.4rem;


  &:hover {
      cursor: pointer;
      opacity: 0.8;
  }

  &:disabled {
      background: #535353;
      opacity: 0.8;
      cursor: not-allowed;
  }
`;

const TotalMinted = styled.h3`
  font-size: 1.3rem;
  font-weight: 300;
  margin: 0;
  text-align: center;
  margin-top: 1rem;
  color: ${(props) => props.theme.colors.offColor};
`;

const Home: NextPage = () => {
  return (
    <>

      <MainLayout >
        <MintingPage > 
          <Container>
            <Title>Mark Rise</Title>
            <Counter> 00:10:00 </Counter>
            <Description>
              Exclusive Mint of art in collaboration <br/>
              with Mark Rise for Not Only a JPG.
            </Description>
            <MintingWrapper>
                <FormControllerWrapper>
                  <FormControllerButton 
                  >
                    −
                  </FormControllerButton>
                  <FormControllerInput 
                  type="number"
                  readOnly 
                  value={"01"} />
                  <FormControllerButton
                    >
                    +
                  </FormControllerButton>
                </FormControllerWrapper>
                <MintButton 
                  >
                Mint  
              </MintButton>
              <TotalMinted>
                Minted Pieces: 0
              </TotalMinted>
            </MintingWrapper>


          </Container>
          <Container> </Container>
        </MintingPage>
      </MainLayout>
    </>
  )
}

export default Home
