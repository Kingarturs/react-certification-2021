import React from 'react';
import { render, screen } from '@testing-library/react';
import Switch from './Switch.component';
import GlobalProvider from '../../providers/GlobalContext';

describe('Switch component', () => {
  it('should render the theme switch', async () => {
    render(
      <GlobalProvider>
        <Switch />
      </GlobalProvider>
    );
    const SwitchElement = await screen.findByTestId('switch-theme');

    expect(SwitchElement).toBeInTheDocument();
  });
});
