import React, { useContext, useEffect, useReducer, useState } from 'react';
import { LightTheme, DarkTheme } from '../../utils/theme';
import { operationTypes } from '../../utils/stateOperations';
import { auth } from '../../firebase';

const GlobalContext = React.createContext(null);

const initialState = {
  theme: JSON.parse(localStorage.getItem('darkMode')) !== true ? LightTheme : DarkTheme,
  darkMode: JSON.parse(localStorage.getItem('darkMode')) || false,
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
    throw new Error(`Can't use "useGlobal" without a GlobalProvider!`);
  }
  return context;
}

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function signin(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function signout() {
    auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', state.darkMode);
  }, [state.darkMode]);

  const authState = {
    currentUser,
    signup,
    signin,
    signout,
  };

  return (
    <GlobalContext.Provider value={{ authState, state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { useGlobal };
export default GlobalProvider;
