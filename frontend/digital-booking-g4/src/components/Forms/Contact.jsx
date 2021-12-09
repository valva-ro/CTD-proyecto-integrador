import { useState } from "react";
import FilledButton from "../Buttons/FilledButton";
import EstandarInput from "../Administracion/EstandarInput/EstandarInput";
import TextAreaInput from "../Administracion/TextAreaInput/TextAreaInput";
import styles from "./Form.module.css";
import Modal from "../Modal/Modal";
import TarjetaPostExitoso from "../TarjetaPostExitoso/TarjetaPostExitoso";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setShowModal(true)
  }

  return (
    <>
      <div className={styles.mainForm}>
        <div className={styles.contenedorForm}>
          <h2>Contacto</h2>
          <form
            className={`${styles.formLogin} ${styles.formContact}`}
            onSubmit={handleSubmit}
            noValidate="novalidate"
          >
            <EstandarInput
                onChangeItem={name}
                setOnChangeItem={setName}
                label="Nombre"
                name="nombre"
            />
            <EstandarInput
                onChangeItem={email}
                setOnChangeItem={setEmail}
                label="Mail"
                name="mail"
            />
            <TextAreaInput
                onChangeItem={comentario}
                setOnChangeItem={setComentario}
                label="Comentario"
                name="comentario"
            />

            <FilledButton onClick={handleSubmit} testId="loginBtn">
              Enviar
            </FilledButton>
      
          </form>
          <Modal estaAbierto={showModal} onCloseRequest={() => setShowModal(false)} colorBtnCerrar="#383b58" colorFondo="#383b5853">
            <TarjetaPostExitoso 
              contenidoH2={"¡Gracias por tu comentario!"}
              contenidoP={"Dentro de las próximas 72hs te contactaremos"}
            />  
          </Modal>

        </div>
      </div>
    </>
  );
}
