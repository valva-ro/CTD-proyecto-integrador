import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import TituloBloque from "../TituloBloque/TituloBloque";
import styles from "./ProductoMapa.module.css";

const containerStyle = {
  width: "100%",
  height: "50vh",
  marginBottom: "58px",
  borderRadius: "8px",
};

// TODO: por ahora esto está hardcodeado, pero eventualmente al recibir la 
//       dirección de la API podemos consultar con la API de google maps 
//       la latitud y longitud que correspondan
const center = {
  lat: -33.6231,
  lng: -64.5958,
};

export default function ProductoMapa({ alojamiento }) {
  // TODO: este location hay que cambiarlo y usar el atributo de la API
  const { ciudad } = alojamiento;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA2h8uPorI_NWnVFI5NfeI45GfjpJ4EIxE",
  });

  return (
    <section className={styles.containerUbicacion} id="mapa">
      <TituloBloque>¿Dónde vas a estar?</TituloBloque>
      <hr/>
      <h4 className={styles.textoUbicacion}>{`${ciudad.nombre}, ${ciudad.pais}`}</h4>
      {isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </section>
  );
}
