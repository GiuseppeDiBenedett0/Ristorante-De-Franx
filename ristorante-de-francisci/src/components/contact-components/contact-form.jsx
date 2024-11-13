import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { theme } from "../../style/theme";
import Pictureframe from "../generic-components/section-picture-frame";

const FormTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-family: ${theme.fonts.playfair};
  color: ${theme.colors.secondary};
  margin: 24px;

  @media (max-width: 870px) {
    font-size: 2.5rem;
  }
`;

const FormSection = styled.form`
  width: 535px;

  @media (max-width: 870px) {
    width: 100%;
  }
`;

const FormDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 16px;

  @media (max-width: 870px) {
    width: 94%;
  }
`;

const FormLabel = styled.label`
  margin-bottom: 12px;
  font-family: ${theme.fonts.playfair};
  font-size: 1rem;
  font-weight: 600;
  color: ${theme.colors.secondary};
`;

const FormInput = styled.input`
  width: 500px;
  text-align: center;
  font-size: 1.4rem;
  background-color: transparent;
  border: 1px solid ${theme.colors.secondary};
  color: ${theme.colors.secondary};

  &::placeholder {
    color: ${theme.colors.secondary};
    opacity: 1;
    font-family: ${theme.fonts.roboto};
  }

  @media (max-width: 870px) {
    width: 94%;
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
  background-color: transparent;
  border: 1px solid ${theme.colors.secondary};
  color: ${theme.colors.secondary};

  &::placeholder {
    color: ${theme.colors.secondary};
    opacity: 1;
    font-family: ${theme.fonts.roboto};
  }

  @media (max-width: 870px) {
    width: 94%;
  }
`;

const FormTermsDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  text-align: center;
  margin: 16px;
  padding: 16px;
`;

const FormCheckbox = styled.input.attrs({ type: "checkbox" })`
  height: 27px;
`;

const StyledValidDiv = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ValidDiv = ({ isVisible, children }) => (
  <AnimatePresence>
    {isVisible && (
      <StyledValidDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        {children}
      </StyledValidDiv>
    )}
  </AnimatePresence>
);

const ValidForm = styled.p`
  font-family: ${theme.fonts.roboto};
  font-size: 1.8rem;
  text-transform: uppercase;
  background-color: #acacac;
  border-radius: 15px;
  padding: 40px;
  text-align: center;
  margin: 0;
`;

const InvalidForm = styled.p`
  font-family: ${theme.fonts.roboto};
  background-color: transparent;
  width: 124px;
  color: ${theme.colors.secondary};
  border: 1px solid ${theme.colors.secondary};
  text-align: center;
  margin: 0;
`;

function ContactsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      setFormData({
        ...formData,
        [name]: numericValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/contact`, formData);
      console.log("Form compilato con successo");
      setSuccessMessage("Contatto inviato con successo!");
      setErrorMessage("");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        consent: false,
      });
    } catch (err) {
      console.error(`Errore durante la compilazione del form`, err);
      setSuccessMessage("");
      setErrorMessage("Errore durante l'invio del contatto.");
    }
  };

  const fakeSubmit = async (e) => {
    e.preventDefault();
    console.log("Form compilato con successo", formData);
    setSuccessMessage("Contatto inviato con successo!");
    setErrorMessage("");
    setIsVisible(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      consent: false,
    });
  };

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <>
      <Pictureframe
        $sectionWidth={"855px"}
        $midWidth={"90%"}
        $minWidth={"340px"}
        $marginBottom={"40px"}
        $backgroundColor={theme.colors.primary}
      >
        <FormSection onSubmit={fakeSubmit}>
          <FormTitle>Contattaci per sapere di più!</FormTitle>
          <FormDivStyle>
            <FormLabel htmlFor="name"></FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nome e cognome"
              autoComplete="new-password"
              required
            />
          </FormDivStyle>
          <FormDivStyle>
            <FormLabel htmlFor="email"></FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              autoComplete="off"
              required
            />
          </FormDivStyle>
          <FormDivStyle>
            <FormLabel htmlFor="phone"></FormLabel>
            <FormInput
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Telefono"
              autoComplete="new-password"
              required
            />
          </FormDivStyle>
          <FormDivStyle>
            <FormLabel htmlFor="message"></FormLabel>
            <FormTextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Messaggio"
              required
            />
          </FormDivStyle>
          <FormTermsDiv>
            <FormLabel htmlFor="consent">
              Acconsento al trattamento dei miei dati personali secondo la
              normativa sulla privacy e GDPR in vigore. Dichiaro di aver preso
              visione della Privacy Policy e dichiaro di aver letto le
              informazioni richieste in conformità con Articolo 13 del GDPR.
            </FormLabel>
            <FormCheckbox
              type="checkbox"
              id="consent"
              name="consent"
              value={formData.consent}
              onChange={handleChange}
              required
            />
          </FormTermsDiv>
          <FormDivStyle>
            <FormButton type="submit">Invia</FormButton>
          </FormDivStyle>
          <ValidDiv isVisible={isVisible}>
            {successMessage && <ValidForm>{successMessage}</ValidForm>}{" "}
            {errorMessage && <InvalidForm>{errorMessage}</InvalidForm>}{" "}
          </ValidDiv>
        </FormSection>
      </Pictureframe>
    </>
  );
}

export default ContactsForm;
