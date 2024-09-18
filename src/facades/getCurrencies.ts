import {AxiosResponse} from 'axios';

import {httpService} from '@/services/httpsService';
import {ApiEndpoint, Currencies} from '@/types/types';

export const getRates = (): Promise<AxiosResponse<Currencies>> => httpService.get(ApiEndpoint.CURRENCIES);
