export enum ApiEndpoint {
  LATEST = '/latest',
  CURRENCIES = '/currencies',
}

export interface Currency {
  'symbol': string;
  'name': string;
  'symbol_native': string;
  'decimal_digits': number;
  'rounding': number;
  'code': string;
  'name_plural': string;
}

export interface Currencies {
  [key: string]: Currency;
}

export interface Rates {
  [key: string]: number;
}
