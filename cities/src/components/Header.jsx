import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

const Text = styled.div`
  font-size: 26pt;
  font-weight: 100;
  color: #85898C;
`;

const RefreshButton = styled.button`
  background-color: #C9D2D7;
  color: #869197;
  border: none;
  border-radius: 5px;
  margin-left: calc(50% - 350px);
  padding: 15px 45px;
  font-weight: 600;
`;


function Header() {
  return (
    <Container>
      <Text>Погода здесь</Text>
      <RefreshButton>Обновить геолокацию</RefreshButton>
    </Container>
  );
}

export default Header;