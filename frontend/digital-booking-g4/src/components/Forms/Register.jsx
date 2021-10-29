import FilledButton from "../Buttons/FilledButton";
import styles from "./Form.module.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

function validarContrasenia(contrasenia) {
  const longitudCorrecta = contrasenia.length > 6;
  return longitudCorrecta;
}

function validarMismaContrasenia(contrasenia, repetirContrasenia) {
  const coincidentes = contrasenia == repetirContrasenia;
  return coincidentes;
}

function validarEmail(email) {
  const expresion = /[A-z]+@[A-z]+.[A-z]{3}/;
  const test = expresion.test(email);
  return test;
}

function handleSubmit(e) {
  e.preventDefault();
}

export default function Register() {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const history = useHistory();

  function validarCampos() {
   console.log("Validando campos...");
  }

  return (
    <div className={styles.mainForm}>
      <div className={styles.contenedorForm}>
        <h1>Crear cuenta</h1>
        <form
          className={styles.formRegister}
          onSubmit={handleSubmit}
          novalidate="novalidate"
        >
          <div>
            <div className={styles.contenedorInput}>
              <label>
                Nombre
                <input
                  type="text"
                  name="nombre"
                  onChange={(evt) => setName(evt.target.value.trim())}
                />
              </label>
              <p className="nameMessage"></p>
            </div>
            <div className={styles.contenedorInput}>
              <label>
                Apellido
                <input
                  type="text"
                  name="apellido"
                  onChange={(evt) => setSurname(evt.target.value.trim())}
                />
              </label>
              <p className="nameMessage"></p>
            </div>
          </div>
          <div className={styles.contenedorInput}>
            <label>
              Correo electrónico
              <input
                type="email"
                name="correo"
                onChange={(evt) => setEmail(evt.target.value.trim())}
              />
            </label>
            <p className="emailMessage"></p>
          </div>
          <div className={styles.contenedorInput}>
            <label>
              Contraseña
              <div className={styles.contenedorOjo}>
                <input
                  type="password"
                  name="contrasenia"
                  onChange={(evt) => setPassword(evt.target.value.trim())}
                />
                <span className={styles.iconoOjo}>
                  <i className="fas fa-eye-slash"></i>
                </span>
              </div>
            </label>
            <p className="pwMessage"></p>
          </div>
          <div className={styles.contenedorInput}>
            <label>
              Confirmar contraseña
              <input
                type="password"
                name="repetirContrasenia"
                onChange={(evt) => setRepeatPassword(evt.target.value.trim())}
              />
            </label>
            <p className="repeatPwMessage"></p>
          </div>
          <FilledButton onClick={() => validarCampos()}>
            Crear cuenta
          </FilledButton>
          <p>
            ¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
