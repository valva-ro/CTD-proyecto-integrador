import TituloBloque from './components/BloqueCategorias/TituloBloque';
import Tarjetas from './components/BloqueCategorias/Tarjetas';
import datos from './datosCategorias.json';

import styles from './components/BloqueCategorias/BloqueCategorias.module.css';

export default function BloqueCategorias(){
  return (
    <div className={styles.bloqueCategorias}>
      <TituloBloque />
      <div className={styles.listadoTarjetas}>            
      {
        datos.map((dato)=> 
          <Tarjetas fotoPortada={dato.fotoPortada} nombre={dato.nombre} descripcion={dato.descripcion}/>
        )  
      }
      </div>
    </div>)
}