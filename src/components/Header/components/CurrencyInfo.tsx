import type {FC} from 'react';

import {useCurrencyInfo} from './useCurrencyInfo';

interface Props {
  code: string;
}

export const CurrencyInfo: FC<Props> = ({code}) => {
  const value = useCurrencyInfo(code);

  return (
    <div>
      <p>{code}</p>
      <span>{value}</span>
    </div>
  );
};
