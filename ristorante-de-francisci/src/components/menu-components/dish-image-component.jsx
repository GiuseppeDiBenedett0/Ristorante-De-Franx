import styled from "styled-components";

const Image = styled.img`
  width: ${({ $width }) => $width || "160px"};
  height: ${({ $height }) => $height || "160px"};
  margin: ${({ $margin }) => $margin || "16px"};
  border-radius: 15px;

  @media (max-width: 550px) {
    width: ${({ $mediaWidth }) => $mediaWidth};
    height: ${({ $mediaHeight }) => $mediaHeight};
  }
`;

function DishImage({ src, alt, $width, $height, $margin, $mediaWidth, $mediaHeight }) {
  return (
    <>
      <Image src={src} alt={alt} $width={$width} $height={$height} $margin={$margin} $mediaWidth={$mediaWidth} $mediaHeight={$mediaHeight} />
    </>
  );
}

export default DishImage;
