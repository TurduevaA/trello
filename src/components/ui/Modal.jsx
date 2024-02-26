import ReactDom from "react-dom";
import styled from "styled-components";

export const Modal = ({ children, closeModal }) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onClick={closeModal}></Backdrop>,
        document.getElementById("backdrop")
      )}
      {ReactDom.createPortal(
        <StyledModal>{children}</StyledModal>,
        document.getElementById("modal")
      )}
    </>
  );
};

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 20px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 30px;
  transform: translate(-50%, -50%);
`;
