import styles from "./Buttons.module.css";

export default function OutlinedButton(props) {
  return (
    <input
      type="submit"
      className={`${styles.outlinedButton} ${props.styles}`}
      value={props.children}
      onClick={props.onClick}
      data-testid={props.testId}
      disabled={props.disabled}
      title={props.title}
    />
  );
}
