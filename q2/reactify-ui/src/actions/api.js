import { urls } from "./constants";
import { getToken } from "../components/Validator/Validator";
export const Api = (url, body, type) => {
  const headers = {
    "Content-Type": "application/json",
    "Authorization": getToken()? "Token " + getToken(): undefined
  }

  let data = fetch(urls.SERVER_URL + url, {
    method: type,
    headers,
    body: JSON.stringify(body)
  })
    .then((response) => {
      return response.json()
    })
    .then(response => {
      return response
    })
    .catch(error => {
      throw new Error('Something went wrong');
    });
  return data;
}
