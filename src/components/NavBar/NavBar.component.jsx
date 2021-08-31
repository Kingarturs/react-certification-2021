import React from 'react';
import { Menu, MenuItem } from '@szhsin/react-menu';
import { useLocation, useHistory } from 'react-router';
import Switch from '../Switch';
import {
  NavBarContainer,
  NavBarSection,
  OptionsSection,
  MobileSection,
  Logo,
  LoginButton,
  SearchBar,
  HamburgerIcon,
  UserIcon,
  MenuIcon,
  FavoritesLink,
} from './NavBar.styled';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { useGlobal } from '../../providers/GlobalContext';
import { operationTypes } from '../../utils/stateOperations';

function NavBar() {
  const { state, dispatch, authState } = useGlobal();

  const { currentUser, signout } = authState;
  const { theme, darkMode } = state;
  const { SWITCH_THEME, SWITCH_MENU, SET_SEARCH } = operationTypes;

  const currentLocation = useLocation();
  const history = useHistory();

  return (
    <NavBarContainer theme={theme}>
      <NavBarSection>
        <Logo to="/" theme={theme}>
          WizeTube
        </Logo>
      </NavBarSection>

      <MobileSection>
        <HamburgerIcon
          theme={theme}
          className="fas fa-bars"
          onClick={() => {
            const switchMenuAction = {
              type: SWITCH_MENU,
            };

            dispatch(switchMenuAction);
          }}
        />
      </MobileSection>

      <OptionsSection>
        <Switch
          theme={theme}
          size={1.8}
          active={darkMode}
          onClick={() => {
            const switchThemeAction = {
              type: SWITCH_THEME,
            };

            dispatch(switchThemeAction);
          }}
        />

        <SearchBar
          theme={theme}
          type="text"
          onChange={(e) => {
            const setSearchAction = {
              type: SET_SEARCH,
              payload: e.target.value,
            };

            if (currentLocation !== '/') {
              history.push('/');
            }

            dispatch(setSearchAction);
          }}
          placeholder="Search"
          data-testid="Search"
        />

        {currentUser !== null ? (
          <Menu
            menuButton={<UserIcon theme={theme} className="fas fa-user" />}
            align="end"
            offsetY={8}
            menuStyles={{
              backgroundColor: theme.bg,
              color: theme.fg,
              border: `1px solid ${theme.border}`,
            }}
            transition
          >
            <MenuItem styles={{ hover: { backgroundColor: theme.border } }}>
              <FavoritesLink to="/" theme={theme}>
                <MenuIcon className="fas fa-home" />
                <span>Home</span>
              </FavoritesLink>
            </MenuItem>

            <MenuItem styles={{ hover: { backgroundColor: theme.border } }}>
              <FavoritesLink to="/favorites" theme={theme}>
                <MenuIcon className="fas fa-heart" />
                <span>Favorites</span>
              </FavoritesLink>
            </MenuItem>

            <MenuItem
              styles={{ hover: { backgroundColor: theme.border }, color: theme.danger }}
              onClick={signout}
            >
              <MenuIcon className="fas fa-sign-out-alt" />
              <span>Log out</span>
            </MenuItem>
          </Menu>
        ) : (
          <LoginButton to="/login" theme={theme} data-testid="login-button">
            Log in
          </LoginButton>
        )}
      </OptionsSection>
    </NavBarContainer>
  );
}

export default NavBar;
