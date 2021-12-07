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
  const [isURLValidImage, setIsURLValidImage] = useState(true);

  useEffect(() => {
    const botonHabilitado =
      imagenDetails.url !== "" && imagenDetails.descripcion !== "";
    setBotonHabilitado(botonHabilitado);
  }, [imagenDetails]);

  const setUrl = (url) => {
    validateURL();
    setImagenDetails({
      url: url,
      descripcion: imagenDetails.descripcion,
    });
  };

  const setDescripcion = (descripcion) =>
    setImagenDetails({
      url: imagenDetails.url,
      descripcion: descripcion,
    });

  const handleAddImage = () => {
    if (isURLValidImage()) {
      agregarImagen(imagenDetails);
      setBotonHabilitado(false);
    }
  };

  const validateURL = () => {
    const regex = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|png|svg))/g;
    setIsURLValidImage(imagenDetails.url.match(regex));
  };

  return (
    <div className={styles.container}>
      <div className={styles.fila}>
        <EstandarInput
          setOnChangeItem={setUrl}
          name="url"
          placeholder="Insertar https://"
        />
        <DropInput
          setOnChangeItem={setDescripcion}
          name="descripcion"
          placeholder="Descripción"
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
      {isURLValidImage ? (
        ""
      ) : (
        <div className={styles.invalidURL}>
          <i className="fas fa-exclamation-triangle"></i>
          <p>La URL ingresada no es una imagen</p>
        </div>
      )}
    </div>
  );
}
