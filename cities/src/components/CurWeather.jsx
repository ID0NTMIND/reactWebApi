import InfoBlock from './InfoBlock';
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoContainer = styled.div`
  width: 50%;
`;

const PlaceName = styled.div`
  font-size: 30pt;
  font-weight: 700;
  color: #71848B;
`;

const Icon = styled.div`
  width: 100px;
  height: 100px;
  float: left;
  border: 3px solid #71848B;
  margin: 40px 0 0 0;
  text-align: center;
  color: #6E8084;
  
  p {
    margin: 31px 0;
  }
`;

const Weather = styled.div`
  position:response;
  float: right;
  font-size: 80pt;
  line-height: 80px;
  color: #869197;
  margin: 7% 10% 0 0;
  padding-right:15%;
`;

function CurWeather() {
  return (
    <Container>
      <InfoContainer>
      <InfoBlock />
      </InfoContainer>
    </Container>
  );
}

export default CurWeather;