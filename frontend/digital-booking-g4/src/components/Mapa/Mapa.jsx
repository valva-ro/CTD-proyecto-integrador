import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "50vh",
  borderRadius: "8px",
};

export default function Mapa({ coordenadas }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA2h8uPorI_NWnVFI5NfeI45GfjpJ4EIxE",
  });

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={coordenadas}
          zoom={15}
        >
          <Marker position={coordenadas} />
        </GoogleMap>
      ) : null}
    </>
  );
}
