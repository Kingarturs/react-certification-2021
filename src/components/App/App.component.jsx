import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import VideoDetails from '../../pages/VideoDetails';
import ThemeProvider from '../../providers/Theme';
import MenuProvider from '../../providers/Menu';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <MenuProvider>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/:id">
                <VideoDetails />
              </Route>
            </Switch>
          </MenuProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
