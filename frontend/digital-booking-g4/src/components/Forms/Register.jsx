import FilledButton from "../Buttons/FilledButton";
import styles from "./Form.module.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import InputComponent from "./formComponents/Input";

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

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{2,25}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{2,25}$/,
    clave: /^.{7,20}$/,
    correo: /[A-z]+@[A-z]+.[A-z]{3}/,
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

    if (
      name.valido === "true" &&
      surname.valido === "true" &&
      email.valido === "true" &&
      password.valido === "true" &&
      repeatPassword.valido === "true"
    ) {
      history.push("/login");
    }
  }

  return (
    <div className={styles.mainForm}>
      <div className={styles.contenedorForm}>
        <h2>Crear cuenta</h2>
        <form
          className={styles.formRegister}
          onSubmit={handleSubmit}
          noValidate="novalidate"
        >
          <div>
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
            leyendaError="La contraseña debe tener entre 7 y 20 caracteres."
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
          <FilledButton>Crear cuenta</FilledButton>
          <p>
            ¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
