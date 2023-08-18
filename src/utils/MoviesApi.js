import { MOVIES_API } from "./config";

const checkResponse = (res) => {
  if (res.ok) return res.json();
  return Promise.reject(res.status);
};

export const getMovies = () => {
  return fetch(`${MOVIES_API}beatfilm-movies`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(checkResponse)
}