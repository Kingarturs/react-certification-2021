import React from 'react';
import { useGlobal } from '../../providers/GlobalContext';

import { LoaderContainer, LoaderElement } from './Loader.styled';

function Loader() {
  const { state } = useGlobal();
  const { theme } = state;

  return (
    <LoaderContainer theme={theme} title="loader">
      <LoaderElement theme={theme} />
    </LoaderContainer>
  );
}

export default Loader;
