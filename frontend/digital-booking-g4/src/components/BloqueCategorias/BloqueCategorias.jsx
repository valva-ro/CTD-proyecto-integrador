import TituloBloque from '../TituloBloque/TituloBloque';
import TarjetaCategoria from "../TarjetaCategoria/TarjetaCategoria.jsx";
import datos from '../../resources/datosCategorias.json';

import styles from './BloqueCategorias.module.css';

export default function BloqueCategorias(){
  return (
    <section className={styles.bloqueCategorias}>
      <TituloBloque>Buscar por tipo de alojamiento</TituloBloque>
      <div className={styles.listadoTarjetas}>            
      {
        datos.map((dato)=> 
          <TarjetaCategoria fotoPortada={dato.fotoPortada} nombre={dato.nombre} descripcion={dato.descripcion}/>
        )  
      }
      </div>
    </section>)
}