import {AxiosResponse} from 'axios';

import {httpService} from '@/services/httpsService';
import {ApiEndpoint, CurrencyCode, Rates} from '@/types/types';

interface Params {
  base_currency?: string;
}
export const getRates = ({base_currency = CurrencyCode.USD}: Params): Promise<AxiosResponse<{[key: string]: Rates}>> =>
  httpService.get(ApiEndpoint.LATEST, {
    params: {base_currency},
  });
