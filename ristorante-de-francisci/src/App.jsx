import "bootstrap/dist/css/bootstrap.min.css";
import styled, { createGlobalStyle } from "styled-components";
import NavbarComponent from "./components/navbar";
import HomeMainComponent from "./components/main-page-components/homeMain";
import FooterComponent from "./footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OurStoryComponent from "./components/our-story-component/our-story";

function App() {
  const GlobalSettings = createGlobalStyle`

 body{
  background-color: #e7e6e6;
 }
 
 `;

  return (
    <>
      <GlobalSettings />
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomeMainComponent />} />
          <Route path="/la-nostra-storia" element={<OurStoryComponent />} />
        </Routes>
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;
