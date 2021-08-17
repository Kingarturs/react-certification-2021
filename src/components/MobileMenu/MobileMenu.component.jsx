import React from 'react';
import Switch from '../Switch';
import { Menu, MenuItem, SearchBar, DarkModeText } from './MobileMenu.styled';
import { LoginButton } from '../NavBar/NavBar.styled';
import { useGlobal } from '../../providers/GlobalContext';
import { operationTypes } from '../../utils/stateOperations';

function MobileMenu() {
  const { state, dispatch } = useGlobal();
  const { darkMode, menu, theme } = state;
  const { SWITCH_THEME, SET_SEARCH } = operationTypes;

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
      <MenuItem>
        <DarkModeText theme={theme}> Dark mode </DarkModeText>
        <Switch active={darkMode} size={1.8} onClick={switchTheme} theme={theme} />
      </MenuItem>

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
      </MenuItem>
    </Menu>
  );
}

export default MobileMenu;
