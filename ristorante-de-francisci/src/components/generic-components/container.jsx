import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1140px;
  margin: auto;
  margin-top: 96px;
  margin-bottom: 32px;

  @media (max-width: 1160px) {
    width: 70%;
  }

  @media (max-width: 878px) {
    flex-direction: column;
  }
`;

function ContainerComponent({ children, className }) {
  return (
    <>
      <Container className={className}>{children}</Container>
    </>
  );
}
export default ContainerComponent;
