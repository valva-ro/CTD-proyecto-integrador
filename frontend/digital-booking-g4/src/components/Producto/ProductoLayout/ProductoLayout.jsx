import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import ProductoHeader from "./ProductoHeader/ProductoHeader";
import Loader from "../../Loader/Loader";
import styles from "./ProductoLayout.module.css";

export default function ProductoLayout(props) {
  const { id } = useParams();
  const { isLoaded, items, error } = useFetch(`productos/${id}`);
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
          <div>{React.cloneElement(props.children, producto)}</div>
        </>
      ) : error === null ? (
        <Loader />
      ) : (
        <h2 className={styles.sinResultados}>
          El alojamiento que estás buscando no existe
        </h2>
      )}
    </>
  );
}
