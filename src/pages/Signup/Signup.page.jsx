import React from 'react';
import SignupForm from '../../components/SignupForm';
import { useGlobal } from '../../providers/GlobalContext';
import {
  SignupPageContainer,
  SignupImage,
  SignupContainer,
  Logo,
  SignupText,
} from './Signup.styled';

function Signup() {
  const { state } = useGlobal();
  const { theme } = state;

  return (
    <SignupPageContainer theme={theme}>
      <SignupContainer>
        <Logo>WizeTube</Logo>
        <SignupText>Signup</SignupText>
        <SignupForm />
      </SignupContainer>
      <SignupImage src="./images/signup-image.jpg" alt="" />
    </SignupPageContainer>
  );
}

export default Signup;
