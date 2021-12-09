import { useEffect, useState } from "react";
import DropInput from "../DropInput/DropInput";
import EstandarInput from "../EstandarInput/EstandarInput";
import styles from "./Imagen.module.css";

export default function Imagen({
  value,
  esImagenPrincipal,
  esUltimaImagen,
  agregarImagen,
  eliminarImagen,
  subirImagen,
}) {
  const [informacionImagen, setInformacionImagen] = useState({
    url: "",
    descripcion: esImagenPrincipal ? "Principal" : "",
  });
  const [botonHabilitado, setBotonHabilitado] = useState(true);
  const [isShownError, setIsShownError] = useState(false);

  useEffect(() => {
    const botonHabilitado =
      informacionImagen.url !== "" && informacionImagen.descripcion !== "";
    setBotonHabilitado(botonHabilitado);
  }, [informacionImagen]);

  useEffect(() => {
    setIsShownError(botonHabilitado);
  }, [botonHabilitado]);

  const setUrl = (url) => {
    setInformacionImagen({
      url: url,
      descripcion: informacionImagen.descripcion,
    });
  };

  const setDescripcion = (descripcion) => {
    setInformacionImagen({
      url: informacionImagen.url,
      descripcion: descripcion,
    });
  };

  const handleSaveImage = () => {
    subirImagen(informacionImagen);
    setBotonHabilitado(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.fila}>
        <div className={styles.inputs}>
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
          <div className={styles.containerBotones}>
            <>
              <button
                className={styles.imageButton}
                disabled={!botonHabilitado}
                onClick={handleSaveImage}
              >
                <i className="fas fa-check"></i>
              </button>
              {!esImagenPrincipal ? (
                <button
                  className={`${styles.imageButton} ${styles.delete}`}
                  onClick={() => eliminarImagen(value, informacionImagen)}
                >
                  <i className="fas fa-times"></i>
                </button>
              ) : null}
            </>
          </div>
        </div>
        {!isShownError ? (
          ""
        ) : (
          <div className={styles.errorMsjContainer}>
            <i className="fas fa-exclamation-triangle"></i>
            <p>
              Por favor, recuerde confirmar la imagen antes de crear el
              producto.
            </p>
          </div>
        )}
        {esUltimaImagen ? (
          <>
            <button
              className={`${styles.imageButton} ${styles.add}`}
              onClick={agregarImagen}
            >
              <i className="fas fa-plus"></i>
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}
