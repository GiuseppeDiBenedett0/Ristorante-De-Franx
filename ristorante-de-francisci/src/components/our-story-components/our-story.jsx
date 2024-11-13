import Title from "./section-title";
import HeaderComponent from "../main-page-components/header";
import OurStorySection from "./story-section";
import StaffComponent from "./staff";
import headerImage from "../../assets/joanna-boj-MhOoD_h90ks-unsplash.jpg";

function OurStoryComponent() {

  return (
    <>
      <HeaderComponent
        $heightVh={"70vh"}
        src={headerImage}
        alt={"Tavolata"}
        title={"La nostra"}
        titleBr={"storia"}
        subTitle={"E che bella storia,"}
        subTitleBr={"ragazzi!"}
        showSubContainer={false}
      />
      <OurStorySection/>
        <Title title={"Il nostro staff"}/>
      <StaffComponent />
    </>
  );
}

export default OurStoryComponent;
