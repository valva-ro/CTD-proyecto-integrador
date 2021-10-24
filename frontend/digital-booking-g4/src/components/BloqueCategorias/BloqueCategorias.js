import TituloBloque from '../TituloBloqueCategorias/TituloBloque';
import Tarjetas from '../TarjetasCategorias/Tarjetas';
import datos from '../../datosCategorias.json';

import styles from './BloqueCategorias.module.css';

export default function BloqueCategorias(){
  return (
    <section className={styles.bloqueCategorias}>
      <TituloBloque />
      <div className={styles.listadoTarjetas}>            
      {
        datos.map((dato)=> 
          <Tarjetas fotoPortada={dato.fotoPortada} nombre={dato.nombre} descripcion={dato.descripcion}/>
        )  
      }
      </div>
    </section>)
}