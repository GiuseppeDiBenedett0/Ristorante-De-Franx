import styled from "styled-components";
import { theme } from "../../style/theme";
import { useRef } from "react";
import Section from "../generic-components/section";
import ImageComponent from "../generic-components/images";
import StaffData from "../../models/staffData";

const StaffContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const StaffImage = styled.img`
  width: 130px;
  height: 130px;
  margin: 16px;
  border-radius: 50%;
  background-color: ${theme.colors.primary};
  border: 2px solid ${theme.colors.secondary};
  object-fit: cover;
  object-position: 50% 20%;
  transition: transform 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.1) rotate(5deg);
  }
`;

const StaffCards = styled.div`
  width: 50%;
  background-color: #fdfdfd;
  border: 1px solid ${theme.colors.secondary};
  border-radius: 15px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 24px;
  padding: 16px;

  @media (max-width: 1160px) {
    width: 70%;
  }

  @media (max-width: 879px) {
    width: 90%;
  }
`;

function StaffComponent() {

  //Scroll verso il membro dello staff selezionato.
  const staffRefs = StaffData.map(() => useRef(null));

  const updatedStaffData = StaffData.map((member, index) => ({
    ...member,
    ref: staffRefs[index],
  }));

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <StaffContainer>
        {updatedStaffData.map((member, index) => (
          <StaffImage
            key={index}
            src={member.imgSrc}
            alt={member.name}
            onClick={() => scrollToSection(member.ref)}
          />
        ))}
      </StaffContainer>

      {updatedStaffData.map((member, index) => (
        <StaffCards key={index} ref={member.ref}>
          <Section
            sectionTitle={member.name}
            sectionP={<>{member.description}</>}
            secondTitle={member.roleTitle}
            secondP={<>{member.roleDescription}</>}
            $width={"100%"}
            $fontSize={"3.4rem"}
            imageElement={
              <ImageComponent
                images={[
                  { src: member.gifSrc, alt: `${member.name} in azione` },
                ]}
                hoverImages={[]}
                $imgWidth={"300px"}
                $imgHeight={"300px"}
                $maxWidth={"879px"}
                $minorImgWidth={"190px"}
                $minImgHeight={"190px"}
                $sectionWidth={"100%"}
                $borderRadius={"50%"}
                $flexDirection={"column"}
              />
            }
          />
        </StaffCards>
      ))}
    </>
  );
}

export default StaffComponent;
