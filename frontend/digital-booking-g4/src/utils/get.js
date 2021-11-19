export default async function get(path = "") {
  const settings = {
    headers: { "Content-Type": "application/json" },
  };
  let response = await fetch(`http://localhost:8080/${path}`, settings);
  return response.json();
}
