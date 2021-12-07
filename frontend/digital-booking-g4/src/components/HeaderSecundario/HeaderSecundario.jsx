import { useHistory } from "react-router-dom";
import TituloBloque from "../TituloBloque/TituloBloque";
import styles from "./HeaderSecundario.module.css";

export default function HeaderSecundario(props){
    const history = useHistory();

    return(
        <div className={styles.contenedorHeader}>
            <div className={styles.headerIzquierda}>
                <div className={styles.a} onClick={history.goBack}>
                    <span>
                    <i className="fas fa-chevron-left" aria-hidden="true"></i>
                    </span>
                    <span>ATRÁS</span>
                </div>
            </div>
            <div className={styles.headerDerecha}>
                <TituloBloque styles={styles.favTitle}>{props.children}</TituloBloque>
            </div>
        </div>
    )
}