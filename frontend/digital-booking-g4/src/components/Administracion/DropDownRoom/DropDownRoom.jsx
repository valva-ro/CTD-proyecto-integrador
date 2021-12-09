import React, { useState, useEffect } from "react";
import styles from "./DropDownRoom.module.css";

export default function DropDownRoom({
  rooms,
  input,
  setList,
  setOnChangeItem,
}) {
  const [ulClassname, setUlclassName] = useState(null);

  useEffect(() => {
    const estilo = filtrar(rooms).isFiltrated ? styles.rooms : "";
    setUlclassName(estilo);
  }, [rooms]);

  function filtrar(rooms) {
    const filtrated = rooms.filter(
      (rooms) =>
        validate(rooms) 
    );

    const isFiltrated = filtrated.length > 0;
    return { filtrated, isFiltrated };
  }

  function setInput(input, room) {
    input.target.value = room;
    setOnChangeItem(room);
    setList(null);
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
      {filtrar(rooms).filtrated.map((room, index) => {
        return (
          <li key={index} onClick={() => setInput(input, room)}>
            <div className={styles.searchWords}>
              <p className={styles.room}>{room}</p>
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
