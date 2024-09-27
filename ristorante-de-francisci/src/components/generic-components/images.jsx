import styled from "styled-components";

const ImagesSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: ${({ $sectionWidth }) => $sectionWidth || "40%"};
  margin-left: 48px;

  @media (max-width: 878px) {
    width: ${({ $minorSectionWidth }) => $minorSectionWidth || "100%"};
    margin-left: 0;
  }
`;

const Image = styled.img`
  border-radius: 15px;
  height: ${({ $imgHeight }) => $imgHeight || "25%"};
  width: ${({ $imgWidth }) => $imgWidth || "100%"};
  margin: 8px;
  transition: transform 0.2 ease-in-out, filter 0.2s ease-in-out;

  ${({ $isHoverable }) =>
    $isHoverable &&
    `
    &:hover { 
      transform: scale(1:1);
      filter: brightness(0.7);
    }
  `}

  @media (max-width: 878px) {
    width: ${({ $minorImgWidth }) => $minorImgWidth || "100%"};
    height: ${({ $minImgHeight }) => $minImgHeight || "100%"};
  }
`;

function ImageComponent({
  images,
  hoverImages,
  $sectionWidth,
  $minorSectionWidth,
  $imgWidth,
  className,
  $minorImgWidth,
  $imgHeight,
  $minImgHeight,
}) {
  return (
    <>
      <ImagesSection
        $sectionWidth={$sectionWidth}
        $minorSectionWidth={$minorSectionWidth}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            $imgWidth={$imgWidth}
            $imgHeight={$imgHeight}
            $minImgHeight={$minImgHeight}
            $minorImgWidth={$minorImgWidth}
            $isHoverable={hoverImages.includes(image.src)}
          />
        ))}
      </ImagesSection>
    </>
  );
}

export default ImageComponent;
