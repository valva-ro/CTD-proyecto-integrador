import React from "react";
import {
  ContenedorInput,
  GrupoInput,
  Input,
  Label,
  LeyendaError,
  IconoOjoClave,
} from "../FormElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function InputComponent({
  estado,
  cambiarEstado,
  tipo,
  label,
  name,
  expresionRegular,
  leyendaError,
  funcion,
  tieneIcono,
}) {
  const onChange = (e) => {
    cambiarEstado({ ...estado, campo: e.target.value.trim() });
  };

  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        cambiarEstado({ ...estado, valido: "true" });
      } else {
        cambiarEstado({ ...estado, valido: "false" });
      }
    }

    if (funcion) {
      funcion();
    }
  };

  return (
    <ContenedorInput>
      <Label valido={estado.valido}>
        {label}
        <GrupoInput>
          <Input
            type={tipo}
            name={name}
            value={estado.campo}
            onChange={onChange}
            onKeyUp={validacion}
            onBlur={validacion}
            valido={estado.valido}
          />
          {tieneIcono ? <IconoOjoClave icon={faEyeSlash} /> : null}
        </GrupoInput>
      </Label>
      <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </ContenedorInput>
  );
}
