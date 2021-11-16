import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerFijo}>
      <div className={styles.contenedorFooter}>
        <div className={styles.footerIzquierda}>
          <p>©2021 Hosting Book</p>
        </div>
        <div className={styles.footerDerecha}>
          <a
            className={styles.linkRedSocial}
            href="https://www.facebook.com/HostingBook-104939168676273"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-facebook-circle"></i>
          </a>
          <a
            className={styles.linkRedSocial}
            href="https://www.linkedin.com/in/hostingbook/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            className={styles.linkRedSocial}
            href="https://twitter.com/Hosting_Book"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            className={styles.linkRedSocial}
            href="https://www.instagram.com/hostingbook/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram-alt"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}