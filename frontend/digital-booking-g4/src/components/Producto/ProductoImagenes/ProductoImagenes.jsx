import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "../../Modal/Modal";
import FilledButton from "../../Buttons/FilledButton";
import styles from "./ProductoImagenes.module.css";
import "./CarouselStyles.css";

export default function ProductoImagenes({ alojamiento }) {
  const [carruselEstaAbierto, setCarruselEstaAbierto] = useState(false);
  const cerrarCarousel = () => setCarruselEstaAbierto(false);
  const abrirCarousel = () => setCarruselEstaAbierto(true);
  const { imagenes } = alojamiento;

  const obtenerImagenPrincipal = () => {
    return imagenes.find((imagen) => {
      return imagen.imagenTitulo === "Principal";
    });
  };

  const obtenerImagenesSecundarias = () => {
    return imagenes.filter((img) => img.imagenTitulo !== "Principal");
  };

  const imagenesOrdenadas = () => {
    return [obtenerImagenPrincipal(), ...obtenerImagenesSecundarias()];
  };

  return (
    <section className={styles.sectionImagenes}>
      <div className={styles.iconos}>
        <i className="bx bx-share-alt"></i>
        <i className="bx bx-heart"></i>
      </div>
      <div className={styles.imagenesDesktop}>
        <div
          className={styles.imagenPrincipal}
          style={{
            backgroundImage: `url(${obtenerImagenPrincipal().imagenUrl})`,
          }}
        ></div>
        <div className={styles.imagenesSecundarias}>
          {obtenerImagenesSecundarias()
            .slice(0, 4)
            .map((imagen, i) => (
              <div
                className={styles.imagenSecundaria}
                style={{
                  backgroundImage: `url(${imagen.imagenUrl})`,
                }}
                key={i}
              ></div>
            ))}
        </div>
        <FilledButton styles={styles.verMas} onClick={abrirCarousel}>
          Ver más
        </FilledButton>
        <Modal
          estaAbierto={carruselEstaAbierto}
          onCloseRequest={cerrarCarousel}
        >
          {CarruselDesktop(imagenesOrdenadas())}
        </Modal>
      </div>
      <div className={styles.contenedorTabletMobile}>
        <div className={styles.iconos}>
          <i className="bx bx-share-alt"></i>
          <i className="bx bx-heart"></i>
        </div>
        {CarruselTabletMobile(imagenesOrdenadas())}
      </div>
    </section>
  );
}

const CarruselDesktop = (imagenes) => (
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
    {imagenes.map((imagen, i) => {
      return (
        <div className={styles.imagen} key={i}>
          <img src={imagen.imagenUrl} alt={imagen.imagenTitulo} />
          <p className="legend">{imagen.imagenTitulo}</p>
        </div>
      );
    })}
  </Carousel>
);

const CarruselTabletMobile = (imagenes) => (
  <Carousel
    infiniteLoop={true}
    dynamicHeight={true}
    showArrows={false}
    showStatus={true}
    interval={3000}
    useKeyboardArrows={true}
    showThumbs={false}
    stopOnHover={true}
    autoPlay={true}
    swipeable={true}
    transitionTime={750}
  >
    {imagenes.map((imagen, i) => {
      return (
        <div key={`imagen-${i}`} className={styles.imagen}>
          <img src={imagen.imagenUrl} alt={imagen.imagenTitulo} />
        </div>
      );
    })}
  </Carousel>
);

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
