import ProductoImagenes from "./ProductoImagenes/ProductoImagenes.jsx";
import ProductoFechasDisponibles from "./ProductoFechasDisponibles/ProductoFechasDisponibles";
import ProductoUbicacion from "./ProductoUbicacion/ProductoUbicacion";
import ProductoMapa from "./ProductoMapa/ProductoMapa";
import ProductoCaracteristicas from "./ProductoCaracteristicas/ProductoCaracteristicas";
import ProductoDescripcion from "./ProductoDescripcion/ProductoDescripcion";

export default function ProductoDetalle(producto) {
  return (
    <>
      <ProductoUbicacion alojamiento={producto} />
      <ProductoImagenes alojamiento={producto} />
      <ProductoDescripcion alojamiento={producto} />
      <ProductoCaracteristicas alojamiento={producto} />
      <ProductoFechasDisponibles />
      <ProductoMapa alojamiento={producto} />
    </>
  );
}
