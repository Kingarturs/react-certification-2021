import React from 'react';
import { useHistory, useLocation } from 'react-router';
import Switch from '../Switch';
import {
  Menu,
  MenuItem,
  SearchBar,
  DarkModeText,
  NavItemContainer,
  NavItem,
  DangerModeText,
} from './MobileMenu.styled';
import { LoginButton } from '../NavBar/NavBar.styled';
import { useGlobal } from '../../providers/GlobalContext';
import { operationTypes } from '../../utils/stateOperations';

function MobileMenu() {
  const { state, dispatch, authState } = useGlobal();
  const { darkMode, menu, theme } = state;
  const { SWITCH_THEME, SET_SEARCH, SWITCH_MENU } = operationTypes;
  const { currentUser, signout } = authState;

  const currentLocation = useLocation();
  const history = useHistory();

  function handleRedirection(location) {
    const switchThemeAction = {
      type: SWITCH_MENU,
    };

    dispatch(switchThemeAction);

    history.push(location);
  }

  function handleSignout() {
    const switchThemeAction = {
      type: SWITCH_MENU,
    };

    dispatch(switchThemeAction);

    signout();
  }

  const switchTheme = () => {
    const switchThemeAction = {
      type: SWITCH_THEME,
    };

    dispatch(switchThemeAction);
  };

  const setSearch = (searchTerm) => {
    const setSearchAction = {
      type: SET_SEARCH,
      payload: searchTerm,
    };

    if (currentLocation !== '/') {
      history.push('/');
    }

    dispatch(setSearchAction);
  };

  return (
    <Menu open={menu} theme={theme}>
      <NavItemContainer>
        <NavItem theme={theme} onClick={() => handleRedirection('/')}>
          <DarkModeText theme={theme} className="fas fa-home" />
          <DarkModeText theme={theme}>Home</DarkModeText>
        </NavItem>

        {currentUser !== null && (
          <>
            <NavItem theme={theme} onClick={() => handleRedirection('/favorites')}>
              <DarkModeText theme={theme} className="fas fa-heart" />
              <DarkModeText theme={theme}>Favorites</DarkModeText>
            </NavItem>
            <NavItem theme={theme} onClick={() => handleSignout()}>
              <DangerModeText theme={theme} className="fas fa-sign-out-alt" />
              <DangerModeText theme={theme}>Sign out</DangerModeText>
            </NavItem>
          </>
        )}
      </NavItemContainer>

      <MenuItem>
        <SearchBar
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          theme={theme}
        />
      </MenuItem>

      <MenuItem>
        {currentUser === null && (
          <LoginButton to="/login" theme={theme}>
            Log in
          </LoginButton>
        )}
        <Switch active={darkMode} size={1.8} onClick={switchTheme} theme={theme} />
      </MenuItem>
    </Menu>
  );
}

export default MobileMenu;
