"use client";

import 
  styled 
from "styled-components";

const StyledButton = styled.button`

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
