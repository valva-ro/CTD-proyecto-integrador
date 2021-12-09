import React from "react";

import "./LinkListTutorial.css";
//link al tutorial
const LinkListTutorial = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-listTutorial-item">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="link-listTutorial-item-url"
      >
        {link.text}
      </a>
    </li>
  ));

  return <ul className="link-listTutorial">{linkMarkup}</ul>;
};

export default LinkListTutorial;