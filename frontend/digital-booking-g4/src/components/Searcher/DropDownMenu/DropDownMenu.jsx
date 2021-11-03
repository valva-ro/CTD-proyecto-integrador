import React from "react";
import styles from "./DropDownMenu.module.css";

export default function DropDownMenu({ locations, setCityList, input }) {

  function setInput(input, city) {
    input.target.value = city.city + ", " + city.country;
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
            validate(location.country) ||
            validate(location.city) ||
            validate(location.city + " " + location.country) ||
            validate(location.country + " " + location.city)
        )
        .map((city, index) => {
          return (
            <li key={index} onClick={() => setInput(input, city)}>
              <i className="fas fa-map-marker-alt"></i>
              <div className={styles.searchWords}>
                <p className={styles.city}>{city.city}</p>
                <p className={styles.country}>{city.country}</p>
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