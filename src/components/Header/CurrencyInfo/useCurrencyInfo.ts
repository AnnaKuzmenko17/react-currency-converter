import {useStore} from '@/store/useStore';

export const useCurrencyInfo = (currencyCode: string) => {
  const {rates} = useStore();

  return rates[currencyCode];
};
