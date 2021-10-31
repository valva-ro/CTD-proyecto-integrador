import React from "react";
import { ContenedorInput, Input, Label, LeyendaError } from "../FormElements";

export default function InputComponent({ tipo, label, name, onChange, leyendaError }) {
  return (
    <ContenedorInput>
      <Label>
        {label}
        <Input type={tipo} name={name} onChange={onChange} />
      </Label>
      <LeyendaError>{leyendaError}</LeyendaError>
    </ContenedorInput>
  );
}
