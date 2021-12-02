export default async function post(path = "", body = {}, headers = { "Content-Type": "application/json" }) {
  const settings = {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  };
  return await fetch(`http://3.133.206.239:8080/${path}`, settings);
}
