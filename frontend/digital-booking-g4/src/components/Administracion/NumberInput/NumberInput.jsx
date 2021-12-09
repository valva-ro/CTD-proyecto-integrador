import { useEffect } from "react";
import styles from "./NumberInput.module.css";

export default function NumberInput({
  label,
  name,
  onChangeItem,
  setOnChangeItem,
  value,
  showValue = false,
}) {
  const inputDeshabilitado = () => {
    setOnChangeItem(value);
    return (
      <input
        type="number"
        className={`${styles.numberInput}`}
        value={value}
        step="any"
        name={name}
        disabled={showValue}
      />
    );
  };

  return (
    <div className={styles.containerNumberInput}>
      <label className={styles.labelNumberInput}>{label}</label>
      {showValue ? (
        inputDeshabilitado()
      ) : (
        <input
          type="number"
          className={`${styles.numberInput}`}
          onChange={(e) => {
            setOnChangeItem(e.target.value);
          }}
          step="any"
          name={name}
        />
      )}
    </div>
  );
}
