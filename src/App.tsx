import './styles/tailwindcss.scss';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components';
import RouteHandler from './routes';

/**
 * Se crea una estructura del proyecto por medio de carpetas y index para facilitar su exportación
 * y lectura, y no encurrir en código monolitico.
 */

const App = () => (
  <BrowserRouter>
    <div className="w-full h-full overflow-hidden flex flex-col">
      <NavBar />
      <RouteHandler />
    </div>
  </BrowserRouter>
);

export default App;
