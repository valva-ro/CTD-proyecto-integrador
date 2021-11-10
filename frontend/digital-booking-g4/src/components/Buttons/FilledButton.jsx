import styles from "./Buttons.module.css";

export default function FilledButton(props) {
  return (
    <input
      type="submit"
      className={`${styles.filledButton} ${props.styles}`}
      value={props.children}
      onClick={props.onClick}
      data-testid={props.testId}
    />
  );
}
