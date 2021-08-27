import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import GlobalProvider from '../../providers/GlobalContext';
import HomePage from '../../pages/Home';
import VideoDetails from '../../pages/VideoDetails';
import NavBar from '../NavBar';
import MobileMenu from '../MobileMenu';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import Private from '../Private';
import Favorites from '../../pages/Favorites';

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Toaster />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />

          <Route path="/">
            <NavBar />
            <MobileMenu />

            <Switch>
              <Route exact path="/" component={HomePage} />
              <Private exact path="/favorites">
                <Favorites />
              </Private>
              <Route exact path="/:id" component={VideoDetails} />
            </Switch>
          </Route>
        </Switch>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
