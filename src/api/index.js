import httpClient from './httpClient';
import destinationsApi from './destinationsApi';

export function apiFactory(http) {
  return {
    ideas: destinationsApi(http),
  };
}

const host = process.env.NODE_ENV === 'development' ? 'http://localhost:3500' : '';
const http = httpClient(`${host}/api/`);

export const api = apiFactory(http);
