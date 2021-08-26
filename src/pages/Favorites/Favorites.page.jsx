import React, { useEffect } from 'react';
import FavoriteVideo from '../../components/FavoriteVideo/FavoriteVideo.component';
import Loader from '../../components/Loader';
import useFavorite from '../../hooks/useFavorite';
import { useGlobal } from '../../providers/GlobalContext';

import {
  FavoritePageContainer,
  FavoritesTitle,
  FavoritesContainer,
} from './Favorites.styled';

function Favorites() {
  const { state, authState } = useGlobal();
  const { loading, favorites, fetchFavorites } = useFavorite();

  const { theme } = state;
  const { currentUser } = authState;

  useEffect(() => {
    if (currentUser) {
      fetchFavorites(currentUser.uid);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  if (loading) return <Loader />;

  return (
    <FavoritePageContainer theme={theme}>
      <FavoritesTitle>Favorites</FavoritesTitle>
      <FavoritesContainer>
        {favorites.map((favorite) => {
          return <FavoriteVideo key={favorite.title} favorite={favorite} />;
        })}
      </FavoritesContainer>
    </FavoritePageContainer>
  );
}

export default Favorites;
