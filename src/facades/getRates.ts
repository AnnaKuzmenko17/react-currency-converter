import {AxiosResponse} from 'axios';

import {httpService} from '@/services/httpsService';
import {ApiEndpoint, Rates} from '@/types/types';

interface Params {
  base_currency?: string;
}
export const getRates = ({base_currency = 'USD'}: Params): Promise<AxiosResponse<Rates>> =>
  httpService.get(ApiEndpoint.LATEST, {
    params: {base_currency},
  });
