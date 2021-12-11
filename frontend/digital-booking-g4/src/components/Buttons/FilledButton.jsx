import styles from "./Buttons.module.css";

export default function FilledButton({
  title,
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
        className={`${styles.filledButton} ${foreignStyles}`}
        value={children}
        onClick={onClick}
        data-testid={testId}
        disabled={disabled}
      />
    </span>
  );
}
