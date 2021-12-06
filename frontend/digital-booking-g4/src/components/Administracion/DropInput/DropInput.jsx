import React, { useState, useRef, useEffect } from "react";
import DropDownRoom from "../DropDownRoom/DropDownRoom";
import useClickOutside from "../../../hooks/useOnClickOutside";
import useFetch from "../../../hooks/useFetch.js";
import styles from "./DropInput.module.css";

export default function DropInput({ setOnChangeItem, onChangeItem, label, pathname, placeholder, id, dataId}) {
  const [list, setList] = useState(null);
  const [inputContent, setInputContent] = useState("");
  const [dropItems, setDropItems] = useState([
    "Principal",
    "Habitación doble",
    "Habitación simple",
    "Baño",
    "Jacuzzi",
    "Cocina",
    "Hall de entrada",
    "Balcón",
    "Piscina",
    "Churrasquera",
    "Cochera",
    "Patio",
    "Sala de estar",
    "Comedor",
    "Recepción",
    "Ambientes compartidos"
  ]);
  const wrapperRef = useRef(null);
  //const data = useFetch(pathname);
  useClickOutside(wrapperRef, () => setList(null));

  /* useEffect(() => {
    if (data.isLoaded) {
      setDropItems(data.items);
    }
  }, [data.isLoaded, data.items]); */


  const lister = (input) => {
    if (dropItems.length > 0) {
      setList(
        <DropDownRoom
          rooms={dropItems}
          input={input}
          setList={setList}
          setOnChangeItem={setOnChangeItem}
        />
      );
    } else {
      setList(null);
    }
  };

  return (
    <div className={styles.containerDropInput}>
      <label className={styles.labelDropInput}>{label}</label>
      <div className={`${styles.cityContainer} ${styles.divDrawer}`} ref={wrapperRef}>
        {inputContent !== "" ? <div className={`${styles.divDrawer}`}>{list}</div> : ""}
        <input
          type="text"
          className={`${styles.input}`}
          onKeyUp={(e) => {
            lister(e);
            setInputContent(e.target.value);
          }}
          onChange={(e) => {
            setOnChangeItem(e.target.value)
          }}
          value={onChangeItem}
          placeholder={placeholder}
          id={id}
          dataId={dataId}
        />
      </div>
    </div >
  );
}
