import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { theme } from "../../style/theme";

const CustomButton = styled(Button)`
  && {
    font-family: ${theme.fonts.manrope};
    text-transform: uppercase;
    font-weight: 600;
    width: ${({ width }) => width || "30%"};
    background-color: ${theme.colors.secondary};
    border-color: transparent;
  }

  &&:hover {
    background-color: ${theme.colors.secondary};
    border-color: transparent;
    color: #0e0e0e;
  }

  &&:focus,
  &&:focus-visible,
  &&:active,
  &&.active {
    box-shadow: none !important;
    outline: none;
    background-color: ${theme.colors.secondary};
    border-color: transparent;
    color: #0e0e0e;
  }

  @media (max-width: 450px) {
    font-size: ${({ fontSize }) => fontSize || "0.8rem"};
  }
`;

function ButtonComponent({ buttonText, width, fontSize }) {
  return (
    <>
      <CustomButton width={width} fontSize={fontSize}>
        {buttonText}
      </CustomButton>
    </>
  );
}

export default ButtonComponent;
