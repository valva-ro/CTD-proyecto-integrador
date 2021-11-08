import { useState } from "react";
import ProductoModalCarousel from "../ProductoModalCarousel/ProductoModalCarousel";
import styles from "./ProductoImagenes.module.css";

export default function ProductoImagenesDesktop({ imagenes }) {
  const [estaCarouselAbierto, setEstaCarouselAbierto] = useState(false);
  const cerrarCarousel = () => setEstaCarouselAbierto(false);
  const abrirCarousel = () => setEstaCarouselAbierto(true);

  return (
    <>
      <div className={styles.iconos}>
        <i className="bx bx-share-alt"></i>
        <i className="bx bx-heart"></i>
      </div>
      <div className={styles.imagenes}>
        <img
          src={imagenes[0].src}
          alt={imagenes[0].alt}
          className={styles.imagenPrincipal}
        />
        <div className={styles.imagenesSecundarias}>
          {imagenes.slice(1, 5).map((imagen, i) => (
            <img src={imagen.src} alt={imagen.alt} key={i} />
          ))}
        </div>
        <span className={styles.verMas} onClick={abrirCarousel}>
          Ver más
        </span>
        <ProductoModalCarousel
          estaAbierto={estaCarouselAbierto}
          onCloseRequest={cerrarCarousel}
          imagenes={imagenes}
        />
      </div>
    </>
  );
}
