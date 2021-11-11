import TituloBloque from "../TituloBloque/TituloBloque";
import styles from "./ProductoCaracteristicas.module.css";

export default function ProductoCaracteristicas({ alojamiento }) {
  const { caracteristicas } = alojamiento;

  return (
    <section className={styles.ProductoCaracteristicas}>
      <TituloBloque>¿Qué ofrece este lugar? </TituloBloque>
      <hr />
      <div className={styles.caracteristicasContainer}>
        {caracteristicas.length > 0 ? (
          caracteristicas.map((caracteristica, i) => {
            return (
              <div
                key={`caracteristica-${i}`}
                className={styles.caracteristicaItem}
              >
                <div>
                  <i className={caracteristica.icono}></i>
                  <span>{caracteristica.nombre}</span>
                </div>
              </div>
            );
          })
        ) : (
          <h2 className={styles.sinResultados}>
            Este alojamiento no presenta ninguna característica. 
          </h2>
        )}
      </div>
    </section>
  );
}
