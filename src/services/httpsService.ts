import axios from 'axios';

import {BASE_URL} from '@/constants/constants';

const apiKey = import.meta.env.VITE_CURRENCY_API_KEY;

export const httpService = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey,
  },
  headers: {
    'Content-Type': 'application/json',
  },
});
