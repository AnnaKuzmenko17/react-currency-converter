import type {FC} from 'react';

interface Props {
  code: string;
  value: number;
}

export const CurrencyInfo: FC<Props> = ({code, value}) => {
  return (
    <div>
      <p>{code}</p>
      <span>{value}</span>
    </div>
  );
};
