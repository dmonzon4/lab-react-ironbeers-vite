import React, { useState } from "react";
import axios from "axios";

export default function AddBeerPage() {
  const [beerData, setBeerData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBeerData({
      ...beerData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        beerData
      );
      console.log("Beer added successfully:", response.data);
      // Aquí puedes redirigir al usuario a una página de éxito o realizar otra acción
    } catch (error) {
      console.error("Error adding beer:", error);
      // Manejo de errores, mostrar mensaje al usuario, etc.
    }
  };

  return (
    <div>
      <div style={{ margin: "20px" }}>
        <h2 style={{ marginBottom: "20px" }}>Add a New Beer</h2>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "300px",
          }}
        >
          <div style={{ marginBottom: "15px" }}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={beerData.name}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Tagline:</label>
            <input
              type="text"
              name="tagline"
              value={beerData.tagline}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Description:</label>
            <textarea
              name="description"
              value={beerData.description}
              onChange={handleChange}
            />
          </div>
          {/* ... Otros campos de formulario aquí ... */}
          <div>
            <button
              type="submit"
              style={{
                padding: "10px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
              }}
            >
              Add Beer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
