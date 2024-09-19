import {type FC} from 'react';

import {Currency} from '../types';
import {useInput} from './useInput';

interface Props {
  type: Currency;
}

export const Input: FC<Props> = ({type}) => {
  const {handleChange, value, placeholder} = useInput(type);

  return (
    <div className="mb-4">
      <input
        type="number"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        min="0"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-accent"
      />
    </div>
  );
};
