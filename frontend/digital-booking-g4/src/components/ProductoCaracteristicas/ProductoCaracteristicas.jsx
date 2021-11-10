import TituloBloque from "../TituloBloque/TituloBloque";
import styles from "./ProductoCaracteristicas.module.css";
import useScreenWidth from "../../hooks/useScreenWidth";

export default function ProductoCaracteristicas() {

    return (
        <section className={styles.ProductoCaracteristicas}>
            <TituloBloque>¿Qué ofrece este lugar? </TituloBloque>
        </section>
    );
}