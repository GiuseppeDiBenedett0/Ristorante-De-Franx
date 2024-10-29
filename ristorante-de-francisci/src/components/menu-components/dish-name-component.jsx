import styled from "styled-components";
import { theme } from "../../style/theme";

const Name = styled.h3`
  font-family: ${theme.fonts.playfair};
  color: ${theme.colors.secondary};
  font-size: ${({$fontSize}) => $fontSize || "1.8rem"};
  text-align: ${({$textAlign}) => $textAlign || "center"};
  text-transform: uppercase;
  margin-top: ${({$marginTop}) => $marginTop || "0"};
`;

function DishName( {children, $textAlign, $fontSize, $marginTop} ){
    return(
        <>
        <Name $textAlign={$textAlign} $fontSize={$fontSize} $marginTop={$marginTop}>{ children }</Name>
        </>
    )
}

export default DishName;