import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import FormComponent from "./form-component";

function PatchDishForm() {
  //Estrae l'ID del piatto dalla URL tramite useParams per caricare i dati del piatto specifico.
  const { dishId } = useParams();
  const id = parseInt(dishId);

  //Usa useNavigate per reindirizzare l'utente alla pagina del menù dopo l'aggiornamento.
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

   //Carica i dati del piatto dall'API all'avvio del componente o quando l'ID cambia.
   //I dati caricati vengono utilizzati per precompilare il modulo.
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
      <FormComponent
        title={"Crea Piatto"}
        onSubmit={handlePatchDish}
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

export default PatchDishForm;
