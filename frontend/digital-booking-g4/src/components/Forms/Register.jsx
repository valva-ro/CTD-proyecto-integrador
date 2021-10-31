import FilledButton from "../Buttons/FilledButton";
import styles from "./Form.module.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { Label, Input, LeyendaError, ContenedorInput } from "./FormElements";
import InputComponent from "./formComponents/Input";

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
            <InputComponent
              tipo="text"
              label="Nombre"
              name="nombre"
              onChange="{(evt) => setName(evt.target.value.trim())}"
              leyendaError="El nombre debe tener entre 2 y 16 caracteres."
            />
            <InputComponent
              tipo="text"
              label="Apellido"
              name="apellido"
              onChange="{(evt) => setSurname(evt.target.value.trim())}"
              leyendaError="El apellido debe tener entre 2 y 16 caracteres."
            />
          </div>
            <InputComponent
              tipo="email"
              label="Correo electrónico"
              name="correo"
              onChange="{(evt) => setEmail(evt.target.value.trim())}"
              leyendaError="Formato de correo inválido."
            />
          <ContenedorInput>
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
            <LeyendaError>
              La contraseña debe tener más de 6 caracteres
            </LeyendaError>
          </ContenedorInput>
          <InputComponent
              tipo="password"
              label="Confirmar contraseña"
              name="repetirContrasenia"
              onChange="{(evt) => setRepeatPassword(evt.target.value.trim())}"
              leyendaError="La contraseñas no coinciden."
            />
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
