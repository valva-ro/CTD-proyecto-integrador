import Imagen from "../Imagen/Imagen";

export default function RowImagenes({
  imagenesDetails,
  handleAdd,
  handleDelete,
  agregarImagen,
}) {
  return (
    <>
      {imagenesDetails.map((val, idx) => (
        <Imagen
          value={val}
          index={idx}
          agregarImagen={agregarImagen}
          handleAdd={handleAdd}
          handleDelete={handleDelete}
          key={`imagen-${idx}`}
        />
      ))}
    </>
  );
}
