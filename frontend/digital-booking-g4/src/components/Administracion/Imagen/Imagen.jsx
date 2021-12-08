import { useEffect, useState } from "react";
import DropInput from "../DropInput/DropInput";
import EstandarInput from "../EstandarInput/EstandarInput";
import styles from "./Imagen.module.css";

export default function Imagen({
  value,
  index,
  agregarImagen,
  handleAdd,
  handleDelete,
}) {
  const [imagenDetails, setImagenDetails] = useState({
    url: "",
    descripcion: "",
  });

  const [botonHabilitado, setBotonHabilitado] = useState(true);
  const [isShownError, setIsShownError] = useState(false);

  useEffect(() => {
    const botonHabilitado =
      imagenDetails.url !== "" && imagenDetails.descripcion !== "";
    setBotonHabilitado(botonHabilitado);
  }, [imagenDetails]);

  useEffect(() => {
    setIsShownError(botonHabilitado);
  }, [botonHabilitado]);

  const setUrl = (url) => {
    // validateURL();
    setImagenDetails({
      url: url,
      descripcion: imagenDetails.descripcion,
    });
  };

  const setDescripcion = (descripcion) => {
    setImagenDetails({
      url: imagenDetails.url,
      descripcion: descripcion,
    });
  };

  const handleAddImage = () => {
    // if (isURLValidImage()) {
    agregarImagen(imagenDetails);
    setBotonHabilitado(false);
    // }
  };

  // const validateURL = () => {
  //   const regex = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|png|svg))/g;
  //   setIsShownError(imagenDetails.url.match(regex));
  // };

  const handleCheck = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.fila}>
        <EstandarInput
          setOnChangeItem={setUrl}
          name="url"
          placeholder="Insertar https://"
          onBlur={handleCheck}
        />
        <DropInput
          setOnChangeItem={setDescripcion}
          name="descripcion"
          placeholder="Descripción"
          onBlur={handleCheck}
        />
        <div className={styles.containerButton}>
          {index === 0 ? (
            <div className={styles.containerBotones}>
              <button
                className={styles.add}
                disabled={!botonHabilitado}
                onClick={handleAddImage}
              >
                <i className="fas fa-check"></i>
              </button>
              <button className={styles.add} onClick={handleAdd}>
                <i className="fas fa-plus"></i>
              </button>
            </div>
          ) : (
            <div className={styles.containerBotones}>
              <button
                className={styles.add}
                disabled={!botonHabilitado}
                onClick={handleAddImage}
              >
                <i className="fas fa-check"></i>
              </button>
              <button
                className={styles.delete}
                onClick={() => handleDelete(value, imagenDetails)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          )}
        </div>
      </div>
      {!isShownError ? (
        ""
      ) : (
        <div className={styles.invalidURL}>
          <i className="fas fa-exclamation-triangle"></i>
          <p>
            Por favor, recuerde confirmar la imagen antes de crear el producto.
          </p>
        </div>
      )}
    </div>
  );
}
