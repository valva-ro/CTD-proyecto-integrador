import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "./Searcher.module.css";
import FilledButton from "../Buttons/FilledButton";
import DatePicker, { registerLocale } from "react-datepicker";
import cities from "./cities.json"
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";


registerLocale("es", es);

export default function Searcher() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [quantityMonth, setQuantityMonth] = useState(2);
  const [iconGps, setIconGps] = useState(styles.gps);
  const [iconDate, setIconDate] = useState(styles.dateIcon);
  const [cityList, setCitylist] = useState(null)
  let datePickerRef = useRef(null);

  useEffect(() => {
    if (window.screen.width <= 480) {
      setQuantityMonth(1);
    } else {
      setQuantityMonth(2);
    }
  }, [quantityMonth]);

  const closeCalendar = () => {
    datePickerRef.setOpen(false);
  };

  const styleChange = (input) => {

    if (!input.target.value == "") {
      setIconDate(styles.dateIconEmpty);
    } else {
      setIconDate(styles.dateIcon);
    }
  };

  const styleChangeClick = (input) => {
    if (input !== false) {
      setIconDate(styles.dateIconEmpty);
    } else {
      setIconDate(styles.dateIcon);
    }
  };

  const onType = (input) => {

    if (!input.target.value == "") {
      setIconGps(styles.gpsEmpty);
    } else {
      setIconGps(styles.gps);
    }
  };
  const lister = (input) => {
    const validate = (frase) => {
      if (frase.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .includes((input.target.value).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
        && input.target.value != "") {
        return true
      } else {
        return false
      }
    }
    const newLocations = cities.filter(location =>
      validate(location.country)
      || validate(location.city)
      || validate(location.city + " " + location.country)
      || validate(location.country + " " + location.city)
    )
    const setInput= (input,city) =>{
      input.target.value=city.city+", "+city.country
      setCitylist(null)
    }
    if (newLocations.length > 0) {
      setCitylist(<ul className={styles.cities} onBlur={()=>setCitylist(null)}>
        {newLocations.map((city, index) => {
          return <li key={index} onClick={()=> setInput(input,city)}>

            <i class="fas fa-map-marker-alt"></i>
            <div className={styles.searchWords}>
              <p className={styles.city}>{city.city}</p >
              <p className={styles.country}>{city.country}</p>
            </div>
          </li>
        })}
      </ul>)
    

    } else {
      setCitylist(null)
     
    }


  }

  return (<div className={styles.globalContainer}>
    <div className={styles.boxing}>
      <h2 className={styles.letter}>
        Busca ofertas en hoteles, casas y mucho más
      </h2>
      <div className={styles.inputs}>
        <div className={styles.cityContainer}>
          <span className={iconGps}>
            <i class="fas fa-map-marker-alt"></i>
          </span>
          <input
            placeholder="¿A dónde vamos?"
            type="text"
            onblur={()=> console.log("123")}
            className={styles.input}
            onKeyUp={(e) => lister(e, onType(e))}
            
          />


        </div>

        <div className={styles.dateContainer}>
          <span className={iconDate}>
            <i className="far fa-calendar-alt"></i>
          </span>
          {cityList}
        </div>
        <DatePicker
          onSelect={(e) => styleChangeClick(e)}
          onChangeRaw={(e) => styleChange(e)}
          dateFormat="dd 'de' MMM."
          placeholderText="Check in  -  Check out"
          locale={es}
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          shouldCloseOnSelect={false}
          monthsShown={quantityMonth}
          onChange={(update) => {
            setDateRange(update);
          }}
          ref={(r) => datePickerRef = r}
        >
          <div className={styles.applyContainer}>
            <FilledButton onClick={() => closeCalendar()}>Aplicar</FilledButton>
          </div>
        </DatePicker>
        <FilledButton>Buscar</FilledButton>

      </div>

    </div>

  </div>
  );
}
