import TituloBloque from "../../../TituloBloque/TituloBloque";
import styles from "./ProductoPoliticas.module.css";

const NORMAS_CASA = "Normas de la casa";
const SALUD_SEGURIDAD = "Salud y seguridad";
const CANCELACION = "Política de cancelación";

export default function ProductoPoliticas({ alojamiento }) {
  const politicasNormasCasa = filtrarPoliticasPorTipo(NORMAS_CASA);
  const politicasSaludSeguridad = filtrarPoliticasPorTipo(SALUD_SEGURIDAD);
  const politicasCancelacion = filtrarPoliticasPorTipo(CANCELACION);

  function filtrarPoliticasPorTipo(tipo) {
    const politicasSinFiltrar = alojamiento.politicas;
    return politicasSinFiltrar.filter((p) => p.tipoPolitica.nombre === tipo);
  }

  return (
    <section className={styles.bloqueProductoPoliticas}>
      <TituloBloque>Qué tienes que saber</TituloBloque>
      <hr />
      <div className={styles.contenedorPoliticas}>
        <div className={styles.politicasTextos}>
          <h4 className={styles.subtituloSecciones}>{NORMAS_CASA}</h4>
          <div className={styles.secciones}>
            {politicasNormasCasa.length > 0 ? (
              politicasNormasCasa.map((politica) => (
                <p key={politica.id}>{politica.nombre}</p>
              ))
            ) : (
              <p>No hay reglas establecidas para este producto</p>
            )}
          </div>
        </div>
        <div className={styles.politicasTextos}>
          <h4 className={styles.subtituloSecciones}>{SALUD_SEGURIDAD}</h4>
          <div className={styles.secciones}>
            {politicasSaludSeguridad.length > 0 ? (
              politicasSaludSeguridad.map((politica) => (
                <p key={politica.id}>{politica.nombre}</p>
              ))
            ) : (
              <p>No hay normas de bioseguridad para este producto</p>
            )}
          </div>
        </div>
        <div className={styles.politicasTextos}>
          <h4 className={styles.subtituloSecciones}>{CANCELACION}</h4>
          <div className={styles.secciones}>
            {politicasCancelacion.length > 0 ? (
              politicasCancelacion.map((politica) => (
                <p key={politica.id}>{politica.nombre}</p>
              ))
            ) : (
              <p>No hay reglas de cancelación para este producto</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
