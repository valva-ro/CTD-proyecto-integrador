import React, { useState, useEffect, useRef } from "react";
import FilledButton from "../Buttons/FilledButton";
import DatePicker, { registerLocale } from "react-datepicker";
import cities from "../../resources/cities.json"
import CityInput from "./CityInput/CityInput";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Searcher.module.css";

registerLocale("es", es);

export default function Searcher() {
  const [quantityMonth, setQuantityMonth] = useState(2);
  const [iconDate, setIconDate] = useState(styles.dateIcon);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
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
    if (!input.target.value === "") {
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

  return (
    <div className={styles.globalContainer}>
      <div className={styles.boxing}>
        <h2 className={styles.letter}>
          Busca ofertas en hoteles, casas y mucho más
        </h2>
        <div className={styles.inputs}>
          <CityInput/>
          <div className={styles.dateContainer}>
            <span className={iconDate}>
              <i className="far fa-calendar-alt"></i>
            </span>
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
            ref={(r) => (datePickerRef = r)}
          >
            <div className={styles.applyContainer}>
              <FilledButton onClick={() => closeCalendar()}>
                Aplicar
              </FilledButton>
            </div>
          </DatePicker>
          <FilledButton>Buscar</FilledButton>
        </div>
      </div>
    </div>
  );
}
