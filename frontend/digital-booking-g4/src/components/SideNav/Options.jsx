import React from "react"

export default function Options(props){
    return(
        <p onClick={props.onClick}>{props.contenido}</p>
    )
}