import React, { useState, useRef } from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import useClickOutside from "../../../hooks/useOnClickOutside";
import cities from "../../../resources/cities.json";
import styles from "./CityInput.module.css";

export default function CityInput({ setOnChangeCity }) {
  const [iconGps, setIconGps] = useState(styles.gpsEmpty);
  const [cityList, setCityList] = useState(null);
  const [inputContent, setInputContent] = useState("");
  const wrapperRef = useRef(null);

  useClickOutside(wrapperRef, () => setCityList(null));

  const changeIconStyle = (inputText) => {
    if (inputText === "") {
      setIconGps(styles.gpsEmpty);
    } else {
      setIconGps(styles.gps);
    }
  };

  const lister = (input) => {
    if (cities.length > 0) {
      setCityList(
        <DropDownMenu
          locations={cities}
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
      <div className={styles.cityContainer} ref={wrapperRef}>
        {inputContent !== "" ? <div>{cityList}</div> : ""}
        <span className={iconGps}>
          <i className="fas fa-map-marker-alt"></i>
        </span>
        <input
          placeholder="¿A dónde vamos?"
          type="text"
          className={styles.input}
          onKeyUp={(e) => {
            lister(e);
            changeIconStyle(e.target.value);
            setInputContent(e.target.value);
          }}
          onChange={(e) => {
            setOnChangeCity(e.target.value);
          }}
        />
      </div>
    </>
  );
}
