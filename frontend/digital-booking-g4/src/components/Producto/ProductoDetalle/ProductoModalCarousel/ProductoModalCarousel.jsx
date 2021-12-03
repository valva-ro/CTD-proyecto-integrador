import { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "../../../Modal/Modal";
import styles from "./ProductoModalCarousel.module.css";

export default function ProductoModalCarousel({
  estaAbierto,
  onCloseRequest,
  imagenes,
}) {
  const modalRef = useRef(null);

  if (!estaAbierto) return null;

  return (
    <section className={styles.background}>
      <Modal estaAbierto={estaAbierto} onCloseRequest={onCloseRequest}>
        <Carousel
          infiniteLoop={true}
          dynamicHeight={true}
          showArrows={true}
          showStatus={false}
          useKeyboardArrows={true}
          stopOnHover={true}
          autoPlay={true}
          swipeable={true}
          transitionTime={750}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && PreviousArrow(onClickHandler, label)
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && NextArrow(onClickHandler, label)
          }
        >
          {imagenes.map((imagen) => {
            return (
              <div className={styles.imagen} key={imagen.id}>
                <img src={imagen.imagenUrl} alt={imagen.imagenTitulo} />
                <p className="legend">{imagen.imagenTitulo}</p>
              </div>
            );
          })}
        </Carousel>
      </Modal>
    </section>
  );
}

const PreviousArrow = (onClickHandler, label) => {
  return (
    <button
      value="<"
      type="button"
      onClick={onClickHandler}
      title={label}
      className={styles.previousArrow}
    >
      <i className="fas fa-chevron-left"></i>
    </button>
  );
};

const NextArrow = (onClickHandler, label) => {
  return (
    <button
      type="button"
      onClick={onClickHandler}
      title={label}
      className={styles.nextArrow}
    >
      <i className="fas fa-chevron-right"></i>
    </button>
  );
};
