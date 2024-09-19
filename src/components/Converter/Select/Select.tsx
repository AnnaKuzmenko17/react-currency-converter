import {type FC} from 'react';

import {CURRENCY_OPTIONS} from '../constants';
import {Currency} from '../types';
import {useSelect} from './useSelect';

interface Props {
  type: Currency;
}

export const Select: FC<Props> = ({type}) => {
  const {value, handleChange} = useSelect(type);

  return (
    <select
      value={value}
      onChange={handleChange}
    >
      {CURRENCY_OPTIONS.map((currency) => (
        <option
          key={currency}
          value={currency}
        >
          {currency}
        </option>
      ))}
    </select>
  );
};
