export default async function post(path = "", body = {}) {
  const settings = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  let response = await fetch(`http://localhost:8080/${path}`, settings);
  return response.json();
}
