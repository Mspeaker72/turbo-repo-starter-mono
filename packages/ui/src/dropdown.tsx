import 
styled 
from "styled-components";

interface DropdownProps {
  label?: string,
  options: string[],
  onSelection?: () => void,
}

interface InputBoxProps {
  label?: string,
}


const Frame = styled.div`
width: 100%;
display:flex;
justify-content: flex-start;
font-size: 16px;
gap: 10px;
color: white;
font-weight: 800;
border-radius : 0px 20px 20px 0px;
flex-direction: column;
`

export const InputBox = ({label}:InputBoxProps) => {

  return(

  <Frame>

    {label}

  <input
  type={ 'text' }
  />
  </Frame>
  );
}


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