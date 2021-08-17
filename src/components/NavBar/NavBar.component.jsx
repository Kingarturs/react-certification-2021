import React from 'react';
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
} from './NavBar.styled';
import { useGlobal } from '../../providers/GlobalContext';
import { operationTypes } from '../../utils/stateOperations';

function NavBar() {
  const { state, dispatch } = useGlobal();
  const { theme, darkMode } = state;
  const { SWITCH_THEME, SWITCH_MENU, SET_SEARCH } = operationTypes;

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

            dispatch(setSearchAction);
          }}
          placeholder="Search"
          data-testid="Search"
        />

        <LoginButton to="#" theme={theme} data-testid="login-button">
          Log in
        </LoginButton>
      </OptionsSection>
    </NavBarContainer>
  );
}

export default NavBar;
