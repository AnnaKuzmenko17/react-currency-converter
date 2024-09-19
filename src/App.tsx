import {Converter} from './components/Converter/Converter';
import {Header} from './components/Header/Header';

export const App = () => {
  return (
    <div className="min-h-screen bg-basic p-4">
      <Header />
      <Converter />
    </div>
  );
};
