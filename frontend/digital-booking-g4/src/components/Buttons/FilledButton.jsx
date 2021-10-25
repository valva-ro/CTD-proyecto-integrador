import styles from "./Buttons.module.css";

export default function FilledButton(props) {
  return (
    <input
      type="submit"
      className={`${styles.btnPleno} ${props.styles}`}
      value={props.children}
      onClick={props.onClick}
    />
  );
}
