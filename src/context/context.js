import React, { useState } from "react";

export const MainContext = React.createContext();

const MainContextProvider = ({ children }) => {
  const [toggleModalWindow, setToggleModalWindow] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = (setToggle, valueToggle) => {
    setToggle(!valueToggle);
  };

  return (
    <MainContext.Provider
      value={{
        toggleModalWindow,
        toggleMenu,
        handleToggleModal: () =>
          handleToggle(setToggleModalWindow, toggleModalWindow),
        handleToggleMenu: () => handleToggle(setToggleMenu, toggleMenu),
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
