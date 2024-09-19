import {Input} from './Input/Input';
import {Select} from './Select/Select';
import {Currency} from './types';

export const Converter = () => {
  return (
    <div>
      <h1>Currency Converter</h1>

      <div>
        <h3>Source Currency</h3>
        <Select type={Currency.FIRST} />
        <Input type={Currency.FIRST} />
      </div>

      <div>
        <h3>Target Currency</h3>
        <Select type={Currency.SECOND} />
        <Input type={Currency.SECOND} />
      </div>

    </div>
  );
};
