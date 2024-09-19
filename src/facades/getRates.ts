import {AxiosResponse} from 'axios';

import {httpService} from '@/services/httpsService';
import {ApiEndpoint, Rates} from '@/types/types';

interface RatesData {
  data: Rates;
}

export const getRates = (): Promise<AxiosResponse<RatesData>> => httpService.get(ApiEndpoint.LATEST);
