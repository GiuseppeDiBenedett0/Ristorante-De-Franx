import Owner from "../assets/23209eee-4e63-42ea-b97f-07750cca8060.jpg";
import sectionImage1 from "../assets/clark-douglas-k8FXgsDTm8g-unsplash.jpg";
import sectionImage2 from "../assets/lampos-aritonang-1piilkxsqLM-unsplash.jpg";
import sectionImage3 from "../assets/fotografia-de-alimentos-4aYZxBN_29Q-unsplash.jpg";
import sectionImage4 from "../assets/deeliver-RCkipqwhoFc-unsplash.jpg";

const HomeData = [
  {
    customClass: "upper-container",
    sectionTitle: "Scopri la nostra storia",
    sectionP: `Il fondatore, Daniele De francisci, ha sempre avuto un sogno, lavorare nella ristorazione. 
               Appassionato di cucina fin da piccolo, ha sempre sperimentato tante combinazioni e ricette interessanti. 
              Ispirandosi alla cucina della sua terra, Monreale, ha, dopo tanti sacrifici, aperto al gran pubblico questa 
              piccola bottega di gusto e tradizione. `,
    buttonText: "Visita",
    buttonLink: "/la-nostra-storia",
    images: [
      { src: Owner, alt: "Daniele in tutto il suo splendore", imgWidth: "90%", imgHeight: "25%" },
    ],
    hoverImage: [],
    containerFlexDirection: "row",
  },
  {
    sectionTitle: "Scopri il nostro menù",
    sectionP: `I piatti tipici della cucina Pirrese, preparati con alimenti non esattamente biologici, ma di stagione.
               La paprica, spezia prediletta del fondatore, è ampiamente usata e dona un ricco gusto esotico ai piatti
               della nostra tradizione.
               Anche se i dolci, sono pagati a parte, possiamo vantarci di una freschezza mai vista prima, con gelati
               che arrivano addirittura a -40 gradi.
               Rinomata è la nostra torta caratterizzata da un impasto con ben 6 uova, freschissime, una vera sfida per i
               muovimenti intestinali.
               Vi possiamo garantire che i prezzi sono onesti, anzi, ve lo giuriamo. Davvero.`,
    buttonText: "Visita",
    buttonLink: "/menù",
    images: [
      { src: sectionImage1, alt: "Piatto di pasta", imgWidth: "270px", imgHeight: "180px" },
      { src: sectionImage2, alt: "Piatto di gamberi", imgWidth: "270px", imgHeight: "180px" },
      { src: sectionImage3, alt: "Cheescake", imgWidth: "270px", imgHeight: "180px" },
      { src: sectionImage4, alt: "FIREBALL!", imgWidth: "270px", imgHeight: "180px" },
    ],
    hoverImage: [sectionImage1, sectionImage2],
    sectionWidth: "50%",
    imageSectionWidth: "60%",
    containerFlexDirection: "row-reverse",
  },
];

export default HomeData;