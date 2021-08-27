import React from 'react';
import { render, screen } from '@testing-library/react';
import YoutubeEmbed from './YoutubeEmbed.component';

beforeEach(() => {
  render(<YoutubeEmbed />);
});

describe('Youtube Embed component', () => {
  it('should render the video', async () => {
    const VideoEmbed = await screen.findByTitle('Embedded youtube');

    expect(VideoEmbed).toBeInTheDocument();
  });
});
