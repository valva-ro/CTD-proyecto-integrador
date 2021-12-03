export default async function get(path = "", headers = { "Content-Type": "application/json" }) {
  const settings = {
    headers,
  };
  let response = await fetch(`http://localhost:8080/${path}`, settings);
  return response.json();
}
