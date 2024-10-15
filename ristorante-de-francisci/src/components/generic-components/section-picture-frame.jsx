import React from "react";
import styled from "styled-components";

const SectionPictureFrame = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  background-color: #ffffff;
  border-radius: 15px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 24px;
  padding: 16px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 878px) {
    width: 100%;
  }

  @media (max-width: 400px) {
    width: 265px;
  }
`;

const Pictureframe = React.forwardRef(({ children }, ref) => {
  return (
    <SectionPictureFrame ref={ref}>
      {children}
    </SectionPictureFrame>
  );
});

export default Pictureframe;
