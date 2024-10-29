import { Sequelize } from "sequelize";
import ResturantDatabase from "../config/system.js"

const { DataTypes } = Sequelize;

const Dish = ResturantDatabase.define('dish', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    category: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    imgSrc: {
        type: DataTypes.STRING
    },
    imgAlt: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    },
    onlyDinner: {
        type: DataTypes.BOOLEAN
    },
    spicy: {
        type: DataTypes.INTEGER
    },
    allergens: {
        type: DataTypes.JSON,
        allowNull: true,
    },
    info: {
        type: DataTypes.STRING
    },
});

export default Dish;