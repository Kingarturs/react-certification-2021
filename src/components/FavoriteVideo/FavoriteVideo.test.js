import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FavoriteVideo from './FavoriteVideo.component';
import GlobalProvider from '../../providers/GlobalContext';
import favoriteVideoMock from '../../mock/favorite-video-mock.json';

beforeEach(() => {
  render(
    <GlobalProvider>
      <BrowserRouter>
        <FavoriteVideo favorite={favoriteVideoMock} />
      </BrowserRouter>
    </GlobalProvider>
  );
});

describe('Favorite video component', () => {
  it('should render the title', async () => {
    const FavoriteVideoTitle = await screen.findByText(favoriteVideoMock.title);

    expect(FavoriteVideoTitle).toBeInTheDocument();
  });

  it('should render the description', async () => {
    const FavoriteVideoDesc = await screen.findByText(
      `${favoriteVideoMock.description.substr(0, 150)}...`
    );

    expect(FavoriteVideoDesc).toBeInTheDocument();
  });

  it('should render the channel title', async () => {
    const FavoriteVideoChannel = await screen.findByText(favoriteVideoMock.channelTitle);

    expect(FavoriteVideoChannel).toBeInTheDocument();
  });

  it('should render the image', async () => {
    const FavoriteVideoImage = await screen.findByAltText(favoriteVideoMock.title);

    expect(FavoriteVideoImage).toBeInTheDocument();
  });
});
