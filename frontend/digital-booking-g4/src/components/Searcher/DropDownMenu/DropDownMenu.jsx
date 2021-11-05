import React from "react";
import styles from "./DropDownMenu.module.css";

export default function DropDownMenu({ locations, setCityList, input, setOnChangeCity }) {
  function setInput(input, city) {
    input.target.value = city.nombre + ", " + city.pais;
    setOnChangeCity(city.nombre);
    setCityList(null);
  }

  function validate(frase) {
    const inputNoEstaVacio = input.target.value !== "";
    const tieneSubstringDelInput = normalizarFrase(frase).includes(
      input.target.value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
    );
    return inputNoEstaVacio && tieneSubstringDelInput;
  }

  return (
    <ul className={styles.cities}>
      {locations
        .filter(
          (location) =>
            validate(location.pais) ||
            validate(location.nombre) ||
            validate(location.nombre + " " + location.pais) ||
            validate(location.pais + " " + location.nombre)
        )
        .map((location, index) => {
          return (
            <li key={index} onClick={() => setInput(input, location)}>
              <i className="fas fa-map-marker-alt"></i>
              <div className={styles.searchWords}>
                <p className={styles.city}>{location.nombre}</p>
                <p className={styles.country}>{location.pais}</p>
              </div>
            </li>
          );
        })}
    </ul>
  );
}

function normalizarFrase(frase) {
  return frase
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}