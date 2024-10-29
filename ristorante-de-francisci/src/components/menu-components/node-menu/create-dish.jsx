import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { theme } from "../../../style/theme";

function DishForm() {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    imgSrc: "",
    imgAlt: "",
    price: 0,
    onlyDinner: false,
    spicy: 0,
    allergens: [],
    info: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === "allergens"
        ? value.split(",").map((item) => item.trim()) // Gestisci gli allergeni come array
        : type === "checkbox"
        ? checked // Gestisci il checkbox solo a cena
        : value, // Per gli altri valori, usa direttamente il valore dell'input
    });
  };

  const handlePostDish = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/dish`, formData);
      setFormData({
        category: "",
        name: "",
        imgSrc: "",
        imgAlt: "",
        price: 0,
        onlyDinner: false,
        spicy: 0,
        allergens: [],
        info: "",
      });
    } catch (err) {
      console.error("Errore durante l'aggiunta del piatto", err);
    }
  };

  return (
    <>
      <form onSubmit={handlePostDish}>
        <div>
          <label htmlFor="category">Categoria:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="imgSrc">Immagine:</label>
          <input
            type="text"
            id="imgSrc"
            name="imgSrc"
            value={formData.imgSrc}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="imgAlt">Descrizione immagine:</label>
          <input
            type="text"
            id="imgAlt"
            name="imgAlt"
            value={formData.imgAlt}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="price">Prezzo:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="onlyDinner">Solo a cena?:</label>
          <input
            type="checkbox"
            id="onlyDinner"
            name="onlyDinner"
            checked={formData.onlyDinner}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="spicy">Piccantezza:</label>
          <input
            type="number"
            id="spicy"
            name="spicy"
            value={formData.spicy}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="allergens">Allergeni (separati da virgola):</label>
          <input
            type="text"
            id="allergens"
            name="allergens"
            value={formData.allergens.join(", ")}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="info">Informazioni piatto:</label>
          <textarea
            id="info"
            name="info"
            value={formData.info}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Invia</button>
      </form>
    </>
  );
}

export default DishForm;
