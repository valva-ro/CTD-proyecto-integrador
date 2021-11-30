import React, { useContext, useState, useEffect } from "react";
import Pagination from "react-paginating";
import TarjetaAlojamiento from "./TarjetaAlojamiento/TarjetaAlojamiento";
import TituloBloque from "../TituloBloque/TituloBloque.jsx";
import SkeletonTarjetaAlojamiento from "./TarjetaAlojamiento/SkeletonTarjetaAlojamiento";
import currentFilterContext from "../../contexts/currentFilterContext";
import styles from "./BloqueAlojamientos.module.css";
import useFetch from "../../hooks/useFetch";
import get from "../../utils/get"
import useScreenWidth from "../../hooks/useScreenWidth";
import formatearFecha from "../../utils/formatearFecha";

const ALOJAMIENTOS_POR_PAGINA = 6;

export default function BloqueAlojamientos({setReset}) {
  const { currentCity, setCurrentCity, currentCategory, setCurrentCategory, currentDateRange, setCurrentDateRange} =
    useContext(currentFilterContext);
  const [alojamientos, setAlojamientos] = useState([]);
  const { isLoaded, items } = useFetch("productos");
  const [currentPage, setCurrentPage] = useState(1);
  const anchoPantalla = useScreenWidth();
  const [itemsFechas, setItemsFechas] = useState(null)  

  const fechaInicioFormat = () => {
    let fechaInicial = ""
    if (currentDateRange.fechaInicio !== null ){
      fechaInicial = formatearFecha(currentDateRange.fechaInicio);
    }else{
      fechaInicial = formatearFecha(new Date());
    }
    return fechaInicial;
  }

  const fechaFinalFormat = () => {
    let fechaFinal = ""
    if (currentDateRange.fechaFin !== null ){
      fechaFinal = formatearFecha(currentDateRange.fechaFin);
    }else{
      fechaFinal = formatearFecha(new Date());
    }
    return fechaFinal;
  }
            
  const inicio = fechaInicioFormat();
  const fin = fechaFinalFormat();
  
  
  function obtenerProductosPorFechas () {    
    get(`productos/?fechaIngreso=${inicio}&fechaEgreso=${fin}`)
    .then((response) => {
      setItemsFechas(response);
      
    })
    .catch((error) => console.log(error))
  }


  useEffect(() => {
    obtenerProductosPorFechas()
    if (isLoaded) {
      if (inicio !== fin || fin !== formatearFecha(new Date())) {  
        setAlojamientos(itemsFechas);
      } else {
        setAlojamientos(items);
      }
    }
  }, [isLoaded, items, inicio, fin, itemsFechas ]);
  
  
  const toggleFiltrado = () => {
    setCurrentCategory("");
    setCurrentCity("");
    setCurrentDateRange({fechaInicio: null, fechaFin: null});
    setReset(true);
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
    const indiceInicial =
      currentPage === 1 ? 0 : (currentPage - 1) * ALOJAMIENTOS_POR_PAGINA;
    const indiceFinal =
      indiceInicial + ALOJAMIENTOS_POR_PAGINA >= alojamientosFiltrados.length
        ? alojamientosFiltrados.length
        : indiceInicial + ALOJAMIENTOS_POR_PAGINA;
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
            limit={ALOJAMIENTOS_POR_PAGINA}
            pageCount={Math.ceil(
              alojamientosFiltrados.length / ALOJAMIENTOS_POR_PAGINA
            )}
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
