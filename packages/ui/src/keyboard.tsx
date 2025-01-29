import 
  styled 
from "styled-components";


interface keyboardProps {
  keys: string[];

}

const Key = styled.div`
  width: 95%;
  height: 30px;
  color: white;
  background: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: solid 2px transparent;

  &:hover{
  border: solid 2px white;
  cursor: pointer;
  }
`

const KeyboardFrame = styled.div`
  padding-top: 10px;
  padding-bottom: 5px;
  background: rgba(0, 0, 0, 0.5);
  width:100%;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr); /* 3 columns */
  gap: 15px; 
  position: fixed;
  bottom: 0;

`

export const Keyboard = ({keys}:keyboardProps) => {

  return (

    <>

    <KeyboardFrame>
      {keys.map((value ,index)=> 

        <Key key={index}>
          {value}
        </Key>

      )}

    </KeyboardFrame>

    </>


    

  );
}