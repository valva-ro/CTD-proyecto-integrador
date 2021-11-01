import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colores = {
  error: "#bb2929",
  exito: "#1ed12d",
};

const ContenedorInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const GrupoInput = styled.div`
  position: relative;
  z-index: 90;
`;

const Label = styled.label`
  color: var(--color-2);
  font-weight: 700;
  margin-top: 20px;
  cursor: pointer;

  ${(props) =>
    props.valido === "false" &&
    css`
      color: ${colores.error};
    `}
`;

const Input = styled.input`
  background-color: var(--color-5);
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  color: var(--color-2);
  font-size: 1rem;
  padding: 10px 40px 10px 15px;
  width: 100%;
  margin-top: 5px;
  transition: 0.3s ease all;

  ${(props) =>
    props.valido === "true" &&
    css`
      border: 3px solid trasnparent;
    `}

  ${(props) =>
    props.valido === "false" &&
    css`
      border: 3px solid ${colores.error} !important;
    `}
`;

//Falta ver como evitar que el texto estire el input
const LeyendaError = styled.p`
  text-align: start;
  color: ${colores.error};
  margin-top: 5px;
  display: none;

  ${(props) =>
    props.valido === "true" &&
    css`
      display: none;
    `}

  ${(props) =>
    props.valido === "false" &&
    css`
      display: block;
    `}
`;

const IconoOjoClave = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  bottom: 12px;
  z-index: 100;
  font-size: 18px;
  color: #bebebe;
  cursor: pointer;
  transition: color ease .2s;

  &:hover {
    color: var(--color-2);
  }
`;

export {
  Label,
  Input,
  LeyendaError,
  ContenedorInput,
  GrupoInput,
  IconoOjoClave,
};
