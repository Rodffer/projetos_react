import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import loginImageBackground from '../../assets/login_background.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Tolltip = styled.div`
  .tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .tooltip .tooltiptext::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  header {
    width: 322px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 50px;
      height: 50px;
    }

    nav {
      color: #bfbfbf;
    }
  }

  button {
    background: transparent;
    height: 70px;
    border-radius: 20px;
    border: 2px solid #ebebeb;
    padding: 0 16px;
    color: #ebebeb;
    width: 22%;
    font-weight: 500;
    margin-top: 60px;
    margin-bottom: 200px;
    transition: background-color 0.2s;

    &:hover {
      color: #fff;
      background: #f50057;
      transition-duration: 0.2s;
    }

    svg {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  div {
    display: flex;
    align-items: stretch;

    h3 {
      margin-top: 10px;
      align-items: center;
      color: #bfbfbf;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;

  a {
    font-size: 12px;
    font-weight: bold;
    color: #b8b8b8;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#a6a6a6')};
    }
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 17px 0;
    width: 340px;
    text-align: center;
  }

  h1 {
    font-size: 31px;
    font-weight: bold;
    text-align: left;
    margin-top: 100px;
    margin-bottom: 50px;
    color: #181818;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${loginImageBackground}) no-repeat center;
  background-size: cover;
`;
