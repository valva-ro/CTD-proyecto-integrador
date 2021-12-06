import { useEffect } from "react";
import DropInput from "../DropInput/DropInput"
import EstandarInput from "../EstandarInput/EstandarInput";
import styles from "./RowImagenes.module.css"

export default function RowImagenes({
    imagenesDetails,
    handleAdd,
    handleDelete,
    setRecord,
}) {
    return (
        <>
        {imagenesDetails.map((val, idx) => {
            let url= `url- ${idx}`;
            let descripcion= `descripcion-${idx}`;
            /* setRecord(val); */

            return(
                <div className={styles.fila}>
                    <EstandarInput
                        /* onChangeItem={propertyName}
                        setOnChangeItem={setPropertyName} */
                        name="url"
                        placeholder="Insertar https://"
                        id={url}
                        dataId={idx}
                    />
                    <DropInput
                        /* setOnChangeItem={setDescripcionImagen}
                        onChangeItem={descripcionImagen} */
                        name="descripcion"
                        placeholder="Descripción"
                        id={descripcion}
                        dataId={idx}
                    />
                    <div className={styles.containerButton}>
                        {idx === 0 ? (
                        <button className={styles.add} onClick={handleAdd}><i className="fas fa-plus"></i></button>
                        ):(
                        <button className={styles.delete} onClick={() => handleDelete(val)} ><i className="fas fa-times"></i></button>
                        )}
                    </div>
                </div>
            )
        })}
        </>
    ) 
}