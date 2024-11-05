import Dish from "../models/dish.js";
import Contact from "../models/contact.js";

export const getDishes = async (req, res) => {
  try {
    const dish = await Dish.findAll();

    if (dish.length > 0) {
      res.send(dish);
    } else {
      res.status(404).send("Nessun piatto trovato");
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export const getDishById = async (req, res) => {
  try {
    console.log("ID ricevuto:", req.params.id);
    const dish = await Dish.findOne({ where: { id: req.params.id } });
    console.log("Piatto trovato:", dish);

    if (dish) {
      res.json(dish);
    } else {
      res.status(404).send("Piatto non trovato");
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export const postDish = async (req, res) => {
  try {
    const dish = await Dish.create(req.body);
    console.log(req.body);
    res.json({
      message: "Piatto crato",
      data: dish,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export const patchDish = async (req, res) => {
  try {
    const updates = Object.entries(req.body).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});

    const updateDish = await Dish.update(updates, {
      where: { id: req.params.id },
    });

    res.json({
      message: "Piatto aggiornato",
      data: updateDish,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export const deleteDish = async (req, res) => {
  try {
    await Dish.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Piatto eliminato",
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.findAll();

    if (contacts.length > 0) {
      res.send(contacts);
    } else {
      res.status(404).send("Nessun contatto trovato");
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export const postContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    console.log(req.body);
    res.json({
      message: "Contatto crato",
      data: contact,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};