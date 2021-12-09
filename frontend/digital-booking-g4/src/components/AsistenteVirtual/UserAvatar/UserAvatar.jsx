import React from "react";
import "./UserAvatar.css";
import image from "../../../assets/avatar.png";

/*ordeno y muestro el avatar del usuario*/
function UserAvatar() {
  return <img src={image} className="user-avatar" alt="Avatar de usuario" />;
}

export default UserAvatar;
