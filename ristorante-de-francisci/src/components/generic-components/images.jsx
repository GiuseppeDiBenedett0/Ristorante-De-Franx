import styled from "styled-components";
import { theme } from "../../style/theme";

const ImagesSection = styled.div`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection || "row"};
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: ${({ $sectionWidth }) => $sectionWidth || "40%"};

  @media (max-width: ${({ $maxSectionWidth }) => $maxSectionWidth || "878px"}) {
    width: ${({ $minorSectionWidth }) => $minorSectionWidth || "100%"};
    margin-left: 0;
  }
`;

const Image = styled.img`
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || "transparent"};
  border: ${({ $border }) => $border || "none"};
  border-radius: ${({ $borderRadius }) => $borderRadius || "15px"};
  height: ${({ $imgHeight }) => $imgHeight || "25%"};
  width: ${({ $imgWidth }) => $imgWidth || "100%"};
  object-fit: ${({ $objectFit }) => $objectFit || "unset"};
  object-position: ${({ $objectPosition }) => $objectPosition || "unset"};
  margin: 8px;
  transition: transform 0.2s ease-in-out, filter 0.2s ease-in-out;

  ${({ $isHoverable }) =>
    $isHoverable &&
    `
    &:hover { 
      transform: scale(1.1);
      filter: brightness(0.7);
    }
  `}

  @media (max-width: ${({ $maxImageWidth }) => $maxImageWidth || "878px"}) {
    width: ${({ $minorImgWidth }) => $minorImgWidth || "100%"};
    height: ${({ $minImgHeight }) => $minImgHeight || "100%"};
  }
`;

const Imagedescription = styled.p`
  font-family: ${theme.fonts.roboto};
  font-size: smaller;
`;

function ImageComponent({
  images,
  hoverImages,
  imageDescription,
  $sectionWidth,
  $maxSectionWidth,
  $minorSectionWidth,
  $flexDirection,
  $imgWidth,
  $maxImageWidth,
  $minorImgWidth,
  $imgHeight,
  $minImgHeight,
  $borderRadius
}) {
  return (
    <>
      <ImagesSection
        $sectionWidth={$sectionWidth}
        $$maxSectionWidth={$maxSectionWidth}
        $minorSectionWidth={$minorSectionWidth}
        $flexDirection={$flexDirection}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            $imgWidth={image.imgWidth || $imgWidth}
            $imgHeight={image.imgHeight || $imgHeight}
            $maxImageWidth={$maxImageWidth}
            $minImgHeight={image.minImgHeight || $minImgHeight}
            $minorImgWidth={image.minorImgWidth || $minorImgWidth}
            $borderRadius={image.$borderRadius || $borderRadius}
            $isHoverable={hoverImages.includes(image.src)}
          />
        ))}
        <Imagedescription>{imageDescription}</Imagedescription>
      </ImagesSection>
    </>
  );
}

export default ImageComponent;
