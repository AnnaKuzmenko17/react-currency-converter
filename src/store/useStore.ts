import {create} from 'zustand';

import {calculateCurrencyAmount} from '@/services/helpers';

import {StoreState} from './types';

export const useStore = create<StoreState>((set, get) => ({
  rates: {'USD': 1},
  firstCurrency: 'USD',
  secondCurrency: 'USD',
  firstCurrencyAmount: 1,
  secondCurrencyAmount: 1,
  setRates: (rates) =>
    set({
      rates: rates,
    }),
  setFirstCurrency: (currency) => {
    const {rates, secondCurrency, firstCurrencyAmount} = get();
    set({
      firstCurrency: currency,
      secondCurrencyAmount: calculateCurrencyAmount(firstCurrencyAmount, rates, currency, secondCurrency),
    });
  },
  setFirstCurrencyAmount: (amount) => {
    const {rates, secondCurrency, firstCurrency} = get();
    set({
      firstCurrencyAmount: amount,
      secondCurrencyAmount: calculateCurrencyAmount(amount, rates, firstCurrency, secondCurrency),
    });
  },
  setSecondCurrency: (currency) => {
    const {rates, firstCurrency, secondCurrencyAmount} = get();
    set({
      secondCurrency: currency,
      firstCurrencyAmount: calculateCurrencyAmount(secondCurrencyAmount, rates, currency, firstCurrency),
    });
  },
  setSecondCurrencyAmount: (amount) => {
    const {rates, firstCurrency, secondCurrency} = get();
    set({
      secondCurrencyAmount: amount,
      firstCurrencyAmount: calculateCurrencyAmount(amount, rates, secondCurrency, firstCurrency),
    });
  },
}));
