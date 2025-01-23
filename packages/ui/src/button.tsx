"use client";

import 
  styled 
from "styled-components";

const StyledButton = styled.button`

`

interface ButtonProps {
  text:string,
  onClick: () => void
}

export const Button = ({...props}:ButtonProps) => {

  return (<StyledButton
  onClick={()=>props.onClick()}
  >
    {props.text}
  </StyledButton>
  );

}
