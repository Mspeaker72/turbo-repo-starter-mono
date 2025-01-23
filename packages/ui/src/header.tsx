import 
  styled 
from "styled-components";
import HeaderTypes from "../../shared/Types/Header";

export const Header = styled.div<HeaderTypes.HeaderProps>`
  background: ${props => props.background || 'gainsboro'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '50px'};
`