import React, { useState } from 'react';
import Switch from '../Switch';
import {
  NavBarContainer,
  NavBarSection,
  Logo,
  LoginButton,
  SearchBar,
} from './NavBar.styled';
import { useTheme } from '../../providers/Theme';
import { DarkTheme } from '../../utils/theme';

function NavBar(props) {
  const { setSearch, search } = props;
  const { theme, switchTheme } = useTheme();
  const [active, setActive] = useState(() => theme === DarkTheme);

  return (
    <NavBarContainer theme={theme}>
      <NavBarSection>
        <Logo to="/" theme={theme}>
          WizeTube
        </Logo>
      </NavBarSection>

      <NavBarSection>
        <Switch
          theme={theme}
          size={1.8}
          active={active}
          onClick={() => {
            switchTheme();
            setActive(!active);
          }}
        />
        {search ? (
          <SearchBar
            theme={theme}
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            data-testid="Search"
          />
        ) : null}
        <LoginButton to="#" theme={theme} data-testid="login-button">
          Log in
        </LoginButton>
      </NavBarSection>
    </NavBarContainer>
  );
}

export default NavBar;
