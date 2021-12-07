import { useEffect, useState } from "react";
import DropInput from "../DropInput/DropInput";
import EstandarInput from "../EstandarInput/EstandarInput";
import styles from "./Imagen.module.css";

export default function Imagen({
    value,
    index,
    agregarImagen,
    handleAdd,
    handleDelete
}) {
    const [imagenDetails, setImagenDetails] = useState({
        url: "",
        descripcion: "",
    });

    const[ botonHabilitado, setBotonHabilitado]=useState(true);

    useEffect(() =>{
        const botonHabilitado = imagenDetails.url !== "" && imagenDetails.descripcion !== "";
        setBotonHabilitado(botonHabilitado);
    }, [imagenDetails])

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
                  onClick={() => {
                    agregarImagen(imagenDetails);
                    setBotonHabilitado(false)
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
                  disabled={!botonHabilitado}
                  onClick={() => {
                    agregarImagen(imagenDetails);
                    setBotonHabilitado(false)
                  }}
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
    );
}