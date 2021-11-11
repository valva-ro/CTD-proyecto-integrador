import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductoHeader from "../ProductoHeader/ProductoHeader";
import ProductoImagenes from "../ProductoImagenes/ProductoImagenes.jsx";
import ProductoFechasDisponibles from "../ProductoFechasDisponibles/ProductoFechasDisponibles";
import ProductoMapa from "../ProductoMapa/ProductoMapa";
import ProductoCaracteristicas from "../ProductoCaracteristicas/ProductoCaracteristicas";
import ProductoPoliticas from "../ProductoPoliticas/ProductoPoliticas";
import ProductoDescripcion from "../ProductoDescripcion/ProductoDescripcion";
import styles from "./Producto.module.css";
import useFetch from "../../hooks/useFetch";
import alojamientosJson from "../../resources/alojamientos.json";

export default function Producto() {
  const { id } = useParams();
  const { isLoaded, items } = useFetch(`productos/${id}`);
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    if (isLoaded) {
      setProducto(items);
    }
  }, [isLoaded, items]);
  
  return (
    <>
      {isLoaded && producto !== null ? (
        <>
          <ProductoHeader alojamiento={producto} />
          <ProductoImagenes alojamiento={producto} />
          <ProductoDescripcion alojamiento={producto} />
          <ProductoCaracteristicas alojamiento={producto} />
          <ProductoFechasDisponibles />
          <ProductoMapa alojamiento={producto} />
          <ProductoPoliticas alojamientos={alojamientosJson}/>
        </>
      ) : (
        <h2 className={styles.sinResultados}>
          El alojamiento que estás buscando no existe
        </h2>
      )}
    </>
  );
}