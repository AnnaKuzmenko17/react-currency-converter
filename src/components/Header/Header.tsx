import {CURRENCY_OPTIONS} from './constants';
import {CurrencyInfo} from './CurrencyInfo/CurrencyInfo';
import {useHeader} from './useHeader';

export const Header = () => {
  const rates = useHeader();

  if (!rates) return null;

  return (
    <header className="bg-primary text-black p-4 rounded shadow">
      <div className="flex justify-center gap-2">
        {CURRENCY_OPTIONS.map((currencyCode) => (
          <CurrencyInfo
            key={currencyCode}
            code={currencyCode}
          />
        ))}
      </div>
    </header>
  );
};
