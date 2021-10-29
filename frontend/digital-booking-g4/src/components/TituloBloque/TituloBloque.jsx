import styles from './TituloBloque.module.css';

export default function TituloBloque(props) {
    return (
        <h3 className={styles.subtituloBloque}>{props.children}</h3>
    )
}
