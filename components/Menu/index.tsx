import React from 'react'
import styled from 'styled-components';
import { MetamaskButton } from '../MetamaskButton';

const NavigationBar = styled.nav`
  display: grid;
  min-height: 10vh;
  position: relative;
  z-index: 10;
  align-items: center;
`;

const Items = styled.ul`
  padding: 0;
  margin: 0;
  justify-self: center;
  align-items: center;
  width: 70%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const Item = styled.li`
  display: flex;
  justify-content: center;
`;

export const Menu = () => {
  return (
    <>
      <NavigationBar>
        <Items>
          <Item> Information </Item>
          <Item> Legal Announcements </Item>
          <Item> Home </Item>
          <Item> Frequent Questions </Item>
          <Item>  
            <MetamaskButton />
          </Item>
        </Items>
      </NavigationBar>
    
    </>
  )
}
