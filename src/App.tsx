import './styles/tailwindcss.scss';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components';
import RouteHandler from './routes';

const App = () => (
  <>
    <NavBar />
    <BrowserRouter>
      <RouteHandler />
    </BrowserRouter>
  </>
);

export default App;
