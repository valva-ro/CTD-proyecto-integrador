import { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import FilledButton from "../Buttons/FilledButton";
import InputComponent from "./formComponents/Input";
import loggedContext from "../../contexts/loggedContext";
import styles from "./Form.module.css";
import post from "../../utils/post";

export default function Login() {
  const [email, setEmail] = useState({ campo: "", valido: null });
  const [password, setPassword] = useState({ campo: "", valido: null });
  const [isError, setIsError] = useState(false);
  const history = useHistory();
  const { setIsLogged, setUserInformation } = useContext(loggedContext);

  function handleSubmit(e) {
    e.preventDefault();
    iniciarSesion();
  }

  function iniciarSesion() {
    post("login", {
      mail: email.campo,
      contrasenia: password.campo,
    })
      .then((response) => {
        const msjError = `Error status ${response.status}: ${response.text}`;
        if (response.status !== 200) throw msjError;
        return response.json();
      })
      .then((data) => {
        setIsLogged(true);
        guardarDatos(data);
      })
      .then(() => history.push("/"))
      .catch((error) => setIsError(true));
  }

  function guardarDatos(data) {
    localStorage.setItem("jwt", JSON.stringify(data.jwt));
    localStorage.setItem("email", JSON.stringify(email.campo));
    setUserInformation({ nombre: data.nombre, apellido: data.apellido });
  }

  return (
    <>
      <div className={styles.mainForm}>
        <div className={styles.contenedorForm}>
          <h2>Iniciar sesión</h2>
          <form
            className={styles.formLogin}
            onSubmit={handleSubmit}
            noValidate="novalidate"
          >
            <InputComponent
              estado={email}
              cambiarEstado={setEmail}
              tipo="email"
              label="Correo electrónico"
              name="correo"
            />
            <InputComponent
              estado={password}
              cambiarEstado={setPassword}
              tipo="password"
              label="Contraseña"
              name="contrasenia"
              tieneIcono={true}
            />

            {isError ? (
              <div className={styles.credencialesContainer}>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                <p className={styles.credencialesInvalidas}>
                  Sus credenciales son inválidas. Por favor, vuelva a intentarlo.
                </p>
              </div>
            ) : null}
            <FilledButton onClick={handleSubmit} testId="loginBtn">
              Iniciar sesión
            </FilledButton>
            <p>
              ¿Aún no tienes cuenta? <Link to="/register">Registrate</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
