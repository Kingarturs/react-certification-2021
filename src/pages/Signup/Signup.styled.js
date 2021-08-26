import styled from 'styled-components';

export const SignupPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.fg};
  display: flex;
  overflow: hidden;
`;

export const SignupImage = styled.img`
  height: 100vh;
  width: 40%;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SignupContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    heigh: 100%;
    padding: 0 1rem;
  }
`;

export const Logo = styled.p`
  font-weight: bold;
  margin: 0;
  font-size: 2rem;
`;

export const SignupText = styled.p`
  margin: 0;
  font-size: 1.2rem;
`;
