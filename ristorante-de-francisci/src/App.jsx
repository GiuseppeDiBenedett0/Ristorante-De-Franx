import "bootstrap/dist/css/bootstrap.min.css";
import styled, { createGlobalStyle } from "styled-components";
import NavbarComponent from "./components/navbar";
import HomeMainComponent from "./components/main-page-components/home-main";
import FooterComponent from "./components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OurStoryComponent from "./components/our-story-components/our-story";

const GlobalSettings = createGlobalStyle`
 body{
  background-color: #e7e6e6;
 }
 `;

function App() {
  return (
    <>
      <GlobalSettings />
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomeMainComponent />} />
          <Route path="/home" element={<HomeMainComponent />} />
          <Route path="/la-nostra-storia" element={<OurStoryComponent />} />
        </Routes>
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;
