"use client";

import 
  styled 
from "styled-components";

const StyledButton = styled.button`

border-radius: 20px;
padding: 1rem;
background:#FF4141;
color: white;
border: none;
width: 90%;
margin: 5px 0;

&:hover{
  cursor: pointer;
  border: 1px white solid;
}

&:disabled{
  cursor: not-allowed;
  background: gainsboro;
  border: none;
}

`

export const ModalButton = styled(StyledButton)`
  width: 50%;
  font-size: 18px;
  font-family-roboto;
  font-weight: 500;
`

interface ButtonProps {
  text:string,
  onClick: () => void,
  disabled?: boolean,
}

export const Button = ({...props}:ButtonProps) => {

  return (<StyledButton
  onClick={()=>props.onClick()}
  disabled={props.disabled}
  >
    {props.text}
  </StyledButton>
  );

}
