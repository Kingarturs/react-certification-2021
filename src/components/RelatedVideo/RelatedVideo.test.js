import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RelatedVideo from './RelatedVideo.component';
import videos from '../../mock/youtube-videos-mock.json';
import GlobalProvider from '../../providers/GlobalContext';

const video = videos.items[0];

beforeEach(() => {
  render(
    <GlobalProvider>
      <BrowserRouter>
        <RelatedVideo video={video} key={video.id.videoId} />
      </BrowserRouter>
    </GlobalProvider>
  );
});

describe('Related video component', () => {
  it('should render the title correctly', async () => {
    const TitleElement = await screen.findByLabelText('title');

    expect(TitleElement).toBeInTheDocument();
  });

  it('should render the channel name correctly', async () => {
    const ChannelElement = await screen.findByLabelText('channel');

    expect(ChannelElement).toBeInTheDocument();
  });

  it('should render the video image', async () => {
    const VideoImage = await screen.findByAltText(video.snippet.title);

    expect(VideoImage).toBeInTheDocument();
  });
});
