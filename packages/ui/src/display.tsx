import 
  styled 
from "styled-components";

export const Frame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

`
export const SpinnerFrame = styled(Frame)`
  justify-content: center;
`

export const TitleFrame = styled.div`
width: 100%;
color: white;
text-align: center;
font-family: fantasy;
font-size: 60px;
margin-bottom: 10%;

`