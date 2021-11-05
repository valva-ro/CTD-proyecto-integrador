import { Link } from "react-router-dom";
import styles from "./ProductHeader.module.css";

export default function ProductHeader() {
    return (
        <div className={styles.contenedorHeader}>
            <div className={styles.headerIzquierda}>
                <p>Hotel</p>
                <p>Hermitage Hotel</p>
            </div>
            <div className={styles.headerDerecha}>
                <Link to="/" ><span><i class="fas fa-chevron-left"></i></span></Link>
            </div>

        </div>
    );
}