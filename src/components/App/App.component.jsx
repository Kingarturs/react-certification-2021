import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import VideoDetails from '../../pages/VideoDetails';
import NavBar from '../NavBar';
import MobileMenu from '../MobileMenu';
import GlobalProvider from '../../providers/GlobalContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalProvider>
          <NavBar />
          <MobileMenu />

          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/:id">
              <VideoDetails />
            </Route>
          </Switch>
        </GlobalProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
