import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormComponent from "./form-component";
function DishForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    imgSrc: "",
    imgAlt: "",
    price: undefined,
    onlyDinner: false,
    spicy: undefined,
    allergens: [],
    info: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    //Limita la voce spicy a un valore compreso tra 0 e 3 e la voce price a un valore non negativo.
    const limitation =
      name === "spicy"
        ? Math.max(0, Math.min(3, Number(value)))
        : name === "price"
        ? Math.max(0, Number(value))
        : value;

    setFormData({
      ...formData,
      [name]:
        name === "allergens"
          ? value.split(",").map((item) => item.trim())
          : type === "checkbox"
          ? checked
          : limitation,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/dish`, formData);
      console.log("Piatto creato con successo");
      navigate("/menù");
    } catch (err) {
      console.error(`Errore durante la creazione del piatto`, err);
    }
  };

  return (
    <>
      <FormComponent
        title={"Crea Piatto"}
        onSubmit={handleSubmit}
        onChange={handleChange}
        categoryValue={formData.category}
        nameValue={formData.name}
        imgSrcValue={formData.imgSrc}
        imgAltValue={formData.imgAlt}
        priceValue={formData.price}
        onlyDinnerValue={formData.onlyDinner}
        spicyValue={formData.spicy}
        allergensValue={formData.allergens}
        infoValue={formData.info}
      />
    </>
  );
}

export default DishForm;
