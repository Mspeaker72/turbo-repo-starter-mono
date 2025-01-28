import 
  styled 
from "styled-components";

// A modal is used for notfications and takes entire page most of the time , can show errors and creates a
// requires a button or click away to close , usehistory can be used to navitage to seperate page should this
// meet the requirements.

interface ModalProps {
  show: boolean;
  messsage?: string;
  icon?: string;
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
  width: 400px;
  height: 200px;
  border-radius: 20px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;

`
export const Modal = ({show}:ModalProps) => {
  return (
    show && 
    <ModalBackground>

      <DeatilsBox>
        Error has occured!
      </DeatilsBox>

    </ModalBackground>

  );
}