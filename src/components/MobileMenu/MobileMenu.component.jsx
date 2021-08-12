import React, { useState } from 'react';
import { useMenu } from '../../providers/Menu';
import { useTheme } from '../../providers/Theme';
import Switch from '../Switch';
import { DarkTheme } from '../../utils/theme';

import { Menu, MenuItem, SearchBar, DarkModeText } from './MobileMenu.styled';
import { LoginButton } from '../NavBar/NavBar.styled';

function MobileMenu(props) {
  const { search, setSearch } = props;
  const { openMenu } = useMenu();
  const { theme, switchTheme } = useTheme();
  const [active, setActive] = useState(() => theme === DarkTheme);

  return (
    <Menu open={openMenu} theme={theme}>
      <MenuItem>
        <DarkModeText theme={theme}> Dark mode </DarkModeText>
        <Switch
          active={active}
          size={1.8}
          onClick={() => {
            switchTheme();
            setActive(!active);
          }}
          theme={theme}
        />
      </MenuItem>
      {search ? (
        <MenuItem>
          <SearchBar
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
            theme={theme}
          />
        </MenuItem>
      ) : null}

      <MenuItem>
        <LoginButton theme={theme}>Log in</LoginButton>
      </MenuItem>
    </Menu>
  );
}

export default MobileMenu;
