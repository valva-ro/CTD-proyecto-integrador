import FilledButton from '../Buttons/FilledButton';
import styles from './Form.module.css';

export default function Login() {
  return (
    <main>
      <div className={styles.contenedorForm}>
        <h1>Iniciar sesión</h1>
        <form className={styles.formLogin}>
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
          <FilledButton>Iniciar sesión</FilledButton>
          <p>
            ¿Aún no tienes cuenta? <a href="./register.html">Registrate</a>
          </p>
        </form>
      </div>
    </main>
  );
}
