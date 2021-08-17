import React from 'react';
import { useGlobal } from '../../providers/GlobalContext';

import { LoaderContainer, LoaderElement } from './Loader.styled';

function Loader() {
  const { state } = useGlobal();
  const { theme } = state;

  return (
    <LoaderContainer theme={theme} data-testid="loader">
      <LoaderElement theme={theme} />
    </LoaderContainer>
  );
}

export default Loader;
