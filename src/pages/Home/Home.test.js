import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import HomePage from './Home.page';

beforeEach(() => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
});

describe('Home page', () => {
  test('should contain the logo', () => {
    const LogoElement = screen.queryByText(/wizetube/i);

    expect(LogoElement).toBeInTheDocument();
  });

  test('should contain a search input', () => {
    const SearchInput = screen.queryByPlaceholderText('Search');

    expect(SearchInput).toBeInTheDocument();
  });

  test('should contain a login button', () => {
    const LoginButton = screen.queryByText(/log in/i);

    expect(LoginButton).toBeInTheDocument();
  });

  test('should contain at least one video card', () => {
    const LoginButton = screen.queryAllByTestId('video-card');

    expect(LoginButton.length).toBeGreaterThan(0);
  });

  test('should change theme when click on switch', () => {
    const ThemeSwitch = screen.queryByTestId('switch-theme');
    fireEvent.click(ThemeSwitch);

    const VideoCardElement = screen.queryAllByTestId('video-card')[0];

    expect(VideoCardElement).toHaveStyle('background-color: #1f2127');
  });
});
