import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import VideoDetails from './VideoDetails.page';
import GlobalProvider from '../../providers/GlobalContext';

beforeEach(() => {
  render(
    <MemoryRouter initialEntries={['/2l4alp0De8Y']}>
      <GlobalProvider>
        <Route path="/:id">
          <VideoDetails />
        </Route>
      </GlobalProvider>
    </MemoryRouter>
  );
});

describe('Video details page', () => {
  test('should contain the logo', () => {
    const LogoElement = screen.queryByText(/wizetube/i);

    expect(LogoElement).toBeInTheDocument();
  });

  test('should contain a search input', () => {
    const SearchInput = screen.queryByTestId('Search');

    expect(SearchInput).toBeInTheDocument();
  });

  test('should contain a title for the video', () => {
    const TitleElement = screen.queryByTestId('title');

    expect(TitleElement).toBeInTheDocument();
  });

  test('should contain a description for the video', () => {
    const DescriptionElement = screen.queryByTestId('description');

    expect(DescriptionElement).toBeInTheDocument();
  });

  test('should contain a login button', () => {
    const LoginButton = screen.queryByTestId('login-button');

    expect(LoginButton).toBeInTheDocument();
  });

  test('should render de youtube video', () => {
    const YoutubeVideo = screen.queryByTestId('embed-video');

    expect(YoutubeVideo).toBeInTheDocument();
  });

  test('should render 10 related video cards', async () => {
    await waitFor(() => expect(screen.queryAllByTestId('related-video').length).toBe(10));
  });
});
