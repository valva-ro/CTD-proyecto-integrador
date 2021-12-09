import { Label } from "../../Forms/formElements"
import styles from "./TextAreaInput.module.css"

export default function TextAreaInput({
    label,
    name,
    placeholder,
    onChangeItem,
    setOnChangeItem
}) {
    return (
        <div className={styles.containerTextArea}>
            <label>{label}</label>
            <textarea
                name={name}
                id={name}
                cols="30"
                rows="6"
                value={onChangeItem}
                onChange={(e) => setOnChangeItem(e.target.value)}
                placeholder={placeholder}
            ></textarea>
        </div>
    )
}