import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import ProductoModalCarousel from "../ProductoModalCarousel/ProductoModalCarousel";
import FilledButton from "../Buttons/FilledButton";
import styles from "./ProductoImagenes.module.css";
import "./CarouselStyles.css";

export default function ProductoImagenes({ alojamiento }) {
  const [carruselEstaAbierto, setCarruselEstaAbierto] = useState(false);
  const cerrarCarousel = () => setCarruselEstaAbierto(false);
  const abrirCarousel = () => setCarruselEstaAbierto(true);

  return (
    <section className={styles.sectionImagenes}>
      <div className={styles.iconos}>
        <i className="bx bx-share-alt"></i>
        <i className="bx bx-heart"></i>
      </div>
      <div className={styles.imagenesDesktop}>
        <img
          src={alojamiento.imgs[0].src}
          alt={alojamiento.imgs[0].alt}
          className={styles.imagenPrincipal}
        />
        <div className={styles.imagenesSecundarias}>
          {alojamiento.imgs.slice(1, 5).map((imagen, i) => (
            <img src={imagen.src} alt={imagen.alt} key={i} />
          ))}
        </div>
        <FilledButton styles={styles.verMas} onClick={abrirCarousel}>
          Ver más
        </FilledButton>
        <ProductoModalCarousel
          estaAbierto={carruselEstaAbierto}
          onCloseRequest={cerrarCarousel}
          imagenes={alojamiento.imgs}
        />
      </div>
      <div className={styles.contenedorTabletMobile}>
        <div className={styles.iconos}>
          <i className="bx bx-share-alt"></i>
          <i className="bx bx-heart"></i>
        </div>
        {carruselTabletMobile(alojamiento.imgs)}
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
        <div className={styles.imagen}>
          <img src={imagen.src} alt={imagen.alt} />
        </div>
      );
    })}
  </Carousel>
);
