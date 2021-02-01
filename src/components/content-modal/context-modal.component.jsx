import { useContext } from "react";
import { MainContext } from "../../context/context";

import CustomButton from "../custom-button/custom-button.component";
import ModalWindow from "../modal-window/modal-window.components";

const ContentModal = () => {
  const{
    toggleModalWindow,
    toggleMenu,
    handleToggleModal
  } = useContext(MainContext);

  return (
    <>
      <ModalWindow handleToggleModal = {handleToggleModal} toggle = {toggleModalWindow}/>
      {
        !toggleModalWindow && !toggleMenu && (
          <CustomButton onClick = {handleToggleModal}>
            Show Modal
          </CustomButton>
        )
      }
    </>
  );
};

export default ContentModal;