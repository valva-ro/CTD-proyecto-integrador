import { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import styles from "./Modal.module.css";

export default function ProductoModalCarousel({
  estaAbierto,
  onCloseRequest,
  colorBtnCerrar,
  colorFondo,
  children,
}) {
  const modalRef = useRef(null);
  useOnClickOutside(modalRef, onCloseRequest);

  if (!estaAbierto) return null;

  return (
    <section
      className={styles.background}
      style={{ backgroundColor: colorFondo}}
    >
      <div className={styles.modal} ref={modalRef}>
        <span
          className={styles.close}
          onClick={onCloseRequest}
          style={{ color: colorBtnCerrar }}
        >
          X
        </span>
        {children}
      </div>
    </section>
  );
}
