import { MOVIES_API } from "./config";

const checkResponse = (res) => {
  if (res.ok) return res.json();
  return Promise.reject(res.status);
};

export const getMovies = (token) => {
  return fetch(`${MOVIES_API}beatfilm-movies`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
    .then(checkResponse)
}