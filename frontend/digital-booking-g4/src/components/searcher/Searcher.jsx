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
  const [quantityMonth, setQuantityMonth ]= useState(2)
  const [iconCss, setIconCss]= useState(styles.gps)
  
/*   if(window.screen.with<=460){
setQuantityMonth(2)
  }else{
    setQuantityMonth(1)
  } */
  
 const   onType = (input)=>{
 if (!input.target.value==""){
 setIconCss(styles.gpsEmpty)}else{
   setIconCss(styles.gps)
 }
}

  return (
    <div className={styles.boxing}>

      <h2 className={styles.letter}>Busca ofertas en hoteles, casas y mucho más</h2>
      <div className={styles.inputs} >

        <div className={styles.cityContainer}>
        <span className={iconCss  }><i class="fas fa-map-marker-alt"></i></span>

        
          <input placeholder="¿A dónde vamos?" type="search" className={styles.input} onKeyUp={(e)=>onType(e)} />
        </div>
       
     
 <div className={styles.dateContainer}>
 {/* <span className={styles.gps}><i class="far fa-calendar-alt"></i></span> 
  */}         <DatePicker
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
</div>
        <FilledButton>Buscar</FilledButton>
      </div>
    </div>)
}