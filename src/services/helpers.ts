import {Rates} from '@/types/types';

const formatCurrency = (value: number): number => {
  return parseFloat(value.toFixed(2));
};

export const calculateCurrencyAmount = (amount: number, rates: Rates, from: string, to: string) => {
  return formatCurrency((amount * rates[to]) / rates[from]);
};
