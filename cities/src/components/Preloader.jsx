import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Refresh } from '../assets/Refresh.svg'

const Container = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;

const Text = styled.div`
  font-size: ${props => props.small ? '25px' : '50pt'};
  text-align: center;
  color: #6F8185;
`;

const RefreshButton = styled.button`
  width: 250px;
  height: 80px;
  margin-top: 20px;
  background-color: #C9D2D7;
  border: none;
  svg {
    width: 50px;
    height: 50px;
    fill: #6F8185;
  }
`;

function Preloader(props) {
  const { small } = props;
  return (
    <Container>
      <Text small={small}>Подождите, данные загружаются</Text>
      <RefreshButton small={small}><Refresh /></RefreshButton>
    </Container>
  );
}

export default Preloader;