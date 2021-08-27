import React from 'react';
import { useGlobal } from '../../providers/GlobalContext';

import {
  FavoriteVideoContainer,
  FavoriteVideoImage,
  VideoInfoContainer,
  FavoriteTitle,
  FavoriteDescription,
  FavoriteChannel,
} from './FavoriteVideo.styled';

function FavoriteVideo({ favorite }) {
  const { state } = useGlobal();

  const { theme } = state;

  return (
    <FavoriteVideoContainer to={`/${favorite.id}`} theme={theme}>
      <FavoriteVideoImage src={favorite.thumbnail} alt={favorite.title} />
      <VideoInfoContainer>
        <FavoriteTitle>{favorite.title}</FavoriteTitle>
        <FavoriteDescription theme={theme}>{`${favorite.description.substr(
          0,
          150
        )}...`}</FavoriteDescription>
        <FavoriteChannel theme={theme}>{favorite.channelTitle}</FavoriteChannel>
      </VideoInfoContainer>
    </FavoriteVideoContainer>
  );
}

export default FavoriteVideo;
