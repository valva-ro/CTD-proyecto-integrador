import TituloBloque from "../TituloBloque/TituloBloque.jsx";
import TarjetaCategoria from "./TarjetaCategoria/TarjetaCategoria.jsx";
import useFetch from "../../hooks/useFetch.js";
import styles from './BloqueCategorias.module.css';
import { useEffect, useState } from "react";
import err from "../../resources/err.json"

export default function BloqueCategorias() {

  const [datos, setDatos] = useState([])
  const data = useFetch("categorias")



  useEffect(() => {

    setDatos(data.items)
    if (data.isLoaded) {
      setDatos(data.items)
    } 

  })
  if (data.isLoaded) {
    return (
      <section className={styles.bloqueCategorias}>
        <TituloBloque>Buscar por tipo de alojamiento</TituloBloque>
        <div className={styles.listadoTarjetas}>
          {
            datos.map((dato, i) =>
              <TarjetaCategoria key={`categoria-${i}`} fotoPortada={dato.urlImagen} nombre={dato.titulo} descripcion={dato.descripcion} />
            )
          }
        </div>
      </section>)
  } else {
    return (
      <h2 className={styles.sinResultados}>Error al cargar las categorias</h2>

    )
  }

}