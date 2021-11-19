import TituloBloque from "../../../TituloBloque/TituloBloque";
import styles from "./ProductoHorarioLlegada.module.css";

export default function ProductoHorarioLlegada(){
    /*TO DO: consumir horas de la base de datos*/
    const hora = 14;

    const horaFormat = (hora) => {
        if(hora > 12) {
            const h = hora-12;
            return((h < 10) ? ("0"+h+":00 PM") : (h+":00 PM"));
        }else{
            return((hora < 10) ? ("0"+hora+":00 AM") : (hora+":00 AM"));
        } 
    }

    let horasDisponibles = [];

    for (let i=hora; i <= 23; i++){
        horasDisponibles.push(i);
    }

    return(
        <>
            <TituloBloque>Tu horario de llegada</TituloBloque>
            <div className={styles.container}>
                <div className={styles.containerTexto}>
                    <span><i class="far fa-check-circle"></i></span>
                    <p>Tu habitación va a estar lista para el check-in entre las {horaFormat(hora)} y las 11:00 PM</p>
                </div>
                <div className={styles.containerSelect}>
                    <label>Indicá tu horario estimado de llegada </label>
                    <select name="horarioLlegada" className={styles.minimal} required>
                        <option value="Seleccionar hora de llegada" hidden>Seleccionar hora de llegada</option>
                        {horasDisponibles.map((h, i) => (
                            <option value={h}>{horaFormat(h)}</option>
                        ))}
                    </select>
                </div>
            </div>
        </>

    )
}