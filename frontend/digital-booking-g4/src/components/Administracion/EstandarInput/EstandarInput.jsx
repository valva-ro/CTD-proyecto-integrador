import styles from "./EstandarInput.module.css";

export default function EstandarInput({
    label,
    name,
    onChangeItem,
    setOnChangeItem,
    placeholder,
}) {
    return (
        <div className={styles.containerEstandarInput}>
            <label className={styles.labelEstandarInput}>{label}</label>
            <div className={styles.sombraConAutocompletado} >
                <input
                    type="text"
                    className={`${styles.estandarInput}`}
                    onChange={(e) => {
                        setOnChangeItem(e.target.value)
                    }}
                    value={onChangeItem}
                    name={name}
                    placeholder={placeholder}
                    required
                />
            </div>
        </div>
    )
}
