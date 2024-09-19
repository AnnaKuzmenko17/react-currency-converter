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
      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-accent"
    >
      {CURRENCY_OPTIONS.map((currency) => (
        <option
          key={currency}
          value={currency}
          selected={value === currency}
        >
          {currency}
        </option>
      ))}
    </select>
  );
};
