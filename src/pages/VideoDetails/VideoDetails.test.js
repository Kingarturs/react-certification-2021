import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import VideoDetails from './VideoDetails.page';
import GlobalProvider from '../../providers/GlobalContext';

beforeEach(() => {
  render(
    <MemoryRouter initialEntries={['/nmXMgqjQzls']}>
      <GlobalProvider>
        <Route path="/:id">
          <VideoDetails />
        </Route>
      </GlobalProvider>
    </MemoryRouter>
  );
});

describe('Video details page', () => {
  test('should contain a title for the video', async () => {
    const TitleElement = await screen.findByTitle('title');

    expect(TitleElement).toBeInTheDocument();
  });

  test('should contain a description for the video', async () => {
    const DescriptionElement = await screen.findByTitle('description');

    expect(DescriptionElement).toBeInTheDocument();
  });

  test('should render de youtube video', async () => {
    const YoutubeVideo = await screen.findByTitle('Embedded youtube');

    expect(YoutubeVideo).toBeInTheDocument();
  });

  test('should render 10 related video cards', async () => {
    const RelatedVideos = await screen.findAllByTitle('related-video');

    expect(RelatedVideos.length).toBe(10);
  });

  test('should render de add video to favorites button', async () => {
    const AddFavoritesIcon = await screen.findByTitle('add-favorite-icon');

    expect(AddFavoritesIcon).toBeInTheDocument();
  });
});
