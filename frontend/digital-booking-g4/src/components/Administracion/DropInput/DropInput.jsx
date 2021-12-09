import React, { useState, useRef } from "react";
import DropDownRoom from "../DropDownRoom/DropDownRoom";
import useClickOutside from "../../../hooks/useOnClickOutside";
import styles from "./DropInput.module.css";

export default function DropInput({
  setOnChangeItem,
  onChangeItem,
  label,
  pathname,
  placeholder,
  id,
  dataId,
  value = null,
  disabled = false,
}) {
  const [list, setList] = useState(null);
  const [inputContent, setInputContent] = useState("");
  const dropItems = [
    "Principal",
    "Habitación doble",
    "Habitación simple",
    "Baño",
    "Jacuzzi",
    "Cocina",
    "Hall de entrada",
    "Balcón",
    "Piscina",
    "Parrilla",
    "Cochera",
    "Patio",
    "Sala de estar",
    "Comedor",
    "Recepción",
    "Ambientes compartidos",
  ];
  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, () => setList(null));

  const lister = (input) => {
    if (dropItems.length > 0 && !disabled) {
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
      {label != null ? (
        <label className={styles.labelDropInput}>{label}</label>
      ) : null}
      <div
        className={`${styles.cityContainer} ${styles.divDrawer}`}
        ref={wrapperRef}
      >
        {inputContent !== "" ? (
          <div className={`${styles.divDrawer}`}>{list}</div>
        ) : (
          ""
        )}
        {!disabled ? (
          <input
            type="text"
            className={`${styles.input}`}
            onKeyUp={(e) => {
              lister(e);
              setInputContent(e.target.value);
            }}
            onChange={(e) => {
              setOnChangeItem(e.target.value);
            }}
            value={onChangeItem}
            placeholder={placeholder}
            autoComplete="off"
          />
        ) : (
          <input
            type="text"
            className={`${styles.input}`}
            value={value}
            disabled={disabled}
          />
        )}
      </div>
    </div>
  );
}
