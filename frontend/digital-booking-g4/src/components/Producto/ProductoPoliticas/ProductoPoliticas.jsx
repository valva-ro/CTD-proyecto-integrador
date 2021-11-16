import TituloBloque from "../../../TituloBloque/TituloBloque";
import styles from "./ProductoPoliticas.module.css";
import { useParams } from "react-router-dom";

export default function ProductoPoliticas({ alojamientos }) {
  const { id } = useParams();
  const alojamiento = alojamientos[id];

  return (
    <section className={styles.bloqueProductoPoliticas}>
      <>
        <TituloBloque>Qué tienes que saber</TituloBloque>
        <hr />

        <div className={styles.contenedorPoliticas}>
          <div className={styles.politicasTextos}>
            <h4 className={styles.subtituloSecciones}>Normas de la casa</h4>
            <div className={styles.secciones}>
              {alojamiento.policies.rules.length > 0 ? (
                alojamiento.policies.rules.map((parrafo, i) => (
                  <p key={i}>{parrafo}</p>
                ))
              ) : (
                <p>No hay reglas establecidas para este producto</p>
              )}
            </div>
          </div>
          <div className={styles.politicasTextos}>
            <h4 className={styles.subtituloSecciones}>Salud y seguridad</h4>
            <div className={styles.secciones}>
              {alojamiento.policies.safeAndHealth.length > 0 ? (
                alojamiento.policies.safeAndHealth.map((parrafo, i) => {
                  return <p key={i}>{parrafo}</p>;
                })
              ) : (
                <p>No hay normas de bioseguridad para este producto</p>
              )}
            </div>
          </div>
          <div className={styles.politicasTextos}>
            <h4 className={styles.subtituloSecciones}>
              Política de cancelación
            </h4>
            <div className={styles.secciones}>
              {alojamiento.policies.cancel.length > 0 ? (
                alojamiento.policies.cancel.map((parrafo, i) => {
                  return <p key={i}>{parrafo}</p>;
                })
              ) : (
                <p>No hay reglas de cancelación para este producto</p>
              )}
            </div>
          </div>
        </div>
      </>
    </section>
  );
}
