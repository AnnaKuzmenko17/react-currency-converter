import {Rates} from '@/types/types';

export interface StoreState {
  rates: Rates;
  firstCurrency: string;
  secondCurrency: string;
  firstCurrencyAmount: number;
  secondCurrencyAmount: number;
  setRates: (rates: Rates) => void;
  setFirstCurrency: (currency: string) => void;
  setSecondCurrency: (currency: string) => void;
  setFirstCurrencyAmount: (amount: number) => void;
  setSecondCurrencyAmount: (amount: number) => void;
}
