import owner from "../assets/owner.jpeg";
import resturant from "../assets/jason-leung-poI7DelFiVA-unsplash.jpg";
import johnnyModello from "../assets/johnny-di-daniele.jpg";

const OurStorydata = [
  {
    sectionTitle: "Il nostro locale",
    containerMarginTop: "16px",
    containerFlexDirection: "unset",
    firstitle: "La storia di Pirri",
    description: `voluptas non! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Reprehenderit dignissimos, molestias animi provident
                reiciendis laudantium labore officiis laborum amet consequuntur
                voluptatum sequi ullam ratione doloremque blanditiis, odit hic
                voluptas non!.`,
    secondTitle: "Qui non ci sono evasori fiscali",
    secondDescription: `voluptas non! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Reprehenderit dignissimos, molestias animi provident
                reiciendis laudantium labore officiis.`,
    width: "100%",
    images: [
      { src: resturant, alt: "Ristorante", imgWidth: "300px", imgHeight: "190px" },
      { src: resturant, alt: "Ristorante", imgWidth: "300px", imgHeight: "190px" },
    ],
    hoverImage: [],
    imageDescription: "Ho modellato personalmente i nostri tavoli",
    imgWidth: "100%",
    sectionWidth: "320px",
    flexDirection: "column",
  },
  {
    sectionTitle: "Il fondatore",
    containerMarginTop: "16px",
    containerFlexDirection: "row-reverse",
    firstitle: "Danielitto De Franxissi",
    description: `voluptas non! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Reprehenderit dignissimos, molestias animi provident
                reiciendis laudantium labore officiis laborum amet consequuntur
                voluptatum sequi ullam ratione doloremque blanditiis, odit hic
                voluptas non!`,
    secondTitle: "Il mio sogno",
    secondDescription: `voluptas non! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Reprehenderit dignissimos, molestias animi provident
                reiciendis laudantium labore officiis laborum amet consequuntur
                voluptatum sequi ullam ratione doloremque blanditiis, odit hic
                voluptas non!`,
    width: "100%",
    images: [
      { src: owner, alt: "Proprietario", imgWidth: "300px", imgHeight: "300px" },
      { src: johnnyModello, alt: "Il modello 3D di Johnny", imgWidth: "200px", imgHeight: "300px" },
    ],
    hoverImage: [],
    imageDescription: "Bello vero? L'ho fatto io",
    imgWidth: "100%",
    sectionWidth: "320px",
    flexDirection: "column",
  },
];

export default OurStorydata;
