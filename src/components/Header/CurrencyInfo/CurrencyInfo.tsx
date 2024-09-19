import type {FC} from 'react';

import {useCurrencyInfo} from './useCurrencyInfo';

interface Props {
  code: string;
}

export const CurrencyInfo: FC<Props> = ({code}) => {
  const value = useCurrencyInfo(code);

  return (
    <div className="bg-white text-center p-4 rounded shadow-md">
      <p className="font-semibold text-lg">{code}</p>
      <span className="text-xl font-bold">{value}</span>
    </div>
  );
};
