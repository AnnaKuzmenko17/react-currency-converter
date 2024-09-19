import {CurrencyCode, Rates} from '@/types/types';

export const calculateCurrencyAmount = (amount: number, rates: Rates, from: CurrencyCode, to: CurrencyCode) => {
  return (amount * rates[to]) / rates[from];
};
