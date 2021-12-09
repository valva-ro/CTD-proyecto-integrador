import backUrl from "../resources/backUrl"

export default async function deleteRequest(path = "", headers = { "Content-Type": "application/json" }) {
  const settings = {
    method: "DELETE",
    headers,
  };
  return await fetch(`${backUrl()}${path}`, settings);
}
