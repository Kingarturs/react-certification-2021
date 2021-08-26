import React from 'react';
import { useHistory } from 'react-router';
import Switch from '../Switch';
import {
  Menu,
  MenuItem,
  SearchBar,
  DarkModeText,
  NavItemContainer,
  NavItem,
} from './MobileMenu.styled';
import { LoginButton } from '../NavBar/NavBar.styled';
import { useGlobal } from '../../providers/GlobalContext';
import { operationTypes } from '../../utils/stateOperations';

function MobileMenu() {
  const { state, dispatch } = useGlobal();
  const { darkMode, menu, theme } = state;
  const { SWITCH_THEME, SET_SEARCH, SWITCH_MENU } = operationTypes;
  const history = useHistory();

  function handleRedirection(location) {
    const switchThemeAction = {
      type: SWITCH_MENU,
    };

    dispatch(switchThemeAction);

    history.push(location);
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

    dispatch(setSearchAction);
  };

  return (
    <Menu open={menu} theme={theme}>
      <NavItemContainer>
        <NavItem theme={theme} onClick={() => handleRedirection('/')}>
          <DarkModeText theme={theme} className="fas fa-home" />
          <DarkModeText theme={theme}>Home</DarkModeText>
        </NavItem>
        <NavItem theme={theme} onClick={() => handleRedirection('/favorites')}>
          <DarkModeText theme={theme} className="fas fa-heart" />
          <DarkModeText theme={theme}>Favorites</DarkModeText>
        </NavItem>
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
        <LoginButton to="#" theme={theme}>
          Log in
        </LoginButton>
        <Switch active={darkMode} size={1.8} onClick={switchTheme} theme={theme} />
      </MenuItem>
    </Menu>
  );
}

export default MobileMenu;
