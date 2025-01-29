import 
  styled 
from "styled-components";



import { 
  ModalButton
} from "./button";

// A modal is used for notfications and takes entire page most of the time , can show errors and creates a
// requires a button or click away to close , usehistory can be used to navitage to seperate page should this
// meet the requirements.

interface ModalProps {
  messsage?: string;
  icon?: string;
  onClick: () => void;
}

const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`

const DeatilsBox = styled.div`
  width: 800px;
  height: 300px;
  border-radius: 20px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

`
export const Modal = ({...props}:ModalProps) => {
  return (
    
    <ModalBackground>

      <DeatilsBox>
        Error has occured!
        <ModalButton
        onClick={props.onClick}
        >
          Close
        </ModalButton>

      </DeatilsBox>

    </ModalBackground>

  );
}