import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import TituloBloque from "../../../TituloBloque/TituloBloque";
import styles from "./ProductoMapa.module.css";

const containerStyle = {
  width: "100%",
  height: "50vh",
  marginBottom: "58px",
  borderRadius: "8px",
};

export default function ProductoMapa({ alojamiento: { direccion, ciudad } }) {
  
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA2h8uPorI_NWnVFI5NfeI45GfjpJ4EIxE",
  });

  const ubicacion = {
    lat: ciudad.latitud,
    lng: ciudad.longitud,
  };

  return (
    <section className={styles.containerUbicacion} id="mapa">
      <TituloBloque>¿Dónde vas a estar?</TituloBloque>
      <hr />
      <h4
        className={styles.textoUbicacion}
      >{`${direccion}, ${ciudad.nombre}, ${ciudad.pais}`}</h4>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={ubicacion}
          zoom={15}
        >
          <Marker position={ubicacion} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </section>
  );
}
