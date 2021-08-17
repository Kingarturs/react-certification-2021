import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader.component';
import GlobalProvider from '../../providers/GlobalContext';

beforeEach(() => {
  render(
    <GlobalProvider>
      <Loader />
    </GlobalProvider>
  );
});

describe('Loader component', () => {
  it('should render correctly', async () => {
    const LoaderElement = await screen.findByTestId('loader');

    expect(LoaderElement).toBeInTheDocument();
  });
});
