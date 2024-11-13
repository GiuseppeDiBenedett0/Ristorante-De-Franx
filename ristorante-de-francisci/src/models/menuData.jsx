import dish from "../assets/orkun-orcan-nHit7o0Viig-unsplash.jpg";
import lobster from "../assets/monika-borys-kx9X93QbDBY-unsplash.jpg";
import TagliereMisto from "../assets/vlad-melnikov-8e_HY5Lh8Ec-unsplash.jpg";
import Cozze from "../assets/christopher-carson-Ba2tmqEZiFk-unsplash.jpg";
import Parmigiana from "../assets/jack-shingai-uHYOKEosqmk-unsplash.jpg";
import Bruschette from "../assets/konstantinas-ladauskas-UClE2VFapSg-unsplash.jpg";
import MistFiner from "../assets/maxresdefault .jpg";
import Pasta from "../assets/tadahiro-higuchi-EbzKT7CtoPE-unsplash.jpg";
import Lasagna from "../assets/emanuel-ekstrom-flEUTTwGlJQ-unsplash.jpg";
import Ravioli from "../assets/toa-heftiba-vqTkZZ1JtOU-unsplash.jpg";
import PastaSgombro from "../assets/clark-douglas-k8FXgsDTm8g-unsplash.jpg";
import Insalata from "../assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg";
import Gamberi from "../assets/lampos-aritonang-1piilkxsqLM-unsplash.jpg";
import PolloFritto from "../assets/gabe-pierce-qcLlJvBK3eI-unsplash.jpg";
import Manzo from "../assets/jason-leung-O67LZfeyYBk-unsplash.jpg";
import Cheescake from "../assets/fotografia-de-alimentos-4aYZxBN_29Q-unsplash.jpg";
import Gelato from "../assets/american-heritage-chocolate-PWwKJLHzekk-unsplash.jpg";
import Muffin from "../assets/agustin-ljosmyndun-9YClZQXXZPQ-unsplash.jpg";
import Coca from "../assets/sachin-mittal-eZtXS4vlo5s-unsplash.jpg";
import Limonata from "../assets/francesca-hotchin-p5EiqkBYIEE-unsplash.jpg";
import Vino from "../assets/mockup-free-6tXofHh6-QU-unsplash.jpg";
import FireBall from "../assets/deeliver-RCkipqwhoFc-unsplash.jpg";
import w from "../assets/agustin-ljosmyndun-9YClZQXXZPQ-unsplash.jpg";


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
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
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
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
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
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
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
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
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
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
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
        price: "12€",
        onlyDinner: false,
        spicy: 3,
        allergens: [],
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
      },
      {
        id: 7,
        name: "Lasagna",
        imageSrc: Lasagna,
        imageAlt: "Lasagna",
        price: "12€",
        onlyDinner: true,
        spicy: 3,
        allergens: ["Uovo", "Formaggio", "Paolo"],
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
      },
      {
        id: 8,
        name: "Pizza De Francisci",
        imageSrc: dish,
        imageAlt: "Ciao",
        price: "12€",
        onlyDinner: true,
        spicy: 1,
        allergens: ["Uovo", "Formaggio", "Paolo"],
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
      },
      {
        id: 9,
        name: "Ravioli",
        imageSrc: Ravioli,
        imageAlt: "Ravioli",
        price: "12€",
        onlyDinner: true,
        spicy: 2,
        allergens: ["Uovo", "Formaggio", "Paolo"],
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
      },
      {
        id: 10,
        name: "Pasta Marea",
        imageSrc: PastaSgombro,
        imageAlt: "PastaSgombro",
        price: "12€",
        onlyDinner: false,
        spicy: 1,
        allergens: [],
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
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
        price: "12€",
        onlyDinner: false,
        spicy: 2,
        allergens: [],
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
      },
      {
        id: 12,
        name: "Gamberi special",
        imageSrc: Gamberi,
        imageAlt: "Gamberi",
        price: "12€",
        onlyDinner: true,
        spicy: 2,
        allergens: [],
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
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
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
      },
      {
        id: 14,
        name: "Pollo fritto",
        imageSrc: PolloFritto,
        imageAlt: "PolloFritto",
        price: "12€",
        onlyDinner: false,
        spicy: 1,
        allergens: ["Uovo", "Formaggio", "Paolo"],
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
      },
      {
        id: 15,
        name: "Manzone",
        imageSrc: Manzo,
        imageAlt: "Manzo",
        price: "12€",
        onlyDinner: true,
        spicy: 1,
        allergens: [],
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
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
        price: "12€",
        onlyDinner: false,
        spicy: 2,
        allergens: [],
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
      },
      {
        id: 17,
        name: "Straciattella",
        imageSrc: Gelato,
        imageAlt: "Gelato",
        price: "12€",
        onlyDinner: true,
        spicy: 2,
        allergens: [],
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
      },
      {
        id: 18,
        name: "Broly",
        imageSrc: lobster,
        imageAlt: "Lobster",
        price: "???",
        onlyDinner: true,
        spicy: 0,
        allergens: [],
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
      },
      {
        id: 19,
        name: "Muffin",
        imageSrc: Muffin,
        imageAlt: "Muffin",
        price: "12€",
        onlyDinner: false,
        spicy: 1,
        allergens: ["Uovo", "Formaggio", "Paolo"],
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
      },
    ],
  },
  {
    category: "Bibite",
    dishes: [
      {
        id: 20,
        name: "Coca Cola",
        imageSrc: Coca,
        imageAlt: "Coca",
        price: "12€",
        onlyDinner: false,
        spicy: 2,
        allergens: [],
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
      },
      {
        id: 21,
        name: "Limonata",
        imageSrc: Limonata,
        imageAlt: "Limonata",
        price: "12€",
        onlyDinner: true,
        spicy: 2,
        allergens: [],
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
      },
      {
        id: 22,
        name: "Vino buono",
        imageSrc: Vino,
        imageAlt: "Vino",
        price: "???",
        onlyDinner: true,
        spicy: 0,
        allergens: [],
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
      },
      {
        id: 22,
        name: "FireBall",
        imageSrc: FireBall,
        imageAlt: "FireBall",
        price: "12€",
        onlyDinner: false,
        spicy: 1,
        allergens: ["Uovo", "Formaggio", "Paolo"],
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
      },
      {
        id: 23,
        name: "Shrekdeniels",
        imageSrc: dish,
        imageAlt: "Ciao",
        price: "12€",
        onlyDinner: false,
        spicy: 1,
        allergens: ["Uovo", "Formaggio", "Paolo"],
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
      },
    ],
  },
];

export default menuData;
