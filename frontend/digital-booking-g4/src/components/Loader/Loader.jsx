import React from "react";
import styles from "./Loader.module.css";

export default function Loader({ style }) {
  return (
    <div className={`${styles.containerLoader} ${style}`}>
      <div className={styles.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
