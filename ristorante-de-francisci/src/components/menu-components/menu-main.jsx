import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeaderComponent from "../header";
import DishComponent from "./dish-component";
import NodeDishComponent from "./node-menu/node-dish-component";
import headerImage from "../../assets/max-burger-PvyjOd6PSUo-unsplash.jpg";

function MenùComponent() {
  const { hash } = useLocation();

  useEffect(() => {
    if(hash) {
      const element = document.getElementById(hash.substring(1));
      if(element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  //Deccomentare NodeDishComponent per visualizzare il menu con il backend node. Solo uno tra DishComponent e NodeDishComponent i deve rimanere deccomentato.

  return (
    <>
      <HeaderComponent
        src={headerImage}
        alt={"Menu"}
        title={"Il nostro"}
        titleBr={"menù"}
        subTitle={"Solo cibi freschi"}
        subTitleBr={"...circa"}
        $heightVh={"80vh"}
        showSubContainer={false}
      />
      {<DishComponent />}
      {/*<NodeDishComponent />*/}
    </>
  );
}

export default MenùComponent;
