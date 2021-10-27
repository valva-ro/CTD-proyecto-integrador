import FilledButton from "../Buttons/FilledButton";
import styles from "./Form.module.css";
import { Link } from "react-router-dom";

function handleSubmit(e) {
  e.preventDefault();
}

export default function Register() {
  return (
    <div className={styles.mainForm}>
      <div className={styles.contenedorForm}>
        <h1>Crear cuenta</h1>
        <form className={styles.formRegister} onSubmit={handleSubmit}>
          <div>
            <label>
              Nombre
              <input type="text" name="nombre" />
            </label>
            <label>
              Apellido
              <input type="text" name="apellido" />
            </label>
          </div>
          <label>
            Correo electrónico
            <input type="email" name="correo" />
          </label>
          <label>
            Contraseña
            <div className={styles.contenedorOjo}>
              <input type="password" name="contrasenia" />
              <span className={styles.iconoOjo}>
                <i className="fas fa-eye-slash"></i>
              </span>
            </div>
          </label>
          <label>
            Confirmar contraseña
            <input type="password" name="repetirContrasenia" />
          </label>
          <FilledButton>Crear cuenta</FilledButton>
          <p>
            ¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
