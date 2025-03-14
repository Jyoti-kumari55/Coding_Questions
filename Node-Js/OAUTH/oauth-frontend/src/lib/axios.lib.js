import axios from 'axios';

export const authServerAxios = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_BASE_URL}`,
  withCredentials: true,
});

export const githubApiAxios = axios.create({
  baseURL: `${import.meta.env.VITE_GITHUB_API_BASE_URL}`,
});

export const googleApiAxios = axios.create({
  baseURL: `https://www.googleapis.com/oauth2/v2`,
});
