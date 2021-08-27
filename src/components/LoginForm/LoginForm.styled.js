import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LoginFormContainer = styled.form`
  color: ${(props) => props.theme.fg};
  background-color: ${(props) => props.theme.bg};
  width: 400px;
  height: auto;
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const LoginButton = styled.button`
  background-color: ${(props) => props.theme.accent};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.6rem 0;
  font-weight: bold;
  margin-top: 1rem;

  &:hover {
    background-color: ${(props) => props.theme.hoverAccent};
    cursor: pointer;
  }
`;

export const DisabledLoginButton = styled.button`
  background-color: gray;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.6rem 0;
  font-weight: bold;
  margin-top: 1rem;
`;

export const LoginLinkContainer = styled.div`
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

export const LoginLink = styled(Link)`
  color: ${(props) => props.theme.accent};
  text-decoration: none;
`;

export const ErrorText = styled.p`
  color: ${(props) => props.theme.danger};
  font-size: 0.8rem;
  margin: 0;
  justify-self: flex-end;
`;
