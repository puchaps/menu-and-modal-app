import React, { useState } from 'react';

export const MainContext = React.createContext();

const MainContextProvoder = ({children}) => {
  const[toggleModalWindow, setToggleModalWindow] = useState(false);
  const[toggleMenu, setToggleMenu] = useState(false);

  const handleToggleModal = () => {
    setToggleModalWindow(!toggleModalWindow);
  };

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <MainContext.Provider value = {{
      toggleModalWindow,
      handleToggleModal,
      toggleMenu,
      handleToggleMenu
    }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvoder;