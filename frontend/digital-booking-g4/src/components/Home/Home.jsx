import BloqueAlojamientos from "../BloqueAlojamientos/BloqueAlojamientos";
import BloqueCategorias from "../BloqueCategorias/BloqueCategorias.jsx";
import Searcher from "../Searcher/Searcher"

export default function Home() {
  return (
    <>
      <Searcher/>
      <BloqueCategorias />
      <BloqueAlojamientos />
    </>
  );
}
