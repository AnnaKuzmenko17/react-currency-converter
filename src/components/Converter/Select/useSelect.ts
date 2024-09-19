import {type ChangeEvent} from 'react';

import {useStore} from '@/store/useStore';

import {Currency} from '../types';

export const useSelect = (type: Currency) => {
  const {setFirstCurrency, setSecondCurrency, firstCurrency, secondCurrency} = useStore();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = e.target.value;

    if (type === Currency.FIRST) {
      setFirstCurrency(selectedCurrency);
    } else {
      setSecondCurrency(selectedCurrency);
    }
  };

  const value = type === Currency.FIRST ? firstCurrency : secondCurrency;

  return {handleChange, value};
};
