import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router';
import { useGlobal } from '../../providers/GlobalContext';
import {
  SignupFormContainer,
  SignupInput,
  SignupLink,
  SignupLinkContainer,
  SignupButton,
  ErrorText,
  DisabledSignupButton,
} from './SignupForm.styled';

function SignupForm() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const passwordConfRef = useRef('');
  const { state, authState } = useGlobal();
  const { theme } = state;

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfRef.current.value) {
      setError('Passwords must match');

      // eslint-disable-next-line no-useless-return
      return;
    }

    try {
      setError('');
      setLoading(true);
      await authState.signup(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      history.push('/');
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  return (
    <SignupFormContainer theme={theme} onSubmit={handleSubmit}>
      <SignupInput
        type="text"
        placeholder="Email"
        ref={emailRef}
        theme={theme}
        required
      />
      <SignupInput
        type="password"
        placeholder="Password"
        ref={passwordRef}
        theme={theme}
        required
      />
      <SignupInput
        type="password"
        placeholder="Confirm password"
        ref={passwordConfRef}
        theme={theme}
        required
      />
      {error !== '' && <ErrorText theme={theme}>{error}</ErrorText>}

      {!loading ? (
        <SignupButton type="submit" theme={theme}>
          Sign up
        </SignupButton>
      ) : (
        <DisabledSignupButton type="submit">Sign up</DisabledSignupButton>
      )}
      <SignupLinkContainer>
        <span>Already have an account? </span>
        <SignupLink to="/login" theme={theme}>
          Login here
        </SignupLink>
      </SignupLinkContainer>
      <SignupLinkContainer>
        <SignupLink to="/" theme={theme}>
          Continue as guest
        </SignupLink>
      </SignupLinkContainer>
    </SignupFormContainer>
  );
}

export default SignupForm;
