import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MobileMenu from './MobileMenu.component';
import GlobalProvider from '../../providers/GlobalContext';

beforeEach(() => {
  render(
    <GlobalProvider>
      <BrowserRouter>
        <MobileMenu />
      </BrowserRouter>
    </GlobalProvider>
  );
});

describe('Mobile menu component', () => {
  it('should render the login button', async () => {
    const LoginButton = await screen.findByText('Log in');

    expect(LoginButton).toBeInTheDocument();
  });

  it('should render the search input', async () => {
    const SearchInput = await screen.findByPlaceholderText(/search/i);

    expect(SearchInput).toBeInTheDocument();
  });

  it('should render the theme switch', async () => {
    const SwitchElement = await screen.findByTitle('switch-theme');

    expect(SwitchElement).toBeInTheDocument();
  });

  it('should render the navigation items', async () => {
    const FavoritesLink = await screen.findByText(/Favorites/i);
    const HomeLink = await screen.findByText(/Home/i);

    expect(FavoritesLink).toBeInTheDocument();
    expect(HomeLink).toBeInTheDocument();
  });
});
