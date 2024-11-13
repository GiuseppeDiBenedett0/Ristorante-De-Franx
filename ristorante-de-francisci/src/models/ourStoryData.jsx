import owner from "../assets/owner.jpeg";
import resturant from "../assets/jason-leung-poI7DelFiVA-unsplash.jpg";
import johnnyModello from "../assets/johnny-di-daniele.jpg";

const OurStorydata = [
  {
    sectionTitle: "Il nostro locale",
    containerMarginTop: "16px",
    containerFlexDirection: "unset",
    firstitle: "La storia di Pirri",
    description: `Quella che una volta era una landa desolata, nei recenti anni ha subito enormi trasformazioni
                  e arricchimenti, geologici e culturali.
                  Dopo che il nostro fondatore tornò dalla sua spedizione nelle sperdute montagne del Madagascar,
                  decise di rimettere in piedi la sua terra natia, facendo investimenti in borsa e in autostrade.
                  Ciò ha permesso lo sviluppo di nuovi sistemi di difesa per l'amata Pirri, che ha acquisito
                  uno splendore mai avuto prima.`,
    secondTitle: "Qui non ci sono evasori fiscali",
    secondDescription: `Siamo un'attività onesta e trasparente, uno specchio d'acqua proprio.
                        Non metteremo mai in atto comportamenti che mettano in dubbio la nostra ferrea etica
                        professionale.
                        Il pos non funziona. Accettiamo solo contanti.
                        La nostra sostenibilità e impronta verde è pressochè inesistente. Preferiamo usare pesticidi
                        tradizionali nelle nostre cucine.`,
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
    description: `Daniele De Francisci, nato a Pirri alla fine degli anni 30, ha combattuto durante la seconda
                  guerra mondiale, nonostante la tenera età.
                  Forgiato da questa esperienza tragica e strappalacrime, una volta cresciuto decide di dedicare la
                  sua vita alla realizzazione del suo sogno.
                  Durante gli scontri a fuoco, perse l'uso della gamba sinistra. Povero lui.`,
    secondTitle: "Il mio sogno",
    secondDescription: `Dopo aver abbandonato la modellazione 3D, Daniele prese le redini dell'attività di famiglia.
                        Con l'obbiettivo di condividere con i suoi concittadini le meraviglie della cucina e del gusto,
                        ha rimesso in piedi una zona di degrado sociale solo con le sue forze.
                        Ancora oggi, però, utilizza la mistica arte della modellazione per dare vita a piatti nuovi ed 
                        eccentrici, e per creare il suo stesso arredo! `,
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
