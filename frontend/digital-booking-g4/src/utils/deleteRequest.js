export default async function deleteRequest(path = "", headers = { "Content-Type": "application/json" }) {
  const settings = {
    method: "DELETE",
    headers,
  };
  return await fetch(`http://localhost:8080/${path}`, settings);
}
