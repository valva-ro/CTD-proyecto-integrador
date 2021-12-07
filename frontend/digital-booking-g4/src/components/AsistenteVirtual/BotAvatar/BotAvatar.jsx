import React from "react";
import "./BotAvatar.css";
import botavatar from "../../../assets/bot.png";

/*ordeno y muestro el avatar de Marco*/
function BotAvatar() {
  return <img src={botavatar} alt="Avatar de MarcoBot" className="my-avatar" />;
}

export default BotAvatar;
