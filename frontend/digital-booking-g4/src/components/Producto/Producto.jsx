import { useParams } from "react-router-dom";
import ProductoHeader from "../ProductoHeader/ProductoHeader";
import ProductoImagenes from "../ProductoImagenes/ProductoImagenes.jsx";
import ProductoFechasDisponibles from "../ProductoFechasDisponibles/ProductoFechasDisponibles";
import ProductoMapa from "../ProductoMapa/ProductoMapa";
import styles from "./Producto.module.css";
import alojamientos from "../../resources/alojamientos.json";
import useFetch from "../../hooks/useFetch";

export default function Producto() {
  const { id } = useParams();
  const { isLoaded, items } = useFetch(`productos/${id}`);
  // Para obtener el ID de la url
  console.log("ID: "+id);
  console.log("ISLoaded: "+isLoaded);
  console.log("Items: "+items);
  // TODO: cambiar esto por el GET a la API
  const obtenerAlojamiento = () => {
    if (id < alojamientos.length+1) return alojamientos[id - 1];
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
          <ProductoFechasDisponibles />
          <ProductoMapa alojamiento={obtenerAlojamiento()} />
        </>
      )}
    </>
  );
}
