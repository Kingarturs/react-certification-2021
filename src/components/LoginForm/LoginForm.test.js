import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from './LoginForm.component';
import GlobalProvider from '../../providers/GlobalContext';

beforeEach(() => {
  render(
    <GlobalProvider>
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    </GlobalProvider>
  );
});

describe('Login form component', () => {
  it('should render the inputs', async () => {
    const EmailInput = await screen.findByPlaceholderText('Email');
    const PasswordInput = await screen.findByPlaceholderText('Password');

    expect(EmailInput).toBeInTheDocument();
    expect(PasswordInput).toBeInTheDocument();
  });

  it('should render the login button', async () => {
    const LoginButton = await screen.findByRole('button');

    expect(LoginButton).toBeInTheDocument();
  });
});
