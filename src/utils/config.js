const REGEX_EMAIL = /^(\S+)@([a-z0-9-]+)(\.)([a-z]{2,4})(\.?)([a-z]{0,4})+$/gi;
const REGEX_FILTER = /[,.<>?;:'"!@#$%^&*()—_=+«»]/g;
const SEARCH_KEY = 'searchForm';
const TOKEN_KEY = 'token';
const MOVIES_API = 'https://api.nomoreparties.co/';
const BASE_URL = 'https://api.mirvada.nomoredomains.xyz';

const MOBILE = {
  width: 767,
  cardCount: 5,
  more: 2
}

const TABLET = {
  width: 1200,
  cardCount: 8,
  more: 2
}

const DESKTOP = {
  cardCount: 12,
  more: 3
}

export {
  REGEX_EMAIL,
  REGEX_FILTER,
  SEARCH_KEY,
  TOKEN_KEY,
  MOVIES_API,
  BASE_URL,
  MOBILE,
  TABLET,
  DESKTOP
};