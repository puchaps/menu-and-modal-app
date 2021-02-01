import { useContext } from "react";
import { MainContext } from "../../context/context";

import CustomButton from "../custom-button/custom-button.component";
import MenuPreview from "../menu-preview/menu-preview.component";

const ContentMenu = () => {
  const{
    toggleModalWindow,
    toggleMenu,
    handleToggleMenu
  } = useContext(MainContext);
  
  return (
    <>
      <MenuPreview toggleMenu = {toggleMenu} handleToggleMenu = {handleToggleMenu}/>
      {
        !toggleMenu && !toggleModalWindow && (
          <CustomButton onClick = {handleToggleMenu}>
            Show Menu
          </CustomButton>
        )
      }
    </>
  );
};

export default ContentMenu;