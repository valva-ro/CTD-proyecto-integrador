import ProductoHeader from "../ProductoHeader/ProductoHeader";
import ProductoImagenesDesktop from "../ProductoImagenes/ProductoImagenesDesktop.jsx";
import ProductoImagenesTablet from "../ProductoImagenes/ProductoImagenesTablet.jsx";
import ProductoImagenesMobile from "../ProductoImagenes/ProductoImagenesMobile.jsx";
import useScreenWidth from "../../hooks/useScreenWidth";
import styles from "./Producto.module.css";

// TODO: consumir esta info de la API
const mockImgs = [
  {
    src: "https://via.placeholder.com/400x200/FF0000/FFFFFF?text=Principal",
    alt: "Placeholder principal",
  },
  {
    src: "https://via.placeholder.com/400x200/0000FF/FFFFFF?text=Secundaria%201",
    alt: "Placeholder 1",
  },
  {
    src: "https://via.placeholder.com/400x200/0000FF/FFFFFF?text=Secundaria%202",
    alt: "Placeholder 2",
  },
  {
    src: "https://via.placeholder.com/400x200/0000FF/FFFFFF?text=Secundaria%203",
    alt: "Placeholder 3",
  },
  {
    src: "https://via.placeholder.com/400x200/0000FF/FFFFFF?text=Secundaria%204",
    alt: "Placeholder 4",
  },
  {
    src: "https://via.placeholder.com/400x200/0000FF/FFFFFF?text=Secundaria%205",
    alt: "Placeholder 5",
  },
  {
    src: "https://via.placeholder.com/400x200/0000FF/FFFFFF?text=Secundaria%206",
    alt: "Placeholder 6",
  },
];

export default function Producto({ imagenes = mockImgs }) {
  const anchoPantalla = useScreenWidth();

  return (
    <>
    <ProductoHeader/>
    <section className={styles.sectionImagenes}>
      {anchoPantalla > 768 ? (
        <ProductoImagenesDesktop imagenes={imagenes} />
      ) : anchoPantalla > 480 ? (
        <ProductoImagenesTablet imagenes={imagenes} />
      ) : (
        <ProductoImagenesMobile imagenes={imagenes} />
      )}
    </section>
    </>
  );
}
