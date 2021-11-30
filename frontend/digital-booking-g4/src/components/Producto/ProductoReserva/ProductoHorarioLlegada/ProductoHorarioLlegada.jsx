import { useState, useEffect } from "react";
import TituloBloque from "../../../TituloBloque/TituloBloque";
import styles from "./ProductoHorarioLlegada.module.css";

export default function ProductoHorarioLlegada({alojamiento: {horarioCheckIn}, setHorarioLlegada}){
    const [hora, setHora] = useState(null);

    const horaFormat = (hora) => {
        if(hora > 12) {
            const h = hora-12;
            return((h < 10) ? ("0"+h+":00 PM") : (h+":00 PM"));
        }else{
            return((hora < 10) ? ("0"+hora+":00 AM") : (hora+":00 AM"));
        } 
    }

    let horasDisponibles = [];

    for (let i=horarioCheckIn; i <= 23; i++){
        horasDisponibles.push(i);
    }

    useEffect(() => {
        setHorarioLlegada(hora)
    }, [hora]);

    const handleChange = e => setHora(e.target.value)

      
    return(
        <>
            <TituloBloque>Tu horario de llegada</TituloBloque>
            <div className={styles.container}>
                <div className={styles.containerTexto}>
                    <span><i className="far fa-check-circle"></i></span>
                    <p>Tu habitación va a estar lista para el check-in entre las {horaFormat(horarioCheckIn)} y las 11:00 PM</p>
                </div>
                <div className={styles.containerSelect}>
                    <label>Indicá tu horario estimado de llegada </label>
                    <select name="horarioLlegada" className={styles.minimal} onChange={handleChange} required>
                        <option value="Seleccionar hora de llegada" hidden>Seleccionar hora de llegada</option>
                        {horasDisponibles.map((h, i) => (
                            <option value={h} key={`horaDisponible-${i}`}>{horaFormat(h)}</option>
                        ))}
                    </select>
                </div>
            </div>
        </>

    )
}