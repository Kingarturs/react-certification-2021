import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderHook } from '@testing-library/react-hooks';
import Favorites from './Favorites.page';
import GlobalProvider from '../../providers/GlobalContext';
import favoriteVideosMock from '../../mock/favorite-videos-mock.json';
import useFavorite from '../../hooks/useFavorite';

jest.mock('../../hooks/useFavorite', () => jest.fn());
useFavorite.mockImplementation(() => ({
  fetchFavorites: jest.fn().mockReturnValue(favoriteVideosMock),
  favorites: favoriteVideosMock,
  loading: false,
  error: '',
}));

beforeEach(() => {
  render(
    <GlobalProvider>
      <BrowserRouter>
        <Favorites />
      </BrowserRouter>
    </GlobalProvider>
  );
});

describe('Favorites page', () => {
  it('should render the text favorites', async () => {
    const FavoritesTitle = await screen.findByText(/Favorites/i);

    expect(FavoritesTitle).toBeInTheDocument();
  });

  it('should render the favorites', async () => {
    renderHook(() => useFavorite());
    const FavoriteVideos = await screen.findAllByTitle('favorite');

    expect(jest.isMockFunction(useFavorite)).toBeTruthy();
    expect(FavoriteVideos.length).toBe(favoriteVideosMock.length);
  });
});
