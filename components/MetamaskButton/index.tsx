import Image from 'next/image';
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connectToMetamask } from '../../utils/ethers'


const Button = styled.button`
    width: 80%;
    background: transparent;
    border: 1.2px solid #fff;
    color: #fff;
    border-radius: 11px;
    font-family: 'Lato';
    font-weight: 100;
    padding: 0.5rem 0 ;
    margin: 0;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    div{
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    span{
        position: relative;
        height: 100%;
        display: flex;
        font-size: 1rem;
    }
    &:hover{
        scale: 1.05;
        cursor: pointer;
    }
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
        <Button onClick={() => connectToMetamask()}> 
            <div>
                <Image src="/images/metamask.png" alt='Logo de Metamask' width={30} height={30} />
            </div>
            <span>
                 Metamask
            </span>
        </Button>
    </>
  )
}
