import React, { useState } from 'react';
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
import { useTheme } from '../../providers/Theme';
import { useMenu } from '../../providers/Menu';
import { DarkTheme } from '../../utils/theme';

function NavBar(props) {
  const { setSearch, search } = props;
  const { theme, switchTheme } = useTheme();
  const { switchOpen } = useMenu();
  const [active, setActive] = useState(() => theme === DarkTheme);

  return (
    <NavBarContainer theme={theme}>
      <NavBarSection>
        <Logo to="/" theme={theme}>
          WizeTube
        </Logo>
      </NavBarSection>

      <MobileSection>
        <HamburgerIcon theme={theme} className="fas fa-bars" onClick={switchOpen} />
      </MobileSection>

      <OptionsSection>
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
      </OptionsSection>
    </NavBarContainer>
  );
}

export default NavBar;
