import React, { useState, useContext, useCallback } from 'react';

const MenuContext = React.createContext(null);

function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error(`Can't use "useMenu" without an MenuProvider!`);
  }
  return context;
}

function MenuProvider({ children }) {
  const [openMenu, setOpenMenu] = useState(false);

  const switchOpen = useCallback(() => {
    setOpenMenu(() => !openMenu);
  }, [openMenu]);

  return (
    <MenuContext.Provider value={{ openMenu, switchOpen }}>
      {children}
    </MenuContext.Provider>
  );
}

export { useMenu };
export default MenuProvider;
