import axios from 'axios';

import {BASE_URL} from '@/constants/constants';

const apikey = import.meta.env.VITE_CURRENCY_API_KEY;

export const httpService = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey,
  },
  headers: {
    'Content-Type': 'application/json',
  },
});
