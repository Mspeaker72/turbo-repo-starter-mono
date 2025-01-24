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
