import styled from "styled-components";
import { theme } from "../../../style/theme";
import Pictureframe from "../../generic-components/section-picture-frame";

const FormTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-family: ${theme.fonts.playfair};
  color: ${theme.colors.secondary};
  margin: 24px;
`;

const FormSection = styled.form`
  width: 100%;
`;

const FormDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 16px;

  @media (max-width: 700px) {
    width: 94%;
  }
`;

const FormLabel = styled.label`
  margin-bottom: 12px;
  font-family: ${theme.fonts.playfair};
  font-size: 2rem;
  font-weight: 600;
  color: ${theme.colors.secondary};

  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

const FormInput = styled.input`
  width: 500px;
  text-align: center;
  font-size: 1.4rem;

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;

const FormButton = styled.button`
  width: 180px;
  height: 32px;
  font-family: ${theme.fonts.roboto};
  background-color: ${theme.colors.secondary};
  border: none;
  border-radius: 15px;
  margin-top: 16px;
`;

const FormTextArea = styled.textarea`
  width: 500px;
  height: 100px;
  text-align: center;
  font-size: 1.4rem;
  margin-top: 12px;

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;

const FormCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 24px;
  height: 24px;
  margin-top: 12px;

  @media (max-width: 400px) {
    width: 20px;
    height: 20px;
  }
`;

function FormComponent({
  title,
  onSubmit,
  onChange,
  categoryValue,
  nameValue,
  imgSrcValue,
  imgAltValue,
  priceValue,
  onlyDinnerValue,
  spicyValue,
  allergensValue,
  infoValue,
}) {
  return (
    <>
      <FormTitle>{title}</FormTitle>
      <Pictureframe
        $marginBottom={"40px"}
        $midWidth={"80%"}
        $minWidth={"310px"}
      >
        <FormSection onSubmit={onSubmit}>
          <FormDivStyle>
            <FormLabel htmlFor="category">Categoria</FormLabel>
            <FormInput
              type="text"
              id="category"
              name="category"
              value={categoryValue}
              onChange={onChange}
              required
            />
          </FormDivStyle>

          <FormDivStyle>
            <FormLabel htmlFor="name">Nome</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={nameValue}
              onChange={onChange}
              required
            />
          </FormDivStyle>

          <FormDivStyle>
            <FormLabel htmlFor="imgSrc">Immagine</FormLabel>
            <FormInput
              type="text"
              id="imgSrc"
              name="imgSrc"
              value={imgSrcValue}
              onChange={onChange}
              required
            />
          </FormDivStyle>

          <FormDivStyle>
            <FormLabel htmlFor="imgAlt">Alt immagine</FormLabel>
            <FormInput
              type="text"
              id="imgAlt"
              name="imgAlt"
              value={imgAltValue}
              onChange={onChange}
              required
            />
          </FormDivStyle>

          <FormDivStyle>
            <FormLabel htmlFor="price">Prezzo</FormLabel>
            <FormInput
              type="number"
              id="price"
              name="price"
              value={priceValue}
              onChange={onChange}
              required
            />
          </FormDivStyle>

          <FormDivStyle>
            <FormLabel htmlFor="onlyDinner">Solo a cena</FormLabel>
            <FormCheckbox
              type="checkbox"
              id="onlyDinner"
              name="onlyDinner"
              checked={onlyDinnerValue}
              onChange={onChange}
            />
          </FormDivStyle>

          <FormDivStyle>
            <FormLabel htmlFor="spicy">Piccantezza</FormLabel>
            <FormInput
              type="number"
              id="spicy"
              name="spicy"
              value={spicyValue}
              onChange={onChange}
              required
            />
          </FormDivStyle>

          <FormDivStyle>
            <FormLabel htmlFor="allergens">Allergeni (separali con la ,)</FormLabel>
            <FormInput
              type="text"
              id="allergens"
              name="allergens"
              value={allergensValue}
              onChange={onChange}
            />
          </FormDivStyle>

          <FormDivStyle>
            <FormLabel htmlFor="info">Info piatto</FormLabel>
            <FormTextArea
              id="info"
              name="info"
              value={infoValue}
              onChange={onChange}
              required
            />
          </FormDivStyle>

          <FormDivStyle>
            <FormButton type="submit">Invia</FormButton>
          </FormDivStyle>
        </FormSection>
      </Pictureframe>
    </>
  );
}

export default FormComponent;
