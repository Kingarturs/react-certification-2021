import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import GlobalProvider from '../../providers/GlobalContext';
import HomePage from './Home.page';

beforeEach(() => {
  render(
    <BrowserRouter>
      <GlobalProvider>
        <HomePage />
      </GlobalProvider>
    </BrowserRouter>
  );
});

describe('Home page', () => {
  test('should fetch 20 video cards', async () => {
    const VideoCards = await screen.findAllByTitle('video-card');

    expect(VideoCards.length).toBe(20);
  });
});
