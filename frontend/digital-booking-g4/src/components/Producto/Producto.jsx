import { useHistory, useParams } from "react-router-dom";
import ProductoHeader from "../ProductoHeader/ProductoHeader";
import ProductoImagenes from "../ProductoImagenes/ProductoImagenes.jsx";
import styles from "./Producto.module.css";
import alojamientos from "../../resources/alojamientos.json";

export default function Producto() {
  // Para obtener el ID de la url
  const { id } = useParams();
  // TODO: cambiar esto por el GET a la API
  const obtenerAlojamiento = () => {
    return alojamientos[id - 1];
  };
  return (
    <>
      <ProductoHeader alojamiento={obtenerAlojamiento()} />
      <ProductoImagenes alojamiento={obtenerAlojamiento()} />
    </>
  );
}
