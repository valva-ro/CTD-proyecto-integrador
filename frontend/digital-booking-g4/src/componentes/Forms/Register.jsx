import FilledButton from "../Buttons/FilledButton";
import OutlinedButton from "../Buttons/OutlinedButton";
import styles from './Form.module.css';

export default function Register() {
    return (
      <main>
      <div className={styles.contenedorForm}>
        <h1>Crear cuenta</h1>
        <form className={styles.formRegister}>
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
          <p>¿Ya tienes cuenta? <a href="./login.html">Iniciar sesión</a></p>
        </form>
      </div>
    </main>
    );
  }
  