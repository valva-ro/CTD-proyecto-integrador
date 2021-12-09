import Imagen from "../Imagen/Imagen";

export default function RowImagenes({
  cantidadInputsImg,
  agregarImagen,
  eliminarImagen,
  subirImagen,
}) {
  return (
    <>
      {Array.apply(0, Array(cantidadInputsImg)).map((val, idx) => (
        <Imagen
          value={val}
          esImagenPrincipal={idx === 0}
          esUltimaImagen={idx === cantidadInputsImg - 1}
          cantidadInputsImg={cantidadInputsImg}
          subirImagen={subirImagen}
          agregarImagen={agregarImagen}
          eliminarImagen={eliminarImagen}
          key={`imagen-${idx}`}
        />
      ))}
    </>
  );
}
