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
    console.log(data);
  setDatos(data.items) 
 if (data.isLoaded) {
      setDatos(data.items)
    }else{
      console.log("error al cargar las categorias de la base de datos code"+data.error);
      err.BloqueCategoriaserr[0].descripcion+=data.error
      setDatos(err.BloqueCategoriaserr)
    }
 

  })
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
}