import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Signup from './Signup.page';
import GlobalProvider from '../../providers/GlobalContext';

beforeEach(() => {
  render(
    <GlobalProvider>
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    </GlobalProvider>
  );
});

describe('Signup page', () => {
  it('should render the image', async () => {
    const Image = await screen.findByRole('img', { name: '' });

    expect(Image).toBeInTheDocument();
  });

  it('should render the logo', async () => {
    const SignupLogo = await screen.findByText(/WizeTube/i);

    expect(SignupLogo).toBeInTheDocument();
  });

  it('should render the title', async () => {
    const SignupTitle = await screen.findByText(/Signup/i);

    expect(SignupTitle).toBeInTheDocument();
  });
});
