import {useEffect, useState} from 'react';

import {getRates} from '@/facades/getRates';
import {Rates} from '@/types/types';

export const useHeader = () => {
  const [rates, setRates] = useState<Rates | null>(null);

  useEffect(() => {
    const fetchRates = async () => {
      const response = await getRates({});
      const rates = response.data.data;
      setRates(rates);
    };

    fetchRates();
  }, []);

  return rates;
};
