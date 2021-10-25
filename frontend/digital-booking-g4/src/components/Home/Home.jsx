import BloqueAlojamientos from "../BloqueAlojamientos/BloqueAlojamientos";
import BloqueCategorias from "../BloqueCategorias/BloqueCategorias.jsx";

export default function Home() {
  return (
    <>
      {/*TODO: agregar el bloque de búsqueda  */}
      <BloqueCategorias />
      <BloqueAlojamientos />
    </>
  );
}
