import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from '../../providers/Theme';
import HomePage from './Home.page';

beforeEach(() => {
  render(
    <BrowserRouter>
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    </BrowserRouter>
  );
});

describe('Home page', () => {
  test('should contain the logo', () => {
    const LogoElement = screen.queryByText(/wizetube/i);

    expect(LogoElement).toBeInTheDocument();
  });

  test('should contain a search input', () => {
    const SearchInput = screen.queryByTestId('Search');

    expect(SearchInput).toBeInTheDocument();
  });

  test('should contain a login button', () => {
    const LoginButton = screen.queryByTestId('login-button');

    expect(LoginButton).toBeInTheDocument();
  });

  test('should fetch 20 video cards', async () => {
    await waitFor(() => expect(screen.queryAllByTestId('video-card').length).toBe(20));
  });

  test('should change theme when click on switch', () => {
    const ThemeSwitch = screen.queryAllByTestId('switch-theme')[0];
    fireEvent.click(ThemeSwitch);

    const NavBarElement = screen.queryAllByTestId('navbar')[0];

    expect(NavBarElement).toHaveStyle('background-color: #1f2127');
  });
});
