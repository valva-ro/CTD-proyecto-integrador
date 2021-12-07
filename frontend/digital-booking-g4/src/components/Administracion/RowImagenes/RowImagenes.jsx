import { useState } from "react";
import DropInput from "../DropInput/DropInput";
import EstandarInput from "../EstandarInput/EstandarInput";
import styles from "./RowImagenes.module.css";

export default function RowImagenes({
  imagenesDetails,
  handleAdd,
  handleDelete,
  agregarImagen,
}) {
 // TODO: Crear componente imagen y mover esto para allá
  const [imagenDetails, setImagenDetails] = useState({
    url: "",
    descripcion: "",
  });

  const setUrl = (url) =>
    setImagenDetails({
      url: url,
      descripcion: imagenDetails.descripcion,
    });

  const setDescripcion = (descripcion) =>
    setImagenDetails({
      url: imagenDetails.url,
      descripcion: descripcion,
    });

  return (
    <>
      {imagenesDetails.map((val, idx) => (
        <Imagen
          value={val}
          index={idx}
          agregarImagen={agregarImagen}
          handleAdd={handleAdd}
          handleDelete={handleDelete}
        />
      ))}
      {/* {imagenesDetails.map((val, idx) => {

        return (
          <div className={styles.fila}>
            <EstandarInput
              setOnChangeItem={setUrl}
              name="url"
              placeholder="Insertar https://"
              id={url}
              dataId={idx}
            />
            <DropInput
              setOnChangeItem={setDescripcion}
              name="descripcion"
              placeholder="Descripción"
              id={descripcion}
              dataId={idx}
            />
            <div className={styles.containerButton}>
              {idx === 0 ? (
                <div className={styles.containerBotones}>
                  <button
                    className={styles.add}
                    onClick={() => {
                      agregarImagen(imagenDetails);
                    }}
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
                    onClick={() => {
                      agregarImagen(imagenDetails);
                    }}
                  >
                    <i className="fas fa-check"></i>
                  </button>
                  <button
                    className={styles.delete}
                    onClick={() => handleDelete(val)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })} */}
    </>
  );
}
