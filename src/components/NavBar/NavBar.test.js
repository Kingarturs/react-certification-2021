import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar.component';
import GlobalProvider from '../../providers/GlobalContext';

beforeEach(() => {
  render(
    <GlobalProvider>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </GlobalProvider>
  );
});

describe('NavBar component', () => {
  it('should render the logo', async () => {
    const LogoElement = await screen.findByText(/wizetube/i);

    expect(LogoElement).toBeInTheDocument();
  });

  it('should render the login button', async () => {
    const LoginButton = await screen.findByText('Log in');

    expect(LoginButton).toBeInTheDocument();
  });

  it('should render the search input', async () => {
    const SearchInput = await screen.findByPlaceholderText(/search/i);

    expect(SearchInput).toBeInTheDocument();
  });

  it('should render the theme switch', async () => {
    const SwitchElement = await screen.findByTestId('switch-theme');

    expect(SwitchElement).toBeInTheDocument();
  });
});
