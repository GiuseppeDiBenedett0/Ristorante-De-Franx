import { Sequelize } from "sequelize";
import ResturantDatabase from "../config/system.js";

const { DataTypes } = Sequelize;

const Contact = ResturantDatabase.define("contact", {
  name: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  message: {
    type: DataTypes.STRING,
  },
  consent: {
    type: DataTypes.BOOLEAN
  },
});

export default Contact;
