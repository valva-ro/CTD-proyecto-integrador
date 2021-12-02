import backUrl from "../resources/backUrl"

export default async function post(path = "", body = {}, headers = { "Content-Type": "application/json" }) {
  const settings = {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  };
  return await fetch(backUrl() + path, settings);
}
