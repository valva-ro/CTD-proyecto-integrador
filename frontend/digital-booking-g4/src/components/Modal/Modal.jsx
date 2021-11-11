import { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import styles from "./Modal.module.css";

export default function ProductoModalCarousel({
  estaAbierto,
  onCloseRequest,
  children,
}) {
  const modalRef = useRef(null);
  useOnClickOutside(modalRef, onCloseRequest);

  if (!estaAbierto) return null;

  return (
    <section className={styles.background}>
      <div className={styles.modal} ref={modalRef}>
        <span className={styles.close} onClick={onCloseRequest}>
          X
        </span>
        {children}
      </div>
    </section>
  );
}
