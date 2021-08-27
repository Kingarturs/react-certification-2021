import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VideoCard from './VideoCard.component';
import GlobalProvider from '../../providers/GlobalContext';
import YoutubeVideosMock from '../../mock/youtube-videos-mock.json';

const video = YoutubeVideosMock.items[0];

beforeEach(() => {
  render(
    <GlobalProvider>
      <BrowserRouter>
        <VideoCard video={video} />
      </BrowserRouter>
    </GlobalProvider>
  );
});

describe('Video card component', () => {
  it('should render the thumbnail', async () => {
    const Thumbnail = await screen.findByAltText(video.snippet.title);

    expect(Thumbnail).toBeInTheDocument();
  });

  it('should render the title', async () => {
    const VideoTitle = await screen.findByTitle('title');

    expect(VideoTitle).toBeInTheDocument();
  });

  it('should render the description', async () => {
    const VideoDescription = await screen.findByTitle('description');

    expect(VideoDescription).toBeInTheDocument();
  });

  it('should render the channel', async () => {
    const VideoChannel = await screen.findByTitle('channel');

    expect(VideoChannel).toBeInTheDocument();
  });
});
