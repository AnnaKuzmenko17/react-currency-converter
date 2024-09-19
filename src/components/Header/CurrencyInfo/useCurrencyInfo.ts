import {formatCurrency} from '@/services/helpers';
import {useStore} from '@/store/useStore';

export const useCurrencyInfo = (currencyCode: string) => {
  const {rates} = useStore();

  return formatCurrency(rates[currencyCode]);
};
