import React from 'react';
import LoginForm from '../../components/LoginForm';
import { useGlobal } from '../../providers/GlobalContext';
import {
  LoginPageContainer,
  LoginImage,
  LoginContainer,
  Logo,
  LoginText,
} from './Login.styled';

function Login() {
  const { state } = useGlobal();
  const { theme } = state;

  return (
    <LoginPageContainer theme={theme}>
      <LoginImage src="./images/login-image.jpg" alt="" />
      <LoginContainer>
        <Logo>WizeTube</Logo>
        <LoginText>Login</LoginText>
        <LoginForm />
      </LoginContainer>
    </LoginPageContainer>
  );
}

export default Login;
