import Estrellas from "../../../Estrellas/Estrellas";
import FilledButton from "../../../Buttons/FilledButton";
import calcularPromedioPuntuacion from "../../../../utils/calcularPromedioPuntuacion";
import styles from "./Detalles.module.css";

export default function ProductoReserva({ 
  alojamiento:{
    nombre,
    categoria,
    direccion,
    ciudad,
    imagenes,
    puntuaciones
  }, 
  checkin, 
  checkout 
}) {
  
  const puntaje = calcularPromedioPuntuacion(puntuaciones);
  const buscarImagenPrincipal = () => {
    let imagen = imagenes.find((imagen) => {
      return imagen.imagenTitulo === "Principal";
    });
    if (imagen == null) {
      imagen = imagenes[0];
    }
    return imagen;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.tituloTarjeta}>Detalle de la reserva</h2>
      <div className={styles.infContainer}>
        <div
          className={styles.img}
          style={{
            backgroundImage: `url(${buscarImagenPrincipal().imagenUrl})`,
          }}
        ></div>

        <div className={styles.letterContainer}>
          <p className={styles.categoria}>{categoria.titulo.toUpperCase()}</p>
          <p className={styles.titulo}>{nombre}</p>
          <Estrellas puntaje={puntaje} />
          <div className={styles.direccion}>
            <i className="fas fa-map-marker-alt"></i>
            <p>
              {direccion}, {ciudad.nombre}, {ciudad.pais}
            </p>
          </div>
          <hr />
          <div className={styles.fecha}>
            <p>Check in</p>
            <p>
              {checkin == null
                ? "__/ __/ __"
                : new Date(checkin).toLocaleDateString()}
            </p>
          </div>
          <hr />
          <div className={styles.fecha}>
            <p>Check out</p>
            <p>
              {checkout == null
                ? "__/ __/ __"
                : new Date(checkout).toLocaleDateString()}
            </p>
          </div>
          <hr />
          <div className={styles.buttonContainer}>
            <FilledButton>Confirmar reserva</FilledButton>
          </div>
        </div>
      </div>
    </div>
  );
}
