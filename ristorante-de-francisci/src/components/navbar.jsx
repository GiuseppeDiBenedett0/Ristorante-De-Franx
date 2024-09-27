import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styled from "styled-components";
import { theme } from "../style/theme";
import { Link } from "react-router-dom";

const CustomNavbar = styled(Navbar)`
  background-color: ${theme.colors.primary};
  border-bottom: 2px solid ${theme.colors.secondary};
  font-family: ${theme.fonts.manrope};

  .navbar-nav {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const CustomContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: large;
  text-transform: uppercase;
  letter-spacing: 4px;
`;

const CustomNavLink = styled(Nav.Link)`
  color: ${theme.colors.text};
  border: none;

  &:hover {
    color: ${theme.colors.secondary};
  }

  &.nav-link.active {
    color: ${theme.colors.secondary};
  }
`;

const CustomNavDropdown = styled(NavDropdown)`
  color: ${theme.colors.text};

  .dropdown-menu {
    background-color: ${theme.colors.primary};
    top: 112%;
    left: 15%;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  }

  &:hover {
    background-color: ${theme.colors.primary};
  }

  .dropdown-toggle {
    color: ${theme.colors.text};
    padding: 0 !important;

    &:hover {
      color: ${theme.colors.secondary};
    }

    &.show {
      color: ${theme.colors.secondary};
    }
  }
`;

const CustomDropdownItem = styled(NavDropdown.Item)`
  padding: 16px;
  color: ${theme.colors.text};

  &:hover {
    background-color: inherit;
    color: ${theme.colors.secondary};
  }
`;

function NavbarComponent() {
  return (
    <CustomNavbar expand="lg">
      <CustomContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <CustomNavLink className="px-4 py-3" as={Link} to="/">Home</CustomNavLink>
            <CustomNavLink className="px-4 py-3" as={Link} to="/la-nostra-storia">La nostra storia</CustomNavLink>
            <CustomNavDropdown className="px-4 py-3"  title="I nostri piatti" id="basic-nav-dropdown">
              <CustomDropdownItem href="#action/3.1">
                Antipasti
              </CustomDropdownItem>
              <CustomDropdownItem href="#action/3.2">Primi</CustomDropdownItem>
              <CustomDropdownItem href="#action/3.3">
                Secondi
              </CustomDropdownItem>
              <CustomDropdownItem href="#action/3.4">Dolci</CustomDropdownItem>
              <CustomDropdownItem href="#action/3.3">
                Bevande
              </CustomDropdownItem>
            </CustomNavDropdown>
            <CustomNavLink className="px-4 py-3" href="#bubas">Contatti</CustomNavLink>
          </Nav>
        </Navbar.Collapse>
      </CustomContainer>
    </CustomNavbar>
  );
}

export default NavbarComponent;