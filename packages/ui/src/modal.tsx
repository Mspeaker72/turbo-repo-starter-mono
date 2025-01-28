import 
  styled 
from "styled-components";

interface ModalProps {
  show: boolean;
}

const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
`

export const Modal = ({show}:ModalProps) => {
  return (
    show && 
    <ModalBackground>

    </ModalBackground>

  );
}