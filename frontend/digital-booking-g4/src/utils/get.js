export default async function get(path = "") {
  const settings = {
    headers: { "Content-Type": "application/json" },
  };
  let response = await fetch(`http://3.133.206.239:8080/${path}`, settings);
  return response.json();
}
