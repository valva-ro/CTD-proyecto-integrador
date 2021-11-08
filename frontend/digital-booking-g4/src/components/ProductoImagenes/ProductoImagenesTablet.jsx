import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./ProductoImagenes.module.css";
import "./CarouselStyles.css";

export default function ProductoImagenesTablet({ imagenes }) {
  return (
    <>
      <div className={styles.iconos}>
        <i className="bx bx-share-alt"></i>
        <i className="bx bx-heart"></i>
      </div>
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
    </>
  );
}
