import {Input} from './Input/Input';
import {Select} from './Select/Select';
import {Currency} from './types';

export const Converter = () => {
  return (
    <div className="bg-white rounded p-6 shadow-md mt-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Currency Converter</h1>

      <div className="flex justify-center items-center mb-6 space-x-4">
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-2">Source Currency</h3>
          <Select type={Currency.FIRST} />
          <Input type={Currency.FIRST} />
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-2">Target Currency</h3>
          <Select type={Currency.SECOND} />
          <Input type={Currency.SECOND} />
        </div>
      </div>
    </div>
  );
};
