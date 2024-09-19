import {CurrencyInfo} from './components/CurrencyInfo';
import {CURRENCY_OPTIONS} from './constants';
import {useHeader} from './useHeader';

export const Header = () => {
  const rates = useHeader();

  if (rates)
    return (
      <header>
        <h2>Actual rates</h2>
        <div>
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
