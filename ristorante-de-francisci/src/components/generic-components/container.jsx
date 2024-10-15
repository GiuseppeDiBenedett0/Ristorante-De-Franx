import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ $flexDirection }) => $flexDirection || "unset"};
  width: 1140px;
  margin: auto;
  margin-top: ${({$marginTop}) => $marginTop || "96px"};
  margin-bottom: ${({$marginBottom}) => $marginBottom || "32px"};

  @media (max-width: 1160px) {
    width: 70%;
  }

  @media (max-width: 878px) {
    flex-direction: column;
  }
`;

function ContainerComponent({ children, className, $marginTop, $marginBottom, $flexDirection }) {
  return (
    <>
      <Container className={className} $marginTop={$marginTop} $marginBottom={$marginBottom} $flexDirection={$flexDirection}>{children}</Container>
    </>
  );
}
export default ContainerComponent;
