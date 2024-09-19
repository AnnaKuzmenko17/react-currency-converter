import {type ChangeEvent} from 'react';

import {useStore} from '@/store/useStore';

import {Currency} from '../types';

export const useInput = (type: Currency) => {
  const {
    firstCurrency,
    secondCurrency,
    setFirstCurrencyAmount,
    setSecondCurrencyAmount,
    firstCurrencyAmount,
    secondCurrencyAmount,
  } = useStore();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (type === Currency.FIRST) {
      setFirstCurrencyAmount(value);
    } else {
      setSecondCurrencyAmount(value);
    }
  };

  const label = type === Currency.FIRST ? firstCurrency : secondCurrency;
  const value = type === Currency.FIRST ? firstCurrencyAmount : secondCurrencyAmount;
  const placeholder = `Enter ${type === Currency.FIRST ? firstCurrency : secondCurrency} amount`;

  return {
    handleChange,
    label,
    value,
    placeholder,
  };
};
