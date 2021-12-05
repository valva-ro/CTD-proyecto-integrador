import {React, useState, useEffect} from "react";
import useFetch from "../../hooks/useFetch";
import HeaderSecundario from "../HeaderSecundario/HeaderSecundario";
import TituloBloque from "../TituloBloque/TituloBloque";
import InputComponent from "../Forms/formComponents/Input";
import NumberInput from "./NumberInput/NumberInput";
import CityInput from "../Searcher/CityInput/CityInput"
import styles from "./Administracion.module.css";
import caracteristicas from "../../resources/caracteristicas.json"
import stylesInputsFromOtherside from "../Producto/ProductoReserva/ProductoFormDatos/InputsFromOtherside.module.css"


export default function Administracion() {
    const [propertyName, setPropertyName] = useState({ campo: "", valido: true });
    const [onChangeCategory, setOnChangeCategory] = useState("");
    const [address, setAddress] = useState({ campo: "", valido: true });
    const [hora, setHora] = useState(null);
    const [onChangeCity, setOnChangeCity] = useState("");
    const [country, setCountry] = useState({ campo: "", valido: true });
    const autocompletadoInputCountry = true
    const [latitud, setLatitud] = useState("");
    const [longitud,  setLongitud] = useState("");
    const [commentText, setCommentText] = useState("");

    const data = useFetch("categorias");
    

    /* CheckIn (horario min)*/
    
    const horaFormat = (hora) => {
        if(hora > 12) {
            const h = hora-12;
            return((h < 10) ? ("0"+h+":00 PM") : (h+":00 PM"));
        }else{
            return((hora < 10) ? ("0"+hora+":00 AM") : (hora+":00 AM"));
        } 
    }

    let horasDisponibles = [];

    for (let i=0; i <= 23; i++){
        horasDisponibles.push(i);
    }

    const handleChangeCheckIn = e => setHora(e.target.value) 

    /* Categoria*/

    const [categoryItems, setCategoryItems] = useState([])
    let categoriasDisponibles = [];
    useEffect(() => {
        if (data.isLoaded) {
            setCategoryItems(data.items);
        }
    }, [data.isLoaded, data.items]);

    categoryItems.forEach((item) => {
        categoriasDisponibles.push(item.titulo)
    })
    
    const handleChangeCategory = e => setOnChangeCategory(e.target.value) 

    console.log(caracteristicas)
    
    return (
        <>
            <HeaderSecundario>Administración</HeaderSecundario>
            <section className={styles.containerPrincipal}>
                <TituloBloque>Crear propiedad</TituloBloque>
                <p className={styles.camposObligatorios }>(Los campos identificados con * son obligatorios)</p>
                <form className={styles.formAdmin}>
                    <div className={styles.subContainer}>
                        <div className={styles.lineContainerInformacion}>
                            <InputComponent
                                estado={propertyName}
                                cambiarEstado={setPropertyName}
                                tipo="text"
                                label="* Nombre de la propiedad"
                                name="nombre"
                            />
                            <div className={styles.containerSelect}>
                                <label>* Categoría</label>
                                <select name="tituloCategoria" className={styles.minimal} onChange={handleChangeCategory} required>
                                    <option value="tituloCategoria" hidden></option>
                                    {categoriasDisponibles.map((h, i) => (
                                        <option value={h} key={`categoriaDisponible-${i}`}>{h}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className={styles.lineContainerInformacion}>
                            <InputComponent
                                estado={address}
                                cambiarEstado={setAddress}
                                tipo="text"
                                label="* Dirección"
                                name="direccion"
                            />

                            <div className={styles.containerSelect}>
                                <label>CheckIn (horario min)</label>
                                <select name="horarioCheckIn" className={styles.minimal} onChange={handleChangeCheckIn} >
                                    <option value="horarioCheckIn" hidden></option>
                                    {horasDisponibles.map((h, i) => (
                                        <option value={h} key={`horaDisponible-${i}`}>{horaFormat(h)}</option>
                                    ))}
                                </select>
                            </div>
                            
                        </div>
                        <div className={styles.lineContainerInformacion}>
                            <div className={styles.containerSelect}>
                                <label>* Ciudad</label>
                                <CityInput
                                    setOnChangeCity={setOnChangeCity}
                                    onChangeCity={onChangeCity}
                                    specificStyle1={stylesInputsFromOtherside.ocultar}
                                    specificStyle2={stylesInputsFromOtherside.inputFormDatos}
                                    specificStyle3={stylesInputsFromOtherside.divDrawer}
                                    setCountry={setCountry}
                                    autocompletadoInputCountry={autocompletadoInputCountry}
                                />
                            </div> 
                            
                            <InputComponent
                                estado={country}
                                cambiarEstado={setCountry}
                                tipo="text"
                                label="* País"
                                name="pais"
                            />

                        </div>
                        <div className={styles.lineContainerInformacion}>
                            <NumberInput
                                onChangeItem={latitud}
                                setOnChangeItem={setLatitud}
                                label="Latitud"
                                name="latitud"
                            />
                            <NumberInput
                                onChangeItem={longitud}
                                setOnChangeItem={setLongitud}
                                label="Longitud"
                                name="longitud"
                            />
                        </div>
                        <div className={`${styles.lineContainerInformacion}`}>
                            <div className={styles.containerSelect}>
                                <label>Descripción</label>
                                <textarea
                                    name="descripcion"
                                    id="descripcion"
                                    cols="30"
                                    rows="6"
                                    value={commentText}
                                    onChange={(e) => setCommentText(e.target.value)}
                                ></textarea>
                            </div>
                        </div>

                    </div>
                    <div className={styles.subContainer}>
                        <TituloBloque>Agregar atributos</TituloBloque>
                        <ul className={styles.checkboxes}>
                            {caracteristicas.map((caracteristica) => (
                                <li key={caracteristica.id}>
                                    <input
                                        type="checkbox"
                                        name="caracteristicas"
                                        id={caracteristica.id}
                                        value={caracteristica.nombre}
                                        //onClick={() => setCaracteritica(false)}
                                    />
                                    <label htmlFor={caracteristica.id}>
                                        <i className= {caracteristica.icono}></i>
                                        <span>{caracteristica.nombre}</span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.subContainer}>
                        <TituloBloque>Políticas del producto</TituloBloque>


                    </div>
                    <div></div>
                    <div></div>
                </form>
                

            </section>
        </>
    )
}