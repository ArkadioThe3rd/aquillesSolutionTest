import './styles/tailwindcss.scss';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components';
import RouteHandler from './routes';

const App = () => (
  <BrowserRouter>
    <div className="w-full h-full overflow-hidden flex flex-col">
      <NavBar />
      <RouteHandler />
    </div>
  </BrowserRouter>
);

export default App;
