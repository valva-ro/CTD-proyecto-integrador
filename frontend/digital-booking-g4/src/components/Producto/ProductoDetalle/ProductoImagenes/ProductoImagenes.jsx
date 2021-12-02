import { useState, useEffect, useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SimpleShareButtons } from "react-simple-share";
import Modal from "../../../Modal/Modal";
import FilledButton from "../../../Buttons/FilledButton";
import styles from "./ProductoImagenes.module.css";
import "./CarouselStyles.css";
import loggedContext from "../../../../contexts/loggedContext";
import useFetch from "../../../../hooks/useFetch";
import backUrl from "../../../../resources/backUrl";

export default function ProductoImagenes({ alojamiento }) {
  const [carruselEstaAbierto, setCarruselEstaAbierto] = useState(false);
  const [redesSocialesEstaAbierto, setRedesSocialesEstaAbierto] =
    useState(false);
  const cerrarCarousel = () => setCarruselEstaAbierto(false);
  const cerrarRedesSociales = () => setRedesSocialesEstaAbierto(false);
  const abrirCarousel = () => setCarruselEstaAbierto(true);
  const abrirRedesSociales = () => setRedesSocialesEstaAbierto(true);
  const { imagenes } = alojamiento;
  const idUsuario = parseInt(localStorage.getItem("id"));
  const [isFavorito, setIsFavorito] = useState();
  const { isLogged } = useContext(loggedContext);
  const [favoritos, setFavoritos] = useState([]);
  const { isLoaded, items } = useFetch(`usuarios/${idUsuario}`);

  useEffect(() => {
    if (isLogged && isLoaded) {
      setFavoritos(items.productosFavoritos);
      setIsFavorito(
        favoritos.find((fav) => fav.id === alojamiento.id) !== undefined
      );
    }
  }, [isLoaded, isLogged, items, favoritos]);

  async function fetchFav(accion) {
    await fetch(
      `${backUrl()}productos/${alojamiento.id}/${accion}/usuarios/${idUsuario}`,
      {
        method: "PUT",
      }
    );
  }

  const handleFav = () => {
    if (!isFavorito) {
      fetchFav("agregar");
    } else {
      fetchFav("eliminar");
    }
    setIsFavorito(!isFavorito);
  };

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

  const LinksRedesSociales = () => (
    <SimpleShareButtons
      whitelist={[
        "Facebook",
        "Twitter",
        "Tumblr",
        "Reddit",
        "Pinterest",
        "LinkedIn",
        "Google+",
      ]}
      size="50px"
      margin="10px"
    />
  );

  return (
    <section className={styles.sectionImagenes}>
      <div className={styles.iconos}>
        <i className="bx bx-share-alt" onClick={abrirRedesSociales}></i>
        {isLogged ? (
          isLoaded ? (
            isFavorito ? (
              <i
                onClick={() => handleFav()}
                className={`fas fa-heart ${styles.corazon}`}
              ></i>
            ) : (
              <i
                onClick={() => handleFav()}
                className={`far fa-heart ${styles.corazon}`}
              ></i>
            )
          ) : null
        ) : null}
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
          <i className="bx bx-share-alt" onClick={abrirRedesSociales}></i>
          <i className="bx bx-heart"></i>
        </div>
        {CarruselTabletMobile(imagenesOrdenadas())}
      </div>
      <Modal
        estaAbierto={redesSocialesEstaAbierto}
        onCloseRequest={cerrarRedesSociales}
        colorBtnCerrar="#383b58"
        colorFondo="#383b5853"
      >
        <div className={styles.modalRedesSociales}>
          <h2 className={styles.textoRedesSociales}>
            Compartí el alojamiento en tu red social favorita!
          </h2>
          {LinksRedesSociales()}
        </div>
      </Modal>
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
