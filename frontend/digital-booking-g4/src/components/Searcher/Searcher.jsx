import React from "react";
import { useState, useEffect } from "react";
import styles from "./Searcher.module.css";
import FilledButton from "../Buttons/FilledButton";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
registerLocale("es", es);

export default function Searcher() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [quantityMonth, setQuantityMonth] = useState(2);
  const [iconGps, setIconGps] = useState(styles.gps);
  const [iconDate, setIconDate] = useState(styles.dateIcon);
  
  useEffect(() => {
    if (window.screen.width <= 480) {
      setQuantityMonth(1);
    } else {
      setQuantityMonth(2);
    }
  }, [quantityMonth]);

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

  return (
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
            type="search"
            className={styles.input}
            onKeyUp={(e) => onType(e)}
          />
        </div>

        <div className={styles.dateContainer}>
          <span className={iconDate}>
            <i class="far fa-calendar-alt"></i>
          </span>
        </div>
        <DatePicker
          onSelect={(e) => styleChangeClick(e)}
          onChangeRaw={(e) => styleChange(e)}
          dateFormat="dd/MM/yyyy"
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
        />

        <FilledButton>Buscar</FilledButton>
      </div>
    </div>
  );
}
