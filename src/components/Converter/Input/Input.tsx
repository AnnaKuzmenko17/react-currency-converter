import {type FC} from 'react';

import {Currency} from '../types';
import {useInput} from './useInput';

interface Props {
  type: Currency;
}

export const Input: FC<Props> = ({type}) => {
  const {handleChange, label, value, placeholder} = useInput(type);

  return (
    <div>
      <label>{label} Amount</label>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        min="0"
      />
    </div>
  );
};
