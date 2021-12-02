import { useParams, useHistory, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TituloBloque from "../TituloBloque/TituloBloque";
import FilledButton from "../Buttons/FilledButton";
import Loader from "../Loader/Loader";
import get from "../../utils/get";
import styles from "./ConfirmacionCuenta.module.css";

export default function ConfirmacionCuenta() {
  const { token } = useParams();
  const history = useHistory();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    get("usuarios/confirmarRegistro?token=" + token).then((data) => {
      setIsLoaded(true);
      if (data.mail != undefined) {
        setTimeout(() => {
          history.push("/login");
        }, 5000);
      } else {
        setIsError(true);
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      {isLoaded ? (
        isError ? (
          <>
            <TituloBloque>
              No pudimos verificar tu cuenta, por favor volvé a registrarte
            </TituloBloque>
            <Link to="/register">
              <FilledButton>Ir a registro</FilledButton>
            </Link>
          </>
        ) : (
          <>
            <TituloBloque>Tu cuenta fue confirmada con éxito</TituloBloque>
            <Loader style={styles.loaderContainer} />
          </>
        )
      ) : (
        <>
          <TituloBloque>Estamos confirmando tu cuenta</TituloBloque>
          <Loader style={styles.loaderContainer} />
        </>
      )}
    </div>
  );
}
