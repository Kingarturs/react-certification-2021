import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login.page';
import GlobalProvider from '../../providers/GlobalContext';

beforeEach(() => {
  render(
    <GlobalProvider>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </GlobalProvider>
  );
});

describe('Login page', () => {
  it('should render the image', async () => {
    const Image = await screen.findByRole('img', { name: '' });

    expect(Image).toBeInTheDocument();
  });

  it('should render the logo', async () => {
    const LoginLogo = await screen.findByText(/WizeTube/i);

    expect(LoginLogo).toBeInTheDocument();
  });

  it('should render the title', async () => {
    const LoginTitle = await screen.findByText(/Login/i);

    expect(LoginTitle).toBeInTheDocument();
  });
});
