import backUrl from "../resources/backUrl"

export default async function get(path = "", headers = { "Content-Type": "application/json" }) {
  const settings = {
    headers,
  };
  let response = await fetch(backUrl() + path, settings);
  return response.json();
}
