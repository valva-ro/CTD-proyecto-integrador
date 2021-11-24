import React, { useContext, useState, useEffect } from "react";
import Pagination from "react-paginating";
import TarjetaAlojamiento from "./TarjetaAlojamiento/TarjetaAlojamiento";
import TituloBloque from "../TituloBloque/TituloBloque.jsx";
import SkeletonTarjetaAlojamiento from "./TarjetaAlojamiento/SkeletonTarjetaAlojamiento";
import currentFilterContext from "../../contexts/currentFilterContext";
import styles from "./BloqueAlojamientos.module.css";
import useFetch from "../../hooks/useFetch";
import useScreenWidth from "../../hooks/useScreenWidth";

export default function BloqueAlojamientos() {
  const { currentCity, setCurrentCity, currentCategory, setCurrentCategory } =
    useContext(currentFilterContext);
  const [alojamientos, setAlojamientos] = useState([]);
  const { isLoaded, items } = useFetch("productos");
  const [currentPage, setCurrentPage] = useState(1);
  const anchoPantalla = useScreenWidth();

  useEffect(() => {
    if (isLoaded) {
      setAlojamientos(items);
    }
  }, [isLoaded, items]);

  const toggleFiltrado = () => {
    setCurrentCategory("");
    setCurrentCity("");
  };

  const handleScrollPosition = () => {
    if (anchoPantalla >= 860) {
      window.scrollTo(0, 337);
    }
    if (anchoPantalla > 480 && anchoPantalla < 860) {
      window.scrollTo(0, 364);
    }
    if (anchoPantalla <= 480) {
      window.scrollTo(0, 660);
    }
  };

  const handlePageChange = (page, e) => {
    setCurrentPage(page);
    handleScrollPosition();
  };

  const alojamientosFiltrados = alojamientos.filter((alojamiento) => {
    let pasaElFiltro = true;
    if (currentCategory !== "" && currentCity !== "") {
      pasaElFiltro =
        currentCategory.toLowerCase() ===
          alojamiento.categoria.titulo.toLowerCase() &&
        currentCity.toLowerCase() === alojamiento.ciudad.nombre.toLowerCase();
    } else if (currentCity !== "") {
      pasaElFiltro =
        currentCity.toLowerCase() === alojamiento.ciudad.nombre.toLowerCase();
    } else if (currentCategory !== "") {
      pasaElFiltro =
        currentCategory.toLowerCase() ===
        alojamiento.categoria.titulo.toLowerCase();
    }
    return pasaElFiltro;
  });

  function recortarAlojamientos() {
    const ALOJAMIENTOS_POR_PAGINA = 6;
    const indiceInicial = currentPage === 1 ? 0 : (currentPage - 1) * ALOJAMIENTOS_POR_PAGINA;
    const indiceFinal =
      indiceInicial + ALOJAMIENTOS_POR_PAGINA >= alojamientosFiltrados.length
        ? alojamientosFiltrados.length
        : indiceInicial + ALOJAMIENTOS_POR_PAGINA;
    console.log(alojamientosFiltrados.slice(indiceInicial, indiceFinal));
    return alojamientosFiltrados.slice(indiceInicial, indiceFinal);
  }

  return (
    <section className={styles.recomendaciones}>
      <div className={styles.encabezadoFiltros}>
        <TituloBloque>
          {currentCategory === ""
            ? currentCity === ""
              ? "Recomendaciones"
              : `Recomendaciones en ${currentCity}`
            : currentCity === ""
            ? `${capitalizeFirstLetter(currentCategory)}`
            : `${capitalizeFirstLetter(currentCategory)} en ${currentCity}`}
        </TituloBloque>
        <div className={styles.containerFiltrosButton} onClick={toggleFiltrado}>
          <span className={styles.filtrosButton}>Quitar Filtros</span>
          <i className="fas fa-backspace"></i>
        </div>
      </div>
      {isLoaded && alojamientosFiltrados.length === 0 ? (
        <h2 className={styles.sinResultados}>No se encontraron resultados</h2>
      ) : !isLoaded ? (
        <ul className={styles.alojamientos}>
          {Array.apply(0, Array(6)).map((x, i) => (
            <li key={`skeletonAlojamiento-${i}`} className={styles.alojamiento}>
              <SkeletonTarjetaAlojamiento />
            </li>
          ))}
        </ul>
      ) : (
        <>
          <ul className={styles.alojamientos}>
            {recortarAlojamientos().map((alojamiento, i) => (
              <li key={i} className={styles.alojamiento}>
                <TarjetaAlojamiento
                  alojamiento={alojamiento}
                  isLoaded={isLoaded}
                />
              </li>
            ))}
          </ul>
          <Pagination
            total={alojamientosFiltrados.length}
            limit={6}
            pageCount={Math.ceil(alojamientosFiltrados.length / 6)}
            currentPage={currentPage}
            className={styles.paginacion}
          >
            {({
              pages,
              currentPage,
              hasNextPage,
              hasPreviousPage,
              previousPage,
              nextPage,
              totalPages,
              getPageItemProps,
            }) => (
              <div>
                <button
                  {...getPageItemProps({
                    pageValue: 1,
                    onPageChange: handlePageChange,
                  })}
                >
                  Inicio
                </button>

                {hasPreviousPage && (
                  <button
                    {...getPageItemProps({
                      pageValue: previousPage,
                      onPageChange: handlePageChange,
                    })}
                  >
                    {"<"}
                  </button>
                )}

                {pages.map((page) => {
                  let activePage =
                    currentPage === page ? styles.activePage : null;
                  return (
                    <button
                      className={activePage}
                      {...getPageItemProps({
                        pageValue: page,
                        key: page,
                        onPageChange: handlePageChange,
                      })}
                    >
                      {page}
                    </button>
                  );
                })}

                {hasNextPage && (
                  <button
                    {...getPageItemProps({
                      pageValue: nextPage,
                      onPageChange: handlePageChange,
                    })}
                  >
                    {">"}
                  </button>
                )}

                <button
                  {...getPageItemProps({
                    pageValue: totalPages,
                    onPageChange: handlePageChange,
                  })}
                >
                  Fin
                </button>
              </div>
            )}
          </Pagination>
        </>
      )}
    </section>
  );
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
