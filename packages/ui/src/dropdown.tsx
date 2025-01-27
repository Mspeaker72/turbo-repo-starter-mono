import 
styled 
from "styled-components";

interface DropdownProps {
  label?: string,
  options: string[],
  onSelection?: () => void,
}


const Frame = styled.div`
width: 100%;
display:flex;
justify-content: space-evenly;
margin: 10px 0px;
font-size: 16px;
background: #3D3D3D;
padding: 1rem 0;
border-radius : 0px 20px 20px 0px;
`


export const Dropdown = ({options, onSelection,label}:DropdownProps) => {

  return(

  <Frame>

    {label}

  <select
  onSelect={onSelection}
  >
    {options.map((option, index) => 
      <option value={option} key={index}>
        {option}
      </option>
    )}
  </select>

  </Frame>
  );
}