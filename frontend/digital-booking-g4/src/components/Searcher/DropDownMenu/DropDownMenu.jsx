import React, { useState, useEffect, useCallback } from "react";
import styles from "./DropDownMenu.module.css";

export default function DropDownMenu({
  locations,
  setCityList,
  input,
  setOnChangeCity,
  setCountry,
  existeInputCountry
}) {
  const [ulClassname, setUlclassName] = useState(null);

  useEffect(() => {
    const estilo = filtrar(locations).isFiltrated ? styles.cities : "";
    setUlclassName(estilo);
  }, [locations]);

  function filtrar(locations) {
    const filtrated = locations.filter(
      (location) =>
        validate(location.pais) ||
        validate(location.nombre) ||
        validate(location.nombre + " " + location.pais) ||
        validate(location.pais + " " + location.nombre)
    );

    const isFiltrated = filtrated.length > 0;
    return { filtrated, isFiltrated };
  }

  function setInput(input, city) {
    input.target.value = city.nombre + ", " + city.pais;
    setOnChangeCity(city.nombre);
    if(existeInputCountry) { setCountry( city.pais) } ;
    setCityList(null);
  }

  function validate(frase) {
    const inputNoEstaVacio = input.target.value !== "";
    const fraseNormalizada = normalizarFrase(frase);
    const inputNormalizado = normalizarFrase(input.target.value);
    const tieneSubstringDelInput = fraseNormalizada.includes(inputNormalizado);
    return inputNoEstaVacio && tieneSubstringDelInput;
  }

  return (
    <ul className={ulClassname}>
      {filtrar(locations).filtrated.map((city, index) => {
        return (
          <li key={index} onClick={() => setInput(input, city)}>
            <i className="fas fa-map-marker-alt"></i>
            <div className={styles.searchWords}>
              <p className={styles.city}>{city.nombre}</p>
              <p className={styles.country}>{city.pais}</p>
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
