import { useState } from "react";
import BloqueAlojamientos from "../BloqueAlojamientos/BloqueAlojamientos";
import BloqueCategorias from "../BloqueCategorias/BloqueCategorias.jsx";
import Searcher from "../Searcher/Searcher";

export default function Home() {
  const [categoriaActual, setCategoriaActual] = useState("");

  return (
    <>
      <Searcher />
      <BloqueCategorias setCategoriaActual={setCategoriaActual} />
      <BloqueAlojamientos categoriaActual={categoriaActual} />
    </>
  );
}
