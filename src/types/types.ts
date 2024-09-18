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

export enum CurrencyCode {
  EUR = 'EUR',
  USD = 'USD',
  JPY = 'JPY',
  CZK = 'CZC',
  GBP = 'GBP',
  PLN = 'PLN',
  AUD = 'AUD',
  CAD = 'CAD',
  CNY = 'CNA',
}

export interface Rates {
  [key: string]: number;
}
