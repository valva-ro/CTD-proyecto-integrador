import React, { useState, useEffect } from "react";
import styles from "./DropDownMenu.module.css";

export default function DropDownMenu({
  locations,
  setCityList,
  input,
  setOnChangeCity,
}) {
  const [ulClassname, setUlclassName] = useState(null);

  function filt(locations) {
    const filtrated = locations.filter(
      (location) =>
        validate(location.country) ||
        validate(location.city) ||
        validate(location.city + " " + location.country) ||
        validate(location.country + " " + location.city)
    );

    const isFiltrated = filtrated.length > 0;
    return { filtrated, isFiltrated };
  }

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
  useEffect(() => {
    filt(locations).isFiltrated
      ? setUlclassName(styles.cities)
      : setUlclassName(null);
  }, [input.target.value.split("").length]);

  return (
    <ul className={ulClassname}>
      {filt(locations).filtrated.map((city, index) => {
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
