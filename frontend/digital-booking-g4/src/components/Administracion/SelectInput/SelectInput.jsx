import styles from "./SelectInput.module.css"

export default function SelectInput({
    label,
    name,
    handleChange,
    opcionesDisponibles,
    optionDefault,
    showOptions
}) {
    const horaFormat = (hora) => {
        if (hora > 12) {
            const h = hora - 12;
            return ((h < 10) ? ("0" + h + ":00 PM") : (h + ":00 PM"));
        } else {
            return ((hora < 10) ? ("0" + hora + ":00 AM") : (hora + ":00 AM"));
        }
    }


    return (
        <div className={styles.containerSelect}>
            <label>{label}</label>
            <select name={name} className={styles.minimal} onChange={handleChange} required>
                <option value={name} className={styles.optionDefault} hidden>{optionDefault}</option>
                {opcionesDisponibles.map((o, i) => (
                    <option value={o} key={`opcionesDisponibles-${i}`}>{showOptions? horaFormat(o) : o}</option>
                ))}
            </select>
        </div>
    )
}