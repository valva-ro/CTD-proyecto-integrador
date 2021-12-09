import FilledButton from "../Buttons/FilledButton";
import styles from "./Form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import InputComponent from "./formComponents/Input";
import post from "../../utils/post";

const ID_ROL_USUARIO = 2;

export default function Register() {
  const [name, setName] = useState({ campo: "", valido: null });
  const [surname, setSurname] = useState({ campo: "", valido: null });
  const [email, setEmail] = useState({ campo: "", valido: null });
  const [password, setPassword] = useState({ campo: "", valido: null });
  const [repeatPassword, setRepeatPassword] = useState({
    campo: "",
    valido: null,
  });
  const history = useHistory();
  const [isError, setIsError] = useState(false);
  const [msjError, setMsjError] = useState(
    "Lamentablemente no ha podido registrarse. Por favor, vuelva a intentarlo."
  );

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{2,25}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{2,25}$/,
    clave: /^.{7,}$/,
    correo: /[A-z0-9]+@[A-z]+.[A-z]{3}/,
  };

  function validarRepeatPassword() {
    if (password.campo.length > 6) {
      if (password.campo !== repeatPassword.campo) {
        setRepeatPassword((prevState) => {
          return { ...prevState, valido: "false" };
        });
      } else {
        setRepeatPassword((prevState) => {
          return { ...prevState, valido: "true" };
        });
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    enviarDatosBDD();
  }

  function validarCampos() {
    let rta;
    if (
      name.valido === "true" &&
      surname.valido === "true" &&
      email.valido === "true" &&
      password.valido === "true" &&
      repeatPassword.valido === "true"
    ) {
      setIsError(false);
      rta = true;
    } else {
      setIsError(true);
      setMsjError(
        "Lamentablemente no ha podido registrarse. Por favor, vuelva a intentarlo."
      );
      rta = false;
    }
    return rta;
  }

  function enviarDatosBDD() {
    if (validarCampos()) {
      post("usuarios/signup", {
        nombre: name.campo,
        apellido: surname.campo,
        mail: email.campo,
        contrasenia: password.campo,
        rol: { id: ID_ROL_USUARIO },
      })
        .then((response) => {
          if (response.status === 409) {
            setIsError(true);
            response.text().then(function (text) {
              setMsjError(text);
            });
          } else if (response.status === 201) {
            setIsError(false);
            history.push("/");
          } 
        })
        .catch((error) => console.log(error));
    } else {
      setIsError(true);
    }
  }

  return (
    <div className={styles.mainForm}>
      <div className={styles.contenedorForm}>
        <h2>Crear cuenta</h2>
        <form
          className={`${styles.formRegister} ${styles.generalForms}`}
          onSubmit={handleSubmit}
          noValidate="novalidate"
        >
          <div className={styles.inputsContainer}>
            <InputComponent
              estado={name}
              cambiarEstado={setName}
              tipo="text"
              label="Nombre"
              name="nombre"
              expresionRegular={expresiones.nombre}
              leyendaError="El nombre sólo debe contener letras. Entre 2 y 25 caracteres."
            />
            <InputComponent
              estado={surname}
              cambiarEstado={setSurname}
              tipo="text"
              label="Apellido"
              name="apellido"
              expresionRegular={expresiones.apellido}
              leyendaError="El apellido sólo debe contener letras. Entre 2 y 25 caracteres."
            />
          </div>
          <InputComponent
            estado={email}
            cambiarEstado={setEmail}
            tipo="email"
            label="Correo electrónico"
            name="correo"
            expresionRegular={expresiones.correo}
            leyendaError="Formato de correo inválido."
          />
          <InputComponent
            estado={password}
            cambiarEstado={setPassword}
            tipo="password"
            label="Contraseña"
            name="contrasenia"
            expresionRegular={expresiones.clave}
            leyendaError="La contraseña debe tener al menos 7 caracteres."
            tieneIcono={true}
          />
          <InputComponent
            estado={repeatPassword}
            cambiarEstado={setRepeatPassword}
            tipo="password"
            label="Confirmar contraseña"
            name="repetirContrasenia"
            leyendaError="La contraseñas no coinciden."
            funcion={validarRepeatPassword}
          />
          {isError ? (
            <div className={styles.credencialesContainer}>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <p className={styles.credencialesInvalidas}>{msjError}</p>
            </div>
          ) : null}
          <FilledButton onClick={handleSubmit}>Crear cuenta</FilledButton>
          <p>
            ¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
