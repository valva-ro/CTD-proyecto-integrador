import styles from "./Buttons.module.css";

export default function OutlinedButton(props) {
  return (
    <input
      type="submit"
      className={`${styles.btnEnLinea} ${props.styles}`}
      value={props.children}
      onClick={props.onClick}
    />
  );
}
