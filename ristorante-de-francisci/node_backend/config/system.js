import { Sequelize } from "sequelize";

const ResturantDatabase = new Sequelize({
    database: "daniele-resturant",
    username: "root",
    password: "GrandeUkaUka33!",
    host: "localhost",
    port: 3306,
    dialect: "mysql",
});

export default ResturantDatabase;