import { useEffect, useState } from "react";
import FilledButton from "../Buttons/FilledButton";
import styles from "./Form.module.css";

const usuarioHarcodeado = {
  email: "kevin@gmail.com",
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

  function handleSubmit(e) {
    e.preventDefault();
  }

  function validarCampos() {
      if (validarContrasenia(password) && validarEmail(email)) {
        if (
          password == usuarioHarcodeado.password &&
          email == usuarioHarcodeado.email
        ) {
          //lógica de redirección hacia la home
          console.log("Redirigiendo a la home...");
        } else {
          const msjError = document.createTextNode(
            "Por favor, vuelva a intentarlo sus credenciales son inválidas."
          );
          document.querySelector(".mensajeError").appendChild(msjError);
        }
      }
    }


  return (
    <div className={styles.mainForm}>
      <div className={styles.contenedorForm}>
        <h1>Iniciar sesión</h1>
        <form onSubmit={handleSubmit} className={styles.formLogin}>
          <label>
            Correo electrónico
            <input type="email" name="correo" onChange={evt => setEmail(evt.target.value)} />
          </label>
          <label>
            Contraseña
            <div className={styles.contenedorOjo}>
              <input type="password" name="contrasenia" onChange={evt => setPassword(evt.target.value)} />
              <span className={styles.iconoOjo}>
                <i className="fas fa-eye-slash"></i>
              </span>
            </div>
          </label>
          <p className={`mensajeError ${styles.credencialesInvalidas}`}>
            
          </p>
          <FilledButton onClick={() => validarCampos()}>
            Iniciar sesión
          </FilledButton>
          <p>
            ¿Aún no tienes cuenta? <a href="./register.html">Registrate</a>
          </p>
        </form>
      </div>
    </div>
  );
}
