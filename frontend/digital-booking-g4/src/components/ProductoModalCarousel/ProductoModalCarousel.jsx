import { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import styles from "./ProductoModalCarousel.module.css";

export default function ProductoModalCarousel({
  estaAbierto,
  onCloseRequest,
  imagenes,
}) {
  const modalRef = useRef(null);
  useOnClickOutside(modalRef, onCloseRequest);

  if (!estaAbierto) return null;

  return (
    <section className={styles.background}>
      <div className={styles.modalCarousel} ref={modalRef}>
        <span className={styles.close} onClick={onCloseRequest}>
          X
        </span>
        <Carousel
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
          {imagenes.map((imagen, i) => {
            return (
              <div className={styles.imagen} key={i}>
                <img src={imagen.src} alt={imagen.alt} />
                <p className="legend">{imagen.alt}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
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
      <i class="fas fa-chevron-left"></i>
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
      <i class="fas fa-chevron-right"></i>
    </button>
  );
};
