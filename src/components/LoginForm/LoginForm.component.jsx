import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router';
import { useGlobal } from '../../providers/GlobalContext';
import {
  LoginFormContainer,
  LoginInput,
  LoginLink,
  LoginLinkContainer,
  LoginButton,
  ErrorText,
  DisabledLoginButton,
} from './LoginForm.styled';

function LoginForm() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const { state, authState } = useGlobal();
  const { theme } = state;

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await authState.signin(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      history.push('/');
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  return (
    <LoginFormContainer theme={theme} onSubmit={handleSubmit}>
      <LoginInput type="text" placeholder="Email" ref={emailRef} theme={theme} required />
      <LoginInput
        type="password"
        placeholder="Password"
        ref={passwordRef}
        theme={theme}
        required
      />
      {error !== '' && <ErrorText theme={theme}>{error}</ErrorText>}

      {!loading ? (
        <LoginButton type="submit" theme={theme}>
          Log In
        </LoginButton>
      ) : (
        <DisabledLoginButton type="submit">Log In</DisabledLoginButton>
      )}
      <LoginLinkContainer>
        <span>Don&apos;t have an account yet? </span>
        <LoginLink to="/signup" theme={theme}>
          Sign up here
        </LoginLink>
      </LoginLinkContainer>
      <LoginLinkContainer>
        <LoginLink to="/" theme={theme}>
          Continue as guest
        </LoginLink>
      </LoginLinkContainer>
    </LoginFormContainer>
  );
}

export default LoginForm;
