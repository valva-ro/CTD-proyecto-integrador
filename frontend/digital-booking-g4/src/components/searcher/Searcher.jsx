import React from 'react'
import { useState } from "react";
import styles from "./Searcher.module.css"
import FilledButton from "../Buttons/FilledButton"
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
registerLocale("es", es);


export default function Searcher() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const lupa=<span className={styles.gpsEmpty}><i class="fas fa-map-marker-alt"></i></span>
          
 const   onType = (input,lupa)=>{
 console.log(input.target.value);
 console.log( lupa.props.className);
/*  lupa.props.className="Searcher_gps__une68" *//* "Searcher_gpsEmpty__2J05D"
 */}

  return (
    <div className={styles.boxing}>

      <h2 className={styles.letter}>Busca ofertas en hoteles, casas y mucho más</h2>
      <div className={styles.inputs} >

        <div className={styles.cityContainer}>
        {lupa}
        
          <input placeholder="¿A dónde vamos?" type="search" className={styles.input} onKeyUp={(e)=>onType(e,lupa)} />
        </div>
        {/* <div className={styles.cityContainer}>
          <span className={styles.gps}><i class="far fa-calendar-alt"></i></span> 
 */}
          <DatePicker
            dateFormat="dd/MM/yyyy"
            placeholderText="Check in  -  Check out"
            locale={es}
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            shouldCloseOnSelect={false}
            monthsShown={2}
            onChange={(update) => {
              setDateRange(update);
            }}
          /> {/* 
        </div> */} 

        <FilledButton>Buscar</FilledButton>
      </div>
    </div>)
}