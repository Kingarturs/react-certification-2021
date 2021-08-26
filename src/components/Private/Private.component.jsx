import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useGlobal } from '../../providers/GlobalContext';

function Private({ children, ...rest }) {
  const { authState } = useGlobal();
  const { currentUser } = authState;

  return (
    <Route
      {...rest}
      render={() => (currentUser !== null ? children : <Redirect to="/login" />)}
    />
  );
}

export default Private;
