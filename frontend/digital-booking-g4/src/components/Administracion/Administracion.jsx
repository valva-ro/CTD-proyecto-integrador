import { React, useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import HeaderSecundario from "../HeaderSecundario/HeaderSecundario";
import TituloBloque from "../TituloBloque/TituloBloque";
import NumberInput from "./NumberInput/NumberInput";
import EstandarInput from "./EstandarInput/EstandarInput";
import TextAreaInput from "./TextAreaInput/TextAreaInput";
import SelectInput from "./SelectInput/SelectInput";
import CityInput from "../Searcher/CityInput/CityInput";
import RowImagenes from "./RowImagenes/RowImagenes";
import FilledButton from "../Buttons/FilledButton";
import Modal from "../Modal/Modal";
import TarjetaPostExitoso from "../TarjetaPostExitoso/TarjetaPostExitoso";
import loggedContext from "../../contexts/loggedContext";
import useFetch from "../../hooks/useFetch";
import post from "../../utils/post";
import get from "../../utils/get";
import stylesInputsFromOtherside from "../Producto/ProductoReserva/ProductoFormDatos/InputsFromOtherside.module.css";
import styles from "./Administracion.module.css";
import caracteristicas from "../../resources/caracteristicas.json";

export default function Administracion() {
  const { isLogged, rol } = useContext(loggedContext);
  const [showModal, setShowModal] = useState(false);
  const [propertyName, setPropertyName] = useState("");
  const [onChangeCategory, setOnChangeCategory] = useState("");
  const [address, setAddress] = useState("");
  const [horarioCheckIn, setHorarioCheckIn] = useState(null);
  const [onChangeCity, setOnChangeCity] = useState("");
  const [country, setCountry] = useState("");
  const autocompletadoInputCountry = true;
  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [normasDeLaCasa, setNormasDeLaCasa] = useState("");
  const [saludSeguridad, setSaludSeguridad] = useState("");
  const [cancelacion, setCancelacion] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [atributosId, setAtributosId] = useState([]);
  const [error, setError] = useState({ message: "", isError: false });
  const [city, setCity] = useState({});
  const data = useFetch("categorias");

  let token = "";
  if (localStorage.hasOwnProperty("jwt")) {
    token = localStorage.getItem("jwt").replaceAll('"', "");
  }

  const validarCampos = () => {
    if (propertyName === "") {
      setError({
        message: "El nombre del alojamiento es un campo obligatorio",
        isError: true,
      });
      return false;
    }
    if (onChangeCategory === "") {
      setError({
        message: "La categoría del alojamiento es un campo obligatorio",
        isError: true,
      });
      return false;
    }
    if (address === "") {
      setError({
        message: "La dirección del alojamiento es un campo obligatorio",
        isError: true,
      });
      return false;
    }
    if (horarioCheckIn === null) {
      setError({
        message: "El horario de check-in del alojamiento es un campo obligatorio",
        isError: true,
      });
      return false;
    }
    if (onChangeCity === "") {
      setError({
        message: "La ciudad del alojamiento es un campo obligatorio",
        isError: true,
      });
      return false;
    }
    if (country === "") {
      setError({
        message: "El país de la ciudad es un campo obligatorio",
        isError: true,
      });
      return false;
    }
    if (latitud === "") {
      setError({
        message: "La latitud de la ciudad es un campo obligatorio",
        isError: true,
      });
    }
    if (longitud === "") {
      setError({
        message: "La longitud de la ciudad es un campo obligatorio",
        isError: true,
      });
      return false;
    }
    if (descripcion === "") {
      setError({
        message: "La descripción del alojamiento es un campo obligatorio",
        isError: true,
      });
      return false;
    }
    if (normasDeLaCasa === "") {
      setError({
        message: "Las normas del alojamiento son un campo obligatorio",
        isError: true,
      });
      return false;
    }
    if (saludSeguridad === "") {
      setError({
        message:
          "Las políticas salud y seguridad son un campo obligatorio",
        isError: true,
      });
      return false;
    }
    if (cancelacion === "") {
      setError({
        message: "Las políticas de cancelación son un campo obligatorio",
        isError: true,
      });
      return false;
    }
    if (imagenes.length > 0) {
      setError({
        message: "Debe cargar al menos una imagen",
        isError: true,
      });
      return false;
    }
    return true;
  };

  /* ------- CheckIn (horarioCheckInrio min) ------- */
  let horarioCheckInsDisponibles = [];

  for (let i = 0; i <= 23; i++) {
    horarioCheckInsDisponibles.push(i);
  }

  const handleChangeCheckIn = (e) =>
    setHorarioCheckIn(parseInt(e.target.value));

  /* ------- Categoría ------- */
  const [categoryItems, setCategoryItems] = useState([]);
  let categoriasDisponibles = [];

  useEffect(() => {
    if (data.isLoaded) {
      setCategoryItems(data.items);
    }
  }, [data.isLoaded, data.items]);

  categoryItems.forEach((item) => {
    categoriasDisponibles.push(item.titulo);
  });

  const handleChangeCategory = (e) => setOnChangeCategory(e.target.value);

  /* ------- Imagenes ------- */
  const [imagenesDetails, setImagenesDetails] = useState([
    {
      url: "",
      descripcion: "",
    },
  ]);

  const agregarImagen = (imagen) => setImagenes([...imagenes, imagen]);

  const handleAdd = (e) => {
    setImagenesDetails([
      ...imagenesDetails,
      {
        url: "",
        descripcion: "",
      },
    ]);
  };

  const handleDelete = (val, imagen) => {
    setImagenesDetails([...imagenesDetails.filter((r) => r !== val)]);
    setImagenes([...imagenes.filter((r) => r !== imagen)]);
  };

  const handleCreacionProducto = () => {
    let idDeCategoria;
    let idDeCiudad;
    let idsDePoliticas = [];
    let idsDeImagenes = [];

    const obtenerIdCategoria = (nombreCategoria) => {
      switch (nombreCategoria) {
        case "Hoteles":
          idDeCategoria = 1;
          break;
        case "Hostels":
          idDeCategoria = 2;
          break;
        case "Bed & Breakfasts":
          idDeCategoria = 3;
          break;
        case "Departamentos":
          idDeCategoria = 4;
          break;
      }
    };

    const postearCiudad = () => {
      return get("ciudades").then((data) => {
        const filtradoCiudad = data.find(
          (ciudad) => ciudad.nombre === onChangeCity
        );
        if (filtradoCiudad !== undefined) {
          idDeCiudad = filtradoCiudad.id;
        } else {
          return post("ciudades", {
            nombre: onChangeCity,
            pais: country,
            latitud,
            longitud,
          })
            .then((response) => response.json())
            .then((data) => (idDeCiudad = parseInt(data.id)));
        }
      });
    };

    const postearPoliticas = () => {
      return post("politicas", {
        nombre: normasDeLaCasa,
        tipoPolitica: 1,
      })
        .then((response) => response.json())
        .then((data) => idsDePoliticas.push(parseInt(data.id)))
        .then(() =>
          post("politicas", {
            nombre: saludSeguridad,
            tipoPolitica: 2,
          })
        )
        .then((response) => response.json())
        .then((data) => idsDePoliticas.push(parseInt(data.id)))
        .then(() =>
          post("politicas", {
            nombre: cancelacion,
            tipoPolitica: 3,
          })
        )
        .then((response) => response.json())
        .then((data) => idsDePoliticas.push(parseInt(data.id)));
    };

    const postearImagenes = () => {
      return imagenes.map((imagen) =>
        post("imagenes", {
          imagenTitulo: imagen.descripcion,
          imagenUrl: imagen.url,
        })
          .then((response) => response.json())
          .then((data) => idsDeImagenes.push(parseInt(data.id)))
      );
    };

    obtenerIdCategoria(onChangeCategory);
    const promises = [
      ...postearImagenes(),
      postearCiudad(),
      postearPoliticas(),
    ];

    Promise.all(promises).then(() => {
      post(
        "productos",
        {
          nombre: propertyName,
          descripcion,
          direccion: address,
          horarioCheckIn: horarioCheckIn,
          categoria: { id: idDeCategoria },
          ciudad: { id: idDeCiudad },
          imagenes: idsDeImagenes.map((id) => {
            return { id };
          }),
          caracteristicas: atributosId.map((id) => {
            return { id };
          }),
          politicas: idsDePoliticas.map((id) => {
            return { id };
          }),
        },
        {
          "Content-Type": "application/json",
          Authorization: token,
        }
      ).then((response) => {
        if (response.status === 201) {
          setError({ message: error.message, isError: false });
          setShowModal(true);
        } else {
          setError({
            message:
              "Hubo un problema al cargar el producto, por favor vuelva a intentarlo más tarde",
            isError: true,
          });
        }
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const camposValidados = validarCampos();
    if (camposValidados) {
      handleCreacionProducto();
    }
  };

  if (!isLogged || rol !== "ROLE_ADMIN") {
    return <Redirect to="/" />;
  }

  return (
    <>
      <HeaderSecundario>Administración</HeaderSecundario>
      <section className={styles.containerPrincipal}>
        <TituloBloque>Crear propiedad</TituloBloque>
        <p className={styles.camposObligatorios}>
          (Los campos identificados con * son obligatorios)
        </p>
        <form className={styles.formAdmin} onSubmit={handleSubmit}>
          <div className={styles.subContainer}>
            <div className={styles.lineContainerInformacion}>
              <EstandarInput
                onChangeItem={propertyName}
                setOnChangeItem={setPropertyName}
                label="* Nombre de la propiedad"
                name="nombre"
              />

              <SelectInput
                label="* Categoría"
                name="tituloCategoria"
                handleChange={handleChangeCategory}
                opcionesDisponibles={categoriasDisponibles}
                showOptions={false}
              />
            </div>
            <div className={styles.lineContainerInformacion}>
              <EstandarInput
                onChangeItem={address}
                setOnChangeItem={setAddress}
                label="* Dirección"
                name="direccion"
              />

              <SelectInput
                label="* CheckIn (horario min)"
                name="horarioCheckIn"
                handleChange={handleChangeCheckIn}
                opcionesDisponibles={horarioCheckInsDisponibles}
                showOptions={true}
              />
            </div>
            <div className={styles.lineContainerInformacion}>
              <div className={styles.containerCityInput}>
                <label>* Ciudad</label>
                <CityInput
                  setOnChangeCity={setOnChangeCity}
                  onChangeCity={onChangeCity}
                  specificStyle1={stylesInputsFromOtherside.ocultar}
                  specificStyle2={stylesInputsFromOtherside.inputFormDatos}
                  specificStyle3={stylesInputsFromOtherside.divDrawer}
                  setCountry={setCountry}
                  setCity={setCity}
                  autocompletadoInputCountry={autocompletadoInputCountry}
                />
              </div>

              <EstandarInput
                onChangeItem={country}
                setOnChangeItem={setCountry}
                label="* País"
                name="pais"
                value={city.pais}
              />
            </div>
            <div className={styles.lineContainerInformacion}>
              <NumberInput
                onChangeItem={latitud}
                setOnChangeItem={setLatitud}
                label="* Latitud"
                name="latitud"
                value={city.latitud}
                showValue={city.latitud != null}
              />
              <NumberInput
                onChangeItem={longitud}
                setOnChangeItem={setLongitud}
                label="* Longitud"
                name="longitud"
                value={city.longitud}
                showValue={city.longitud != null}
              />
            </div>
            <div className={`${styles.lineContainerInformacion}`}>
              <TextAreaInput
                onChangeItem={descripcion}
                setOnChangeItem={setDescripcion}
                label="* Descripción"
                name="descripcion"
              />
            </div>
          </div>
          <div className={styles.subContainer}>
            <TituloBloque>Agregar atributos</TituloBloque>
            <ul className={styles.checkboxes}>
              {caracteristicas.map((caracteristica) => (
                <li key={caracteristica.id}>
                  <input
                    type="checkbox"
                    name="caracteristicas"
                    id={caracteristica.id}
                    value={caracteristica.nombre}
                    onChange={(e) =>
                      e.target.checked === true
                        ? setAtributosId([...atributosId, caracteristica.id])
                        : atributosId.splice(
                            atributosId.indexOf(caracteristica.id),
                            1
                          )
                    }
                  />
                  <label htmlFor={caracteristica.id}>
                    <i className={caracteristica.icono}></i>
                    <span>{caracteristica.nombre}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.subContainer}>
            <TituloBloque>Políticas del producto</TituloBloque>
            <div className={styles.bloquePoliticas}>
              <div className={styles.columnPolitica}>
                <h3 className={styles.tipoPolitica}>Normas de la casa</h3>
                <TextAreaInput
                  onChangeItem={normasDeLaCasa}
                  setOnChangeItem={setNormasDeLaCasa}
                  label="* Descripción"
                  name="normasDeLaCasa"
                  placeholder="Escribir aquí"
                />
              </div>
              <div className={styles.columnPolitica}>
                <h3 className={styles.tipoPolitica}>Salud y seguridad</h3>
                <TextAreaInput
                  onChangeItem={saludSeguridad}
                  setOnChangeItem={setSaludSeguridad}
                  label="* Descripción"
                  name="saludSeguridad"
                  placeholder="Escribir aquí"
                />
              </div>
              <div className={styles.columnPolitica}>
                <h3 className={styles.tipoPolitica}>Política de cancelación</h3>
                <TextAreaInput
                  onChangeItem={cancelacion}
                  setOnChangeItem={setCancelacion}
                  label="* Descripción"
                  name="cancelacion"
                  placeholder="Escribir aquí"
                />
              </div>
            </div>
          </div>
          <div className={styles.subContainer}>
            <TituloBloque>Cargar imágenes</TituloBloque>
            <p className={styles.camposObligatorios}>
              (Se debe cargar al menos una imagen)
            </p>
            <RowImagenes
              handleAdd={handleAdd}
              handleDelete={handleDelete}
              imagenesDetails={imagenesDetails}
              agregarImagen={agregarImagen}
            />
          </div>
          <div className={styles.subContainer}>
            {error.isError ? (
              <div className={styles.invalidURL}>
                <i className="fas fa-exclamation-triangle"></i>
                <p>{error.message}</p>
              </div>
            ) : null}
            <FilledButton styles={styles.buttonSubmit} onClick={handleSubmit}>
              Crear
            </FilledButton>
          </div>
        </form>
      </section>
      <Modal
        estaAbierto={showModal}
        onCloseRequest={() => setShowModal(false)}
        colorBtnCerrar="#383b58"
        colorFondo="#383b5853"
      >
        <TarjetaPostExitoso
          contenidoP={"La propiedad se ha creado con éxito"}
        />
      </Modal>
    </>
  );
}
