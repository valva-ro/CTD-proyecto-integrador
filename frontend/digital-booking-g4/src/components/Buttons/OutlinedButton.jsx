import styles from "./Buttons.module.css";

export default function OutlinedButton({
  title = "",
  onClick,
  testId,
  disabled,
  children,
  styles: foreignStyles,
}) {
  return (
    <span
      className={title !== "" && disabled ? `${styles.tooltip}` : ""}
      alt={title}
    >
      <input
        type="submit"
        className={`${styles.outlinedButton} ${foreignStyles}`}
        value={children}
        onClick={onClick}
        data-testid={testId}
        disabled={disabled}
      />
    </span>
  );
}
