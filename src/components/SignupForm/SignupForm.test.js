import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignupForm from './SignupForm.component';
import GlobalProvider from '../../providers/GlobalContext';

beforeEach(() => {
  render(
    <GlobalProvider>
      <BrowserRouter>
        <SignupForm />
      </BrowserRouter>
    </GlobalProvider>
  );
});

describe('Signup form component', () => {
  it('should render the inputs', async () => {
    const EmailInput = await screen.findByPlaceholderText('Email');
    const PasswordInput = await screen.findByPlaceholderText('Password');
    const PasswordConfInput = await screen.findByPlaceholderText('Confirm password');

    expect(EmailInput).toBeInTheDocument();
    expect(PasswordInput).toBeInTheDocument();
    expect(PasswordConfInput).toBeInTheDocument();
  });

  it('should render the login button', async () => {
    const SignupButton = await screen.findByRole('button');

    expect(SignupButton).toBeInTheDocument();
  });
});
