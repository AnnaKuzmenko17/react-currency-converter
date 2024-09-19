import {CurrencyInfo} from './components/CurrencyInfo';
import {HEADER_CURRENCIES} from './constants';
import {useHeader} from './useHeader';

export const Header = () => {
  const rates = useHeader();

  if (rates)
    return (
      <header>
        <h2>Actual rates</h2>
        <div>
          {HEADER_CURRENCIES.map((currencyCode) => (
            <CurrencyInfo
              key={currencyCode}
              code={currencyCode}
            />
          ))}
        </div>
      </header>
    );
};
