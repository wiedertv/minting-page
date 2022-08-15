import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connectToMetamask } from '../../utils/ethers'


const Button = styled.button`
    background: transparent;
    border: 1.2px solid #fff;
    color: #fff;
    font-size: 1.1rem;
    border-radius: 11px;
    padding: 0.5rem 1rem;
    margin: 0;

`;


export const MetamaskButton = () => {

    useEffect(() => {
        // @ts-ignore
        const { ethereum } = window;
        if (ethereum) {
            const chain = ethereum.chainId;
            const account = ethereum.selectedAddress;
            console.log(chain);
            console.log(account);
        }
    })
    

  return (
    <>
        <Button onClick={() => connectToMetamask()}> Connect Metamask </Button>
    </>
  )
}
