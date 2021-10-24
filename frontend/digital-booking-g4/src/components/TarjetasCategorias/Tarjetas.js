import styles from './Tarjetas.module.css';

export default function Tarjetas(props) {
    return (
        <div className={styles.tarjeta}>
            <img className={styles.fotoPortada} src={props.fotoPortada} alt="fondo de portada"></img>
            <div className={styles.contenidoTarjeta}>
                <h2 className={styles.hotel}>{props.nombre}</h2>
                <p className={styles.descripcion}>{props.descripcion}</p>
            </div>
        </div>
    )
}