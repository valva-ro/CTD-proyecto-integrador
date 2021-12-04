export default function formatearFecha(date) {
    const dateFormat = new Date(date)
        .toLocaleDateString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        })
        .replaceAll("/", "-")
        .split("-")
        .reverse()
        .join("-")

    return dateFormat;
}