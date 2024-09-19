import {type ChangeEvent, type KeyboardEvent} from 'react';

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

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (type === Currency.FIRST) {
      if (e.key === 'ArrowUp') {
        setFirstCurrencyAmount(firstCurrencyAmount + 1);
      }
      if (e.key === 'ArrowDown') {
        setFirstCurrencyAmount(Math.max(0, firstCurrencyAmount - 1));
      }
    } else {
      if (e.key === 'ArrowUp') {
        setSecondCurrencyAmount(secondCurrencyAmount + 1);
      }
      if (e.key === 'ArrowDown') {
        setSecondCurrencyAmount(Math.max(0, secondCurrencyAmount - 1));
      }
    }
  };

  const value = type === Currency.FIRST ? firstCurrencyAmount : secondCurrencyAmount;
  const placeholder = `Enter ${type === Currency.FIRST ? firstCurrency : secondCurrency} amount`;

  return {
    handleChange,
    handleKeyDown,
    value,
    placeholder,
  };
};
