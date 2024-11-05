import styled from "styled-components";
import { theme } from "../../style/theme";
import HeaderComponent from "../main-page-components/header";
import ContactsForm from "./contact-form";
import headerImage from "../../assets/max-burger-PvyjOd6PSUo-unsplash.jpg";

const MappTitle = styled.h2`
  font-family: ${theme.fonts.playfair};
  color: ${theme.colors.secondary};
  text-transform: uppercase;
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 40px;

  @media (max-width: 540px) {
    font-size: 2rem;
  }
`;

const MappDiv = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
`;

const Mapp = styled.iframe`
  width: 100%;
  height: 450px;
`;

function ContactsComponent() {
  return (
    <>
      <HeaderComponent
        src={headerImage}
        alt={"Menu"}
        title={"Contatti"}
        subTitle={"Se vuoi essere dei nostri"}
        $heightVh={"80vh"}
        showSubContainer={false}
      />
      <ContactsForm />
      <MappTitle>Puoi trovarci qui</MappTitle>
      <MappDiv>
        <Mapp
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1000!2d9.116896187744468!3d39.24795217280022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1730727667790"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></Mapp>
      </MappDiv>
    </>
  );
}

export default ContactsComponent;
