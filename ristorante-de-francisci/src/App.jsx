import "bootstrap/dist/css/bootstrap.min.css";
import styled, { createGlobalStyle } from "styled-components";
import NavbarComponent from "./components/navbar";
import HomeMainComponent from "./components/main-page-components/home-main";
import FooterComponent from "./components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OurStoryComponent from "./components/our-story-components/our-story";
import MenùComponent from "./components/menu-components/menu-main";
import ContactsComponent from "./components/contact-components/contact-main";
import DishPageComponent from "./components/menu-components/dish-page-component";
import NodeDishPageComponent from "./components/menu-components/node-menu/node-dish-page-component";
import DishForm from "./components/menu-components/node-menu/create-dish";
import PatchDishForm from "./components/menu-components/node-menu/patch-dish";

const GlobalSettings = createGlobalStyle`
 body{
  background-color: #e7e6e6;
 }
 `;

function App() {
  return (
    <>
      <GlobalSettings />
      <Router basename={process.env.PUBLIC_URL}>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomeMainComponent />} />
          <Route path="/home" element={<HomeMainComponent />} />
          <Route path="/la-nostra-storia" element={<OurStoryComponent />} />
          <Route path="/menù" element={<MenùComponent />} />
          <Route path="/contacts" element={<ContactsComponent />} />
          <Route path="menù/:idName" element={<DishPageComponent />} />
          <Route path="node/menù/:dishId" element={<NodeDishPageComponent />} />
          <Route path="/crea-piatto" element={<DishForm />} />
          <Route path="/edit-piatto/:dishId" element={<PatchDishForm />} />
        </Routes>
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;
