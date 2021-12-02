import backUrl from "../resources/backUrl"

export default async function get(path = "") {
  const settings = {
    headers: { "Content-Type": "application/json" },
  };
  let response = await fetch(backUrl() + path, settings);
  return response.json();
}
