import 
  styled 
from "styled-components";

type HeaderProps = {
  background?: string,
  width?: string,
  height?: string,
}

export const Header = styled.div<HeaderProps>`
  background: ${props => props.background || 'gainsboro'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '50px'};
`