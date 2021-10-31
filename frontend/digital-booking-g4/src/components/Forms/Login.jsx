import { useState, useContext } from "react";
import FilledButton from "../Buttons/FilledButton";
import styles from "./Form.module.css";
import { useHistory, Link } from "react-router-dom";
import loggedContext from "../../contexts/loggedContext";
import { Label, Input } from "./formElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const usuarioHarcodeado = {
  email: "brodriguez@gmail.com",
  password: "12341234",
};

function validarContrasenia(contrasenia) {
  const longitudCorrecta = contrasenia.length > 6;
  return longitudCorrecta;
}

function validarEmail(email) {
  const expresion = /[A-z]+@[A-z]+.[A-z]{3}/;
  const test = expresion.test(email);
  return test;
}

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const history = useHistory();
  const { isLogged, setIsLogged } = useContext(loggedContext);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function validarCampos() {
    if (validarContrasenia(password) && validarEmail(email)) {
      if (
        password == usuarioHarcodeado.password &&
        email == usuarioHarcodeado.email
      ) {
        setIsLogged(true);
        history.push("/");
      } else {
        setIsError(true);
      }
    } else {
      setIsError(true);
    }
  }

  console.log(usuarioHarcodeado);

  return (
    <>
      <div className={styles.mainForm}>
        <div className={styles.contenedorForm}>
          <h1>Iniciar sesión</h1>
          <form
            className={styles.formLogin}
            onSubmit={handleSubmit}
            noValidate="novalidate"
          >
            <div className={styles.contenedorInput}>
              <Label>
                Correo electrónico
                <Input
                  type="email"
                  name="correo"
                  onChange={(evt) => setEmail(evt.target.value)}
                />
              </Label>
            </div>
            <div className={styles.contenedorInput}>
              <Label>
                Contraseña
                <div className={styles.contenedorOjo}>
                  <Input
                    type="password"
                    name="contrasenia"
                    onChange={(evt) => setPassword(evt.target.value)}
                  />
                  <span className={styles.iconoOjo}>
                    <i className="fas fa-eye-slash"></i>
                  </span>
                </div>
              </Label>
            </div>

            {isError ? (
              <div className={styles.credencialesContainer}>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                <p className={styles.credencialesInvalidas}>
                  Por favor, vuelva a intentarlo. Sus credenciales son
                  inválidas.
                </p>
              </div>
            ) : null}

            {/* {isError
                ? <p className={styles.credencialesInvalidas}>Por favor, vuelva a intentarlo. Suscredenciales son inválidas.</p>
                : null} */}

            <FilledButton onClick={() => validarCampos()}>
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
