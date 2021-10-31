import styled from "styled-components";

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

const Label = styled.label`
  color: var(--color-2);
  font-weight: 700;
  margin-top: 20px;
  cursor: pointer;
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
`;

//Falta ver como evitar que el texto estire el input
const LeyendaError = styled.p`
  text-align: start;
  color: ${colores.error};
  margin-top: 5px;
  display: none;
`;

export { Label, Input, LeyendaError, ContenedorInput };
