import FilledButton from "../Buttons/FilledButton";
import styles from "./Form.module.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { Label, Input, LeyendaError } from "./formElements";

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
              <Label>
                Nombre
                <Input
                  type="text"
                  name="nombre"
                  onChange={(evt) => setName(evt.target.value.trim())}
                />
              </Label>
              <LeyendaError></LeyendaError>
            </div>
            <div className={styles.contenedorInput}>
              <Label>
                Apellido
                <Input
                  type="text"
                  name="apellido"
                  onChange={(evt) => setSurname(evt.target.value.trim())}
                />
              </Label>
              <LeyendaError></LeyendaError>
            </div>
          </div>
          <div className={styles.contenedorInput}>
            <Label>
              Correo electrónico
              <Input
                type="email"
                name="correo"
                onChange={(evt) => setEmail(evt.target.value.trim())}
              />
            </Label>
            <LeyendaError></LeyendaError>
          </div>
          <div className={styles.contenedorInput}>
            <Label>
              Contraseña
              <div className={styles.contenedorOjo}>
                <Input
                  type="password"
                  name="contrasenia"
                  onChange={(evt) => setPassword(evt.target.value.trim())}
                />
                <span className={styles.iconoOjo}>
                  <i className="fas fa-eye-slash"></i>
                </span>
              </div>
            </Label>
            <LeyendaError>La contraseña debe tener más de 6 caracteres</LeyendaError>
          </div>
          <div className={styles.contenedorInput}>
            <Label>
              Confirmar contraseña
              <Input
                type="password"
                name="repetirContrasenia"
                onChange={(evt) => setRepeatPassword(evt.target.value.trim())}
              />
            </Label>
            <LeyendaError></LeyendaError>
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
