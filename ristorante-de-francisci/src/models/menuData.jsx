import dish from "../assets/orkun-orcan-nHit7o0Viig-unsplash.jpg";

const menuData = [
  {
    category: "Antipasti",
    dishes: [
      {
        id: 1,
        name: "Piatto X",
        imageSrc: dish,
        imageAlt: "Ciao",
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
        id: 2,
        name: "Piatto Y",
        imageSrc: dish,
        imageAlt: "Ciao",
        price: "12€",
        onlyDinner: false,
        spicy: 3,
        allergens: [
          "Uovo",
          "Formaggio",
          "Paolo",
          "Uovo",
          "Formaggio",
          "Paolo",
        ],
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
      },
      {
        id: 3,
        name: "Piatto Z",
        imageSrc: dish,
        imageAlt: "Ciao",
        price: "12€",
        onlyDinner: true,
        spicy: 1,
        allergens: [
          "Uovo",
          "Formaggio",
          "Paolo",
        ],
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
      },
      {
        id: 4,
        name: "Piatto V",
        imageSrc: dish,
        imageAlt: "Ciao",
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
        id: 5,
        name: "Piatto U",
        imageSrc: dish,
        imageAlt: "Ciao",
        price: "12€",
        onlyDinner: false,
        spicy: 2,
        allergens: [
          "Uovo",
          "Formaggio",
          "Paolo",
        ],
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
        name: "Piatto 1",
        imageSrc: dish,
        imageAlt: "Ciao",
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
        name: "Piatto 2",
        imageSrc: dish,
        imageAlt: "Ciao",
        price: "12€",
        onlyDinner: true,
        spicy: 3,
        allergens: [
          "Uovo",
          "Formaggio",
          "Paolo",
        ],
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
      },
      {
        id: 8,
        name: "Piatto 3",
        imageSrc: dish,
        imageAlt: "Ciao",
        price: "12€",
        onlyDinner: true,
        spicy: 1,
        allergens: [
          "Uovo",
          "Formaggio",
          "Paolo",
        ],
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
      },
      {
        id: 9,
        name: "Piatto 4",
        imageSrc: dish,
        imageAlt: "Ciao",
        price: "12€",
        onlyDinner: true,
        spicy: 2,
        allergens: [
          "Uovo",
          "Formaggio",
          "Paolo",
        ],
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
      },
      {
        id: 10,
        name: "Piatto 5",
        imageSrc: dish,
        imageAlt: "Ciao",
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
        name: "Piatto A",
        imageSrc: dish,
        imageAlt: "Ciao",
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
        name: "Piatto B",
        imageSrc: dish,
        imageAlt: "Ciao",
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
        name: "Piatto C",
        imageSrc: dish,
        imageAlt: "Ciao",
        price: "12€",
        onlyDinner: true,
        spicy: 3,
        allergens: [
          "Uovo",
          "Formaggio",
          "Paolo",
        ],
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
      },
      {
        id: 14,
        name: "Piatto D",
        imageSrc: dish,
        imageAlt: "Ciao",
        price: "12€",
        onlyDinner: false,
        spicy: 1,
        allergens: [
          "Uovo",
          "Formaggio",
          "Paolo",
        ],
        info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tempus nibh. Nam quis turpis rhoncus turpis placerat ultrices. Vestibulum ante ipsum primis
         in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
         Nullam suscipit pellentesque libero, non ullamcorper leo gravida cursus. Nam eu auctor eros, ut volutpat mauris. Aliquam erat volutpat. 
         Vestibulum dignissim luctus arcu.
         Nam dictum eleifend eros sit amet suscipit.`,
      },
      {
        id: 15,
        name: "Piatto E",
        imageSrc: dish,
        imageAlt: "Ciao",
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
];

export default menuData;
