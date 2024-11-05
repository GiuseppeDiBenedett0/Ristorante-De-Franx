import ContainerComponent from "../generic-components/container";
import Section from "../generic-components/section";
import Title from "./section-title";
import Pictureframe from "../generic-components/section-picture-frame";
import ImageComponent from "../generic-components/images";
import OurStorydata from "../../models/ourStoryData";

function OurStorySection() {
  return (
    <>
      {OurStorydata.map((sectionData, index) => (
        <div key={index}>
          <Title title={sectionData.sectionTitle} />
          <ContainerComponent
            $marginTop={sectionData.containerMarginTop}
            $flexDirection={sectionData.containerFlexDirection}
          >
            <Pictureframe>
              <Section
                sectionTitle={sectionData.firstitle}
                sectionP={<>{sectionData.description}</>}
                secondTitle={sectionData.secondTitle}
                secondP={sectionData.secondDescription}
                $width={sectionData.width}
              />
            </Pictureframe>
            <ImageComponent
              images={sectionData.images}
              hoverImages={sectionData.hoverImage}
              imageDescription={sectionData.imageDescription}
              $maxImageWidth={"878px"}
              $imgWidth={sectionData.imgWidth}
              $imgHeight={sectionData.imgHeight}
              $minImgHeight={"60%"}
              $minorImgWidth={"70%"}
              $sectionWidth={sectionData.sectionWidth}
              $flexDirection={sectionData.flexDirection}
            />
          </ContainerComponent>
        </div>
      ))}
    </>
  );
}

export default OurStorySection;
