import React from "react";
import styled from "styled-components";

const SectionPictureFrame = styled.div`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection || "unset"};
  justify-content: center;
  align-items: center;
  width: ${({ $sectionWidth }) => $sectionWidth || "60%"};
  background-color: ${({ $backgroundColor }) => $backgroundColor || "#ffffff"};
  border-radius: 15px;
  margin: auto;
  margin-top: ${({ $marginTop }) => $marginTop || "40px"};
  margin-bottom: ${({ $marginBottom }) => $marginBottom || "24px"};
  padding: 16px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 878px) {
    width: ${({ $midWidth }) => $midWidth || "100%"};
  }

  @media (max-width: 400px) {
    width: ${({ $minWidth }) => $minWidth || "265px"};
  }
`;

const Pictureframe = React.forwardRef(
  (
    {
      children,
      $sectionWidth,
      $flexDirection,
      $backgroundColor,
      $marginTop,
      $marginBottom,
      $midWidth,
      $minWidth
    },
    ref
  ) => {
    return (
      <SectionPictureFrame
        ref={ref}
        $sectionWidth={$sectionWidth}
        $midWidth={$midWidth}
        $minWidth={$minWidth}

        $flexDirection={$flexDirection}
        $backgroundColor={$backgroundColor}
        $marginTop={$marginTop}
        $marginBottom={$marginBottom}
      >
        {children}
      </SectionPictureFrame>
    );
  }
);

export default Pictureframe;
