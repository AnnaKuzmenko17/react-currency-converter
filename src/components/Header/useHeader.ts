import {useEffect} from 'react';

import {getRates} from '@/facades/getRates';
import {useStore} from '@/store/useStore';

export const useHeader = () => {
  const {rates, setRates} = useStore();

  useEffect(() => {
    const fetchRates = async () => {
      const response = await getRates();
      const rates = response.data.data;
      setRates(rates);
    };

    fetchRates();
  }, []);

  return rates;
};
