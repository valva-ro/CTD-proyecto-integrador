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
  const esImagenPrincipal = index === 0;
  const [imagenDetails, setImagenDetails] = useState({
    url: "",
    descripcion: esImagenPrincipal ? "Principal" : "",
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
    agregarImagen(imagenDetails);
    setBotonHabilitado(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.fila}>
        <EstandarInput
          setOnChangeItem={setUrl}
          name="url"
          placeholder="Insertar https://"
        />
        {esImagenPrincipal ? (
          <DropInput
            setOnChangeItem={setDescripcion}
            name="descripcion"
            value="Principal"
            disabled={true}
          />
        ) : (
          <DropInput
            setOnChangeItem={setDescripcion}
            name="descripcion"
            placeholder="Descripción"
          />
        )}
        <div className={styles.containerButton}>
          {esImagenPrincipal ? (
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
