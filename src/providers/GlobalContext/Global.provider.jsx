import React, { useContext, useReducer } from 'react';
import { LightTheme, DarkTheme } from '../../utils/theme';
import { operationTypes } from '../../utils/stateOperations';

const GlobalContext = React.createContext(null);

const initialState = {
  theme: LightTheme,
  darkMode: false,
  menu: false,
  search: '',
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case operationTypes.SET_SEARCH: {
      const searchTerm = action.payload;

      return {
        ...currentState,
        search: searchTerm,
      };
    }

    case operationTypes.SWITCH_THEME: {
      return {
        ...currentState,
        darkMode: !currentState.darkMode,
        theme: currentState.darkMode === true ? LightTheme : DarkTheme,
      };
    }

    case operationTypes.SWITCH_MENU: {
      return {
        ...currentState,
        menu: !currentState.menu,
      };
    }

    default:
      return currentState;
  }
};

function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(`Can't use "useGlobal" without an GlobalProvider!`);
  }
  return context;
}

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { useGlobal };
export default GlobalProvider;
