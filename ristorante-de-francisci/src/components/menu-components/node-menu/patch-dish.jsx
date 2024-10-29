import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate  } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../style/theme";

function PatchDishForm() {
  const { dishId } = useParams();
  const id = parseInt(dishId);
  const navigate = useNavigate();
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

  useEffect(() => {
    const fetchDishData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/dish/${id}`
        );
        setFormData(response.data);
      } catch (err) {
        console.error("Errore durante il recupero del piatto", err);
      }
    };
    fetchDishData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "allergens"
          ? value.split(",").map((item) => item.trim())
          : type === "checkbox"
          ? checked
          : value,
    });
  };

  const handlePatchDish = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/api/dish/${id}`, formData);
      console.log("Piatto aggiornato con successo");
      navigate("/menù");
    } catch (err) {
      console.error("Errore durante l'aggiornamento del piatto", err);
    }
  };

  return (
    <>
      <form onSubmit={handlePatchDish}>
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

export default PatchDishForm;
