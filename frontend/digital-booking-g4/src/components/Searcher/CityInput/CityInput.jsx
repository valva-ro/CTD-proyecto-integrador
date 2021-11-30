import React, { useState, useRef, useEffect } from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import useClickOutside from "../../../hooks/useOnClickOutside";
import useFetch from "../../../hooks/useFetch.js";
import styles from "./CityInput.module.css";

export default function CityInput({ setOnChangeCity, onChangeCity, specificStyle1, specificStyle2, specificStyle3, setReset, reset, setDateRange}) {
  const [iconGps, setIconGps] = useState(styles.gpsEmpty);
  const [cityList, setCityList] = useState(null);
  const [inputContent, setInputContent] = useState("");
  const [ciudades, setCiudades] = useState([]);
  const wrapperRef = useRef(null);
  const data = useFetch("ciudades");
  useClickOutside(wrapperRef, () => setCityList(null));

  useEffect(() => {
    if (data.isLoaded) {
      setCiudades(data.items);
    }
  }, [data.isLoaded, data.items]);

  const changeIconStyle = (inputText) => {
    if (inputText === "") {
      setIconGps(styles.gpsEmpty);
    } else {
      setIconGps(styles.gps);
    }
  };

  const lister = (input) => {
    if (ciudades.length > 0) {
      setCityList(
        <DropDownMenu
          locations={ciudades}
          input={input}
          setCityList={setCityList}
          setOnChangeCity={setOnChangeCity}
        />
      );
    } else {
      setCityList(null);
    }
  };

  return (
    <>
      <div className={`${styles.cityContainer} ${specificStyle3}`} ref={wrapperRef}>
        {inputContent !== "" ? <div className={`${specificStyle3}`}>{cityList}</div> : ""}
        <span className={`${iconGps} ${specificStyle1}`}>
          <i className="fas fa-map-marker-alt"></i>
        </span>
        <input
          placeholder="¿A dónde vamos?"
          type="text"
          className={`${styles.input} ${specificStyle2}`}
          onKeyUp={(e) => {
            lister(e);
            changeIconStyle(e.target.value);
            setInputContent(e.target.value);
            if(reset){
              setReset(false);
              setDateRange([null, null])
            }
          }}
          onChange={(e) => {
              setOnChangeCity(e.target.value)
          }}
          value={reset ? "" : onChangeCity}
        />
      </div>
    </>
  );
}
