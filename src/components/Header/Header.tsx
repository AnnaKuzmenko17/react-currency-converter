import {CurrencyInfo} from './components/CurrencyInfo';
import {useHeader} from './useHeader';

export const Header = () => {
  const rates = useHeader();

  if (rates)
    return (
      <header>
        <h2>Actual rates</h2>
        <div>
          {Object.entries(rates).map(([key, value]) => (
            <CurrencyInfo
              key={key}
              code={key}
              value={value}
            />
          ))}
        </div>
      </header>
    );
};
