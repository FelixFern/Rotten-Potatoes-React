import { createContext } from 'react';

const API_KEY = 'api_key=4a2f5c42b8d2cf6178787473ff9d8970';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;

export const wishListContext = createContext({})
export const modalContext = createContext({})
export const searchContext = createContext({API_URL})