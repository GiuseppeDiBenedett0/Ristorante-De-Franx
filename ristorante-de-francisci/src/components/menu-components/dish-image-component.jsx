import styled from "styled-components";

const Image = styled.img`
  width: ${({ $width }) => $width || "160px"};
  height: ${({ $height }) => $height || "160px"};
  margin: ${({ $margin }) => $margin || "16px"};
  border-radius: 15px;
`;

function DishImage({ src, alt, $width, $height, $margin}) {
  return (
    <>
      <Image src={src} alt={alt} $width={$width} $height={$height} $margin={$margin} />
    </>
  );
}

export default DishImage;
