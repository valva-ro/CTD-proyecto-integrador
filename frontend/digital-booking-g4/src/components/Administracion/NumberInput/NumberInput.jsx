import styles from "./NumberInput.module.css";

export default function NumberInput({
  label,
  name,
  onChangeItem,
  setOnChangeItem,
}) {
  return (
    <div className={styles.containerNumberInput}>
      <label className={styles.labelNumberInput}>{label}</label>
      <input
        type="number"
        className={`${styles.numberInput}`}
        onChange={(e) => {
          setOnChangeItem(e.target.value);
        }}
        value={onChangeItem}
        step="any"
        name={name}
      />
    </div>
  );
}
