import React from 'react';
import styled from 'styled-components';

import Countdown from './Countdown';
import BackgroundImage from '../assets/img/background.jpg';

export default function Home() {
  return (
    <StyledHome>
      <h1>We are launching in</h1>
      <Countdown />
    </StyledHome>
  );
}

const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${BackgroundImage});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: center bottom;
  background-size: cover;

  h1 {
    color: #fff;
    font-size: 3em;
    margin-bottom: 1.4em;
    text-transform: uppercase;
    letter-spacing: 0.2em;

    @media (max-width: 768px) {
      font-size: 2em;
    }
    @media (max-width: 600px) {
      font-size: 1.6em;
      margin-bottom: 1em;
    }
    @media (max-width: 400px) {
      font-size: 1.4em;
      letter-spacing: 0.1em;
    }
  }
`;
