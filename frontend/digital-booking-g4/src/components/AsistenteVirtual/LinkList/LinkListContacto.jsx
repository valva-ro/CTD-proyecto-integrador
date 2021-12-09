import React from "react";

import "./LinkListContacto.css";
//link al contacto
const LinkListContacto = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-listContacto-item">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="link-listContacto-item-url"
      >
        {link.text}
      </a>
    </li>
  ));

  return <ul className="link-listContacto">{linkMarkup}</ul>;
};

export default LinkListContacto;