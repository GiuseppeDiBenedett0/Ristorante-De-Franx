import dish from "../assets/orkun-orcan-nHit7o0Viig-unsplash.jpg";
import lobster from "../assets/monika-borys-kx9X93QbDBY-unsplash.jpg";
import TagliereMisto from "../assets/vlad-melnikov-8e_HY5Lh8Ec-unsplash.jpg";
import Cozze from "../assets/christopher-carson-Ba2tmqEZiFk-unsplash.jpg";
import Parmigiana from "../assets/jack-shingai-uHYOKEosqmk-unsplash.jpg";
import Bruschette from "../assets/konstantinas-ladauskas-UClE2VFapSg-unsplash.jpg";
import MistFiner from "../assets/mistFiner.png";
import Pasta from "../assets/tadahiro-higuchi-EbzKT7CtoPE-unsplash.jpg";
import Lasagna from "../assets/emanuel-ekstrom-flEUTTwGlJQ-unsplash.jpg";
import Ravioli from "../assets/toa-heftiba-vqTkZZ1JtOU-unsplash.jpg";
import Pizza from "../assets/pizzaDeFranx.png";
import PastaSgombro from "../assets/clark-douglas-k8FXgsDTm8g-unsplash.jpg";
import Insalata from "../assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg";
import Gamberi from "../assets/lampos-aritonang-1piilkxsqLM-unsplash.jpg";
import PolloFritto from "../assets/gabe-pierce-qcLlJvBK3eI-unsplash.jpg";
import Manzo from "../assets/jason-leung-O67LZfeyYBk-unsplash.jpg";
import Cheescake from "../assets/fotografia-de-alimentos-4aYZxBN_29Q-unsplash.jpg";
import Broly from "../assets/brolyAllaFragola.png";
import Gelato from "../assets/american-heritage-chocolate-PWwKJLHzekk-unsplash.jpg";
import Muffin from "../assets/agustin-ljosmyndun-9YClZQXXZPQ-unsplash.jpg";
import Coca from "../assets/sachin-mittal-eZtXS4vlo5s-unsplash.jpg";
import Limonata from "../assets/francesca-hotchin-p5EiqkBYIEE-unsplash.jpg";
import Vino from "../assets/mockup-free-6tXofHh6-QU-unsplash.jpg";
import FireBall from "../assets/deeliver-RCkipqwhoFc-unsplash.jpg";
import ShrekDaniels from "../assets/ShrekDeniels.png";

const menuData = [
  {
    category: "Antipasti",
    dishes: [
      {
        id: 1,
        name: "Tagliere misto",
        imageSrc: TagliereMisto,
        imageAlt: "Tagliere misto",
        price: "27€",
        onlyDinner: false,
        spicy: 0,
        allergens: [],
        info: `Un'ampia selezione di salumi e formaggi locali, accompagnati da confetture artigianali e fragranti crostini. 
               Il nostro tagliere misto è perfetto per essere condiviso, 
               ideale per aprire il pasto con sapori autentici e tradizionali. Ogni ingrediente è scelto con cura per offrire un'esperienza unica e gustosa.
               Disponibile sia a pranzo che a cena, questo piatto rappresenta un viaggio tra le eccellenze del territorio.
               Una proposta che unisce qualità e tradizione per i veri amanti della cucina genuina.`,
      },
      {
        id: 2,
        name: "Cozze",
        imageSrc: Cozze,
        imageAlt: "Cozze",
        price: "52€",
        onlyDinner: false,
        spicy: 0,
        allergens: ["Mollusco", "Pesce", "Mare", "Acqua"],
        info: `Freschissime cozze selezionate, cucinate con un delicato soffritto di aglio e prezzemolo, sfumate con vino bianco per esaltarne il sapore naturale. 
               Servite con croccanti crostini di pane per accompagnare il gustoso sughetto, sono un piatto perfetto per gli amanti dei sapori di mare. 
               Ideali per un pasto leggero ma ricco di gusto, le nostre cozze rappresentano l'autentica tradizione culinaria mediterranea.
               Un'opzione irresistibile per chi cerca freschezza e semplicità sulla tavola.`,
      },
      {
        id: 3,
        name: "Parmigiana",
        imageSrc: Parmigiana,
        imageAlt: "Parmigiana",
        price: "0.5€",
        onlyDinner: true,
        spicy: 1,
        allergens: ["Paprica", "Formaggio", "Melanzane"],
        info: `La nostra parmigiana è un capolavoro di sapori tradizionali: strati di melanzane fritte, salsa di pomodoro fatta in casa e una generosa spolverata di formaggi locali, 
               il tutto cotto al forno fino a ottenere una doratura perfetta. Ogni boccone racconta la storia di una ricetta autentica e intramontabile, amata da generazioni. 
               Ideale per una cena ricca di gusto, questa versione della parmigiana saprà conquistarti con la sua semplicità e intensità. 
               Perfetta per chi cerca un'esperienza culinaria autentica e genuina.`,
      },
      {
        id: 4,
        name: "MistFiner",
        imageSrc: MistFiner,
        imageAlt: "MistFiner",
        price: "200€",
        onlyDinner: false,
        spicy: 3,
        allergens: [],
        info: `Un piatto esclusivo e unico, il MistFiner combina ingredienti di alta qualità con una preparazione innovativa. Una sinfonia di sapori intensi e contrastanti, 
               pensata per i palati più esigenti. La presentazione elegante e il gusto deciso lo rendono una scelta perfetta per chi cerca un'esperienza gastronomica indimenticabile. 
               Perfetto per una cena speciale, questo piatto celebra l'arte culinaria con un tocco di creatività.`,
      },
      {
        id: 5,
        name: "Bruschette",
        imageSrc: Bruschette,
        imageAlt: "Bruschette",
        price: "48€",
        onlyDinner: false,
        spicy: 0,
        allergens: [],
        info: `Le nostre bruschette sono un omaggio alla semplicità e ai sapori genuini: crostini di pane artigianale tostato, 
               conditi con una selezione di ingredienti freschi e di stagione. Dal classico pomodoro e basilico all'originale abbinamento di formaggi e confetture,
               ogni bruschetta è preparata con cura per esaltare il gusto naturale di ogni elemento. 
               Ideali come antipasto o per accompagnare un buon calice di vino, sono perfette per iniziare il pasto con leggerezza e sapore.`,
      },
    ],
  },
  {
    category: "Primi",
    dishes: [
      {
        id: 6,
        name: "Pasta al sugo",
        imageSrc: Pasta,
        imageAlt: "Pasta",
        price: "1€",
        onlyDinner: false,
        spicy: 0,
        allergens: [],
        info: `Un piatto semplice ma sempre apprezzato: la nostra pasta al sugo è preparata con pasta fresca di alta qualità e una salsa di pomodoro fatta in casa, 
               arricchita con un tocco di basilico fresco e un filo d'olio extravergine d'oliva. Un grande classico che esalta i sapori genuini della cucina italiana, 
               perfetto per chi cerca un pasto leggero ma ricco di gusto. Ideale in ogni occasione, la pasta al sugo è l’essenza della tradizione mediterranea.`,
 
      },
      {
        id: 7,
        name: "Lasagna",
        imageSrc: Lasagna,
        imageAlt: "Lasagna",
        price: "2€",
        onlyDinner: true,
        spicy: 0,
        allergens: ["Uovo", "Formaggio", "Pasta", "Sugo","Altro"],
        info: `Un classico intramontabile della cucina italiana: la nostra lasagna è preparata con sfoglie di pasta fresca, un ricco ragù di carne, 
               besciamella vellutata e una generosa spolverata di formaggio gratinato. Ogni strato è un’esplosione di sapori che si fondono armoniosamente, 
               offrendo un’esperienza culinaria autentica e confortante. 
               Perfetta per chi desidera un piatto sostanzioso e ricco di tradizione, la nostra lasagna è una scelta che sa di casa.`,
      },
      {
        id: 8,
        name: "Pizza De Francisci",
        imageSrc: Pizza,
        imageAlt: "Pizza De Francisci",
        price: "3€",
        onlyDinner: true,
        spicy: 3,
        allergens: ["Ogni", "Singolo", "Ingrediente", "Vi", "Farà", "Male"],
        info: `La Pizza De Francisci è una creazione unica che unisce tradizione e innovazione. Una base croccante e soffice al tempo stesso, guarnita con ingredienti selezionati: 
               pomodoro San Marzano, mozzarella di bufala DOP, prosciutto crudo stagionato e un tocco finale di rucola fresca e scaglie di parmigiano. 
               Ogni morso racconta una storia di sapori equilibrati e ricercati, perfetta per chi cerca una pizza che sappia stupire con eleganza e semplicità.`,

      },
      {
        id: 9,
        name: "Ravioli",
        imageSrc: Ravioli,
        imageAlt: "Ravioli",
        price: "4€",
        onlyDinner: false,
        spicy: 0,
        allergens: ["Rah", "Violi", ";)"],
        info: `I nostri ravioli fatti in casa sono un vero piacere per il palato: pasta fresca e sottile, ripiena di ingredienti selezionati, come ricotta cremosa e spinaci freschi. 
               Ogni raviolo è preparato con cura per offrire una consistenza perfetta e un sapore delicato. Accompagnati da una salsa leggera al burro e salvia, 
               sono un piatto che celebra la tradizione italiana con un tocco di eleganza. Perfetti per chi cerca un piatto ricco ma equilibrato, che risveglia i sensi ad ogni morso.`,

      },
      {
        id: 10,
        name: "Pasta Marea",
        imageSrc: PastaSgombro,
        imageAlt: "PastaSgombro",
        price: "5€",
        onlyDinner: false,
        spicy: 1,
        allergens: [],
        info: `La Pasta Marea è un'esplosione di sapori di mare, un piatto che celebra la freschezza del pesce con un tocco di eleganza. 
               Preparata con una selezione di frutti di mare freschissimi, come gamberi, vongole e calamari, la pasta è condita con un sugo ricco e saporito, 
               arricchito da un filo di olio extravergine d'oliva e un pizzico di peperoncino per dare carattere. 
               Perfetta per chi ama il pesce e desidera un piatto ricco di freschezza e sapori autentici del mare.`,

      },
    ],
  },
  {
    category: "Secondi",
    dishes: [
      {
        id: 11,
        name: "Insalatona",
        imageSrc: Insalata,
        imageAlt: "Insalata",
        price: "55€",
        onlyDinner: false,
        spicy: 2,
        allergens: [],
        info: `L'Insalatona è una fresca e colorata combinazione di ingredienti freschissimi e nutrienti. 
               Una base di insalata mista, arricchita con pomodori succosi, cetrioli croccanti, carote grattugiate e olive nere. 
               Aggiungiamo anche una selezione di formaggi, come mozzarella e feta, per un tocco cremoso, insieme a noci croccanti e un condimento 
               leggero all'olio extravergine d'oliva. Un piatto equilibrato, perfetto per chi cerca una scelta leggera ma ricca di sapori freschi e salutari.`,

      },
      {
        id: 12,
        name: "Gamberi special",
        imageSrc: Gamberi,
        imageAlt: "Gamberi",
        price: "5€",
        onlyDinner: true,
        spicy: 0,
        allergens: ["Verde", "Rosso", "Arancione"],
        info: `I Gamberi Special sono un piatto raffinato che unisce la dolcezza dei gamberi freschissimi a un mix di sapori avvolgenti. 
               I gamberi sono cucinati con aglio, olio extravergine d'oliva e un tocco di peperoncino, creando un equilibrio perfetto tra delicatezza
               e un leggero pizzico di piccantezza. Serviti con una spruzzata di limone fresco e accompagnati da un contorno di verdure grigliate, 
               i Gamberi Special sono un piatto irresistibile per chi ama il mare e la cucina gourmet.`,

      },
      {
        id: 13,
        name: "Lobster",
        imageSrc: lobster,
        imageAlt: "Lobster",
        price: "???",
        onlyDinner: true,
        spicy: 0,
        allergens: [],
        info: `Abbiate molta paura.`,
      },
      {
        id: 14,
        name: "Pollo fritto",
        imageSrc: PolloFritto,
        imageAlt: "PolloFritto",
        price: "129€",
        onlyDinner: false,
        spicy: 1,
        allergens: [],
        info: `Il Pollo Fritto è un piatto croccante e succoso che non delude mai. Ogni pezzo di pollo è accuratamente marinato, quindi fritto alla perfezione per ottenere
               una panatura dorata e croccante, mentre l'interno resta tenero e succulento. Accompagnato da una salsa delicata o piccante a scelta, è il comfort food ideale 
               per chi cerca un piatto ricco di sapore e soddisfazione, perfetto per una cena informale o come piatto principale in ogni occasione.`,

      },
      {
        id: 15,
        name: "Manzone",
        imageSrc: Manzo,
        imageAlt: "Manzo",
        price: "160€",
        onlyDinner: false,
        spicy: 0,
        allergens: [],
        info: `Il Manzone è un piatto ricco e succulento che celebra la tradizione gastronomica. Preparato con carne di manzo di alta qualità, 
               cotta lentamente per garantire tenerezza e sapore, viene servito con un contorno di verdure fresche e una salsa intensa che ne esalta ogni morso. 
               Il piatto è perfetto per chi cerca una pietanza saporita e sostanziosa, ideale per un pranzo o una cena che risveglia i sensi e soddisfa anche i palati più esigenti.`,

      },
    ],
  },
  {
    category: "Dolci",
    dishes: [
      {
        id: 16,
        name: "Cheescake",
        imageSrc: Cheescake,
        imageAlt: "Cheescake",
        price: "14€",
        onlyDinner: false,
        spicy: 0,
        allergens: ["Formaggio", "Torta", "Marte", "Altro?"],
        info: `La Cheesecake è un dolce irresistibile con una base di biscotto croccante e una morbida crema al formaggio, arricchita da un tocco di vaniglia. 
               La sua consistenza vellutata si fonde perfettamente con la freschezza di una coulis di frutti di bosco o una delicata salsa al caramello. 
               Ogni morso è un'esplosione di dolcezza che conquisterà i palati di chi ama i dolci ricchi ma equilibrati. Perfetta come dessert per ogni occasione speciale.`,

      },
      {
        id: 17,
        name: "Straciattella",
        imageSrc: Gelato,
        imageAlt: "Gelato",
        price: "333€",
        onlyDinner: false,
        spicy: 0,
        allergens: ["CIOCCOLATO?!"],
        info: `La Straciatella è un dessert fresco e goloso, ideale per chi cerca un'esperienza di gusto delicata e cremosa. Preparato con panna fresca e un mix 
               di cioccolato fondente tritato, questo dolce offre un perfetto equilibrio tra la morbidezza della crema e la croccantezza del cioccolato. 
               Perfetta come fine pasto, la Straciatella è un piacere semplice e irresistibile.`,

      },
      {
        id: 18,
        name: "Broly alla fragola",
        imageSrc: Broly,
        imageAlt: "Broly",
        price: "9000€",
        onlyDinner: true,
        spicy: 3,
        allergens: ["Goku base", "Goku ssj 1", "Goku ssj 2", "Goku ssj 3", "Goku ssj 4", "Goku ssj god", "Goku ssj god ssj", "Goku Ultra Istinto", "Goku Zombie"],
        info: `Il Broly alla Fragola è un dessert fresco e fruttato che unisce la dolcezza delle fragole mature a una base cremosa e vellutata. 
               Il contrasto tra la cremosità della mousse e la freschezza delle fragole fresche crea un equilibrio perfetto, mentre una leggera salsa di fragola al caramello 
               aggiunge un tocco di golosità in più. Un dolce ideale per chi cerca un'esperienza rinfrescante e al contempo indulgente, perfetto per concludere 
               un pasto in modo delizioso.`,

      },
      {
        id: 19,
        name: "Muffin",
        imageSrc: Muffin,
        imageAlt: "Muffin",
        price: "120€",
        onlyDinner: false,
        spicy: 0,
        allergens: ["Uovo", "Formaggio", "Paolo"],
        info: `Il Muffin è un dolce soffice e fragrante, perfetto per ogni momento della giornata. Realizzato con ingredienti freschi, come farina, burro e uova, 
               ogni morso è ricco di sapore e consistenza leggera. Arricchito con gocce di cioccolato, frutti di bosco o noci, il muffin è una delizia che si sposa
               perfettamente con una tazza di tè o caffè. Perfetto per una pausa dolce o come spuntino, è sempre una scelta golosa e irresistibile.`,

      },
    ],
  },
  {
    category: "Bevande",
    dishes: [
      {
        id: 20,
        name: "Coca Cola",
        imageSrc: Coca,
        imageAlt: "Coca",
        price: "1€",
        onlyDinner: false,
        spicy: 0,
        allergens: [],
        info: `La Coca-Cola è una bevanda iconica e rinfrescante, dal gusto unico e inconfondibile. Con la sua dolcezza equilibrata e il tocco leggermente frizzante, 
               è perfetta per accompagnare ogni pasto o come pausa rigenerante durante la giornata. Servita fredda, offre un'esperienza di freschezza che si 
               sposa con ogni occasione, diventando la bevanda ideale per chi cerca una bevanda vivace e ricca di energia.`,

      },
      {
        id: 21,
        name: "Limonata",
        imageSrc: Limonata,
        imageAlt: "Limonata",
        price: "12€",
        onlyDinner: false,
        spicy: 0,
        allergens: [],
        info: `La Limonata è una bevanda fresca e dissetante, preparata con succo di limone naturale, zucchero e acqua, che regala un perfetto equilibrio tra dolcezza e acidità. 
               Ideale per rinfrescarsi durante le calde giornate estive o per accompagnare un pasto leggero, la limonata offre una sensazione di freschezza e vitalità. 
               Servita ghiacciata, è la scelta perfetta per chi cerca una bevanda leggera e piacevole al palato.`,

      },
      {
        id: 22,
        name: "Vino buono",
        imageSrc: Vino,
        imageAlt: "Vino",
        price: "2.2€",
        onlyDinner: true,
        spicy: 0,
        allergens: [],
        info: `Il Vino Buono è una selezione raffinata che incarna la passione e la tradizione vitivinicola. Con un bouquet di aromi ricchi e complessi, ogni sorso 
               offre un equilibrio perfetto tra freschezza, tannini morbidi e una leggera nota fruttata. Perfetto per accompagnare piatti prelibati o per essere gustato da solo, 
               questo vino è la scelta ideale per chi cerca una bevanda di qualità, capace di esaltare ogni occasione speciale con eleganza e gusto.`,

      },
      {
        id: 22,
        name: "FireBall",
        imageSrc: FireBall,
        imageAlt: "FireBall",
        price: "60€",
        onlyDinner: false,
        spicy: 2,
        allergens: [],
        info: `Fireball è una bevanda alcolica dal carattere deciso, un whisky speziato con una nota di cannella piccante che avvolge il palato. Il suo gusto dolce e piccante 
               lo rende perfetto per chi cerca un'esperienza intensa e coinvolgente. Ideale per essere gustato liscio, con ghiaccio o come ingrediente per cocktail originali, 
               Fireball è una scelta audace per chi desidera un tocco di calore e vivacità nelle sue serate.`,

      },
      {
        id: 23,
        name: "Shrek Daniels",
        imageSrc: ShrekDaniels,
        imageAlt: "Shrek Daniels",
        price: "50€",
        onlyDinner: true,
        spicy: 0,
        allergens: ["L'orco", "Si", "è", "Innamorato", "Della", "Principessa?", "AHAHAHAHAH"],
        info: `Shrek Daniels è un cocktail unico che combina la robustezza del whisky con un tocco di agrumi e una leggera nota dolce. Questa bevanda dal colore verde brillante
               prende ispirazione dal celebre personaggio Shrek, offrendo una miscela audace ma sorprendentemente equilibrata. Perfetto per chi ama cocktail creativi e 
               dal sapore inconfondibile, Shrek Daniels è un'ottima scelta per animare la serata con un drink originale e pieno di carattere.`,

      },
    ],
  },
];

export default menuData;
