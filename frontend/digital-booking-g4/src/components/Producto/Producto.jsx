import { useParams } from "react-router-dom";
import ProductoHeader from "../ProductoHeader/ProductoHeader";
import ProductoImagenes from "../ProductoImagenes/ProductoImagenes.jsx";
import ProductoDescripcion from "../ProductoDescripcion/ProductoDescripcion.jsx";
import ProductoCaracteristicas from "../ProductoCaracteristicas/ProductoCaracteristicas.jsx";
import ProductoFechasDisponibles from "../ProductoFechasDisponibles/ProductoFechasDisponibles.jsx";
import ProductoPoliticas from "../ProductoPoliticas/ProductoPoliticas.jsx";
import styles from "./Producto.module.css";
import alojamientos from "../../resources/alojamientos.json";

export default function Producto() {
  // Para obtener el ID de la url
  const { id } = useParams();
  // TODO: cambiar esto por el GET a la API
  const obtenerAlojamiento = () => {
    if (id <= alojamientos.length) return alojamientos[id - 1];
  };
  return (
    <>
      {id >= alojamientos.length + 1 ? (
        <h2 className={styles.sinResultados}>
          El alojamiento que estás buscando no existe
        </h2>
      ) : (
        <>
          <ProductoHeader alojamiento={obtenerAlojamiento()} />
          <ProductoImagenes alojamiento={obtenerAlojamiento()} />
          <ProductoDescripcion alojamiento={obtenerAlojamiento()} />
          <ProductoCaracteristicas alojamiento={obtenerAlojamiento()} />
          <ProductoFechasDisponibles />
          <ProductoPoliticas alojamiento={obtenerAlojamiento()} />
        </>
      )}
    </>
  );
}
