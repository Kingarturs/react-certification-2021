import styled from 'styled-components';

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
  position: absolute;
  top: 0;
  background-color: ${(props) => props.theme.bg};
  z-index: -1;
`;

export const LoaderElement = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: '';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: ${(props) => props.theme.accent} transparent
      ${(props) => props.theme.accent} transparent;
    animation: rotation 1.2s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
