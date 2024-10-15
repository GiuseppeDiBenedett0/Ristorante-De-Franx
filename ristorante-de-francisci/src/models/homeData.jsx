import sectionImage1 from "../assets/clark-douglas-k8FXgsDTm8g-unsplash.jpg";
import sectionImage2 from "../assets/lampos-aritonang-1piilkxsqLM-unsplash.jpg";

const HomeData = [
  {
    customClass: "upper-container",
    sectionTitle: "Scopri la nostra storia",
    sectionP: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit dignissimos, molestias animi provident reiciendis
              laudantium labore officiis laborum amet consequuntur voluptatum
              sequi ullam ratione doloremque blanditiis, odit hic voluptas non!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit dignissimos, molestias animi provident reiciendis
              laudantium labore officiis laborum amet consequuntur voluptatum
              sequi ullam ratione doloremque blanditiis, odit hic voluptas non!`,
    buttonText: "Visita",
    buttonLink: "/la-nostra-storia",
    images: [
      { src: sectionImage1, alt: "Piatto di pasta", imgWidth: "90%", imgHeight: "25%" },
    ],
    hoverImage: [],
    containerFlexDirection: "row",
  },
  {
    sectionTitle: "Scopri il nostro menù",
    sectionP: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit dignissimos, molestias animi provident reiciendis
              laudantium labore officiis laborum amet consequuntur voluptatum
              sequi ullam ratione doloremque blanditiis, odit hic voluptas non!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit dignissimos, molestias animi provident reiciendis
              laudantium labore officiis laborum amet consequuntur voluptatum
              sequi ullam ratione doloremque blanditiis, odit hic voluptas non!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit dignissimos, molestias animi provident reiciendis
              laudantium labore officiis laborum amet consequuntur voluptatum
              sequi ullam ratione doloremque blanditiis, odit hic voluptas non!`,
    buttonText: "Visita",
    buttonLink: "/menu",
    images: [
      { src: sectionImage1, alt: "Piatto di pasta", imgWidth: "270px", imgHeight: "180px" },
      { src: sectionImage2, alt: "Piatto di pasta", imgWidth: "270px", imgHeight: "180px" },
      { src: sectionImage2, alt: "Piatto di pasta", imgWidth: "270px", imgHeight: "180px" },
      { src: sectionImage2, alt: "Piatto di pasta", imgWidth: "270px", imgHeight: "180px" },
    ],
    hoverImage: [sectionImage1, sectionImage2],
    sectionWidth: "50%",
    imageSectionWidth: "60%",
    containerFlexDirection: "row-reverse",
  },
];

export default HomeData;