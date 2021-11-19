import { useState } from "react";
import TituloBloque from "../../../TituloBloque/TituloBloque";
import InputComponent from "../../../Forms/formComponents/Input";
import CityInput from "../../../Searcher/CityInput/CityInput";
import stylesInputsFromOtherside from "./InputsFromOtherside.module.css"
import styles from "./ProductoFormDatos.module.css"

export default function ProductoFormDatos(){

    const [name, setName] = useState({ campo: "", valido: null });
    const [surname, setSurname] = useState({ campo: "", valido: null });
    const [email, setEmail] = useState({ campo: "", valido: null });
    const [onChangeCity, setOnChangeCity] = useState("");

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{2,25}$/,
        apellido: /^[a-zA-ZÀ-ÿ\s]{2,25}$/,
        correo: /[A-z]+@[A-z]+.[A-z]{3}/,
    };
    
    return(
        <>
            <TituloBloque>Completá tus datos</TituloBloque>
            <form
                className={styles.formDatos}
                /*onSubmit={handleSubmit}
                noValidate="novalidate" */
            >
                <div className={styles.lineContainer}>
                    <InputComponent
                        estado={name}
                        cambiarEstado={setName}
                        tipo="text"
                        label="Nombre"
                        name="nombre"
                        expresionRegular={expresiones.nombre}
                        leyendaError="El nombre sólo debe contener letras. Entre 2 y 25 caracteres."
                        specificStyle={stylesInputsFromOtherside.inputOtherForms}

                    />
                    <InputComponent
                        estado={surname}
                        cambiarEstado={setSurname}
                        tipo="text"
                        label="Apellido"
                        name="apellido"
                        expresionRegular={expresiones.apellido}
                        leyendaError="El apellido sólo debe contener letras. Entre 2 y 25 caracteres."
                        specificStyle={stylesInputsFromOtherside.inputOtherForms}
                    />
                </div>
                <div className={styles.lineContainer}>
                    <InputComponent
                        estado={email}
                        cambiarEstado={setEmail}
                        tipo="email"
                        label="Correo electrónico"
                        name="correo"
                        expresionRegular={expresiones.correo}
                        leyendaError="Formato de correo inválido."
                        specificStyle={stylesInputsFromOtherside.inputOtherForms}
                    />
                    <div className={styles.containerInput}>
                        <label>Ciudad</label>
                        <CityInput setOnChangeCity={setOnChangeCity} specificStyle1={stylesInputsFromOtherside.ocultar}  specificStyle2={stylesInputsFromOtherside.inputFormDatos} specificStyle3={stylesInputsFromOtherside.divDrawer}/>                        
                    </div>
                    
                </div>
                <div className={`${styles.containerInput} ${styles.lineContainer}`}>
                    <label>Mensaje para el dueño</label>
                    <textarea name="comentario" id="comentario" cols="30" rows="6"></textarea>
                </div>
                <div className={styles.lineContainer}>
                    <label className={styles.myCheckbox}>
                        <input type="checkbox" name="covid" value="true"/>
                        <span className={styles.myCheckbox}>  ¿Estás vacunado contra el COVID-19?</span> 
                    </label> 
                       
                </div>
            </form>

        </>
    )
}