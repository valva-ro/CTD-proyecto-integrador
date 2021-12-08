export default function formatearFecha(date) {
  if (typeof date == "string" || date == null) {
    date = new Date(date);
  }
  const dateFormat = date
    .toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replaceAll("/", "-")
    .split("-")
    .reverse()
    .join("-");

  return dateFormat;
}
