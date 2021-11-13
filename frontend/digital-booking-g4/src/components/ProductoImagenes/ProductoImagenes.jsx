import { useState, useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import ProductoModalCarousel from "../ProductoModalCarousel/ProductoModalCarousel";
import FilledButton from "../Buttons/FilledButton";
import styles from "./ProductoImagenes.module.css";
import "./CarouselStyles.css";
import loggedContext from "../../contexts/loggedContext";

export default function ProductoImagenes({ alojamiento: { imagenes } }) {
  const [carruselEstaAbierto, setCarruselEstaAbierto] = useState(false);
  const { isLogged } = useContext(loggedContext);
  const [isFavorito, setIsFavorito] = useState(false);
  const cerrarCarousel = () => setCarruselEstaAbierto(false);
  const abrirCarousel = () => setCarruselEstaAbierto(true);
  const handleFav = () => setIsFavorito(!isFavorito);
  
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
        {isLogged ? (
          isFavorito ? (
            <i onClick={() => handleFav()} className={`fas fa-heart`}></i>
          ) : (
            <i onClick={() => handleFav()} className={`far fa-heart`}></i>
          )
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
            .map((imagen) => (
              <div
                className={styles.imagenSecundaria}
                style={{
                  backgroundImage: `url(${imagen.imagenUrl})`,
                }}
                key={imagen.id}
              ></div>
            ))}
        </div>
        <FilledButton styles={styles.verMas} onClick={abrirCarousel}>
          Ver más
        </FilledButton>
        <ProductoModalCarousel
          estaAbierto={carruselEstaAbierto}
          onCloseRequest={cerrarCarousel}
          imagenes={imagenesOrdenadas()}
        />
      </div>
      <div className={styles.contenedorTabletMobile}>
        <div className={styles.iconos}>
          <i className="bx bx-share-alt"></i>
          <i className="bx bx-heart"></i>
        </div>
        {carruselTabletMobile(imagenesOrdenadas())}
      </div>
    </section>
  );
}

const carruselTabletMobile = (imagenes) => (
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
    {imagenes.map((imagen) => {
      return (
        <div key={`imagen-${imagen.id}`} className={styles.imagen}>
          <img src={imagen.imagenUrl} alt={imagen.imagenTitulo} />
        </div>
      );
    })}
  </Carousel>
);
