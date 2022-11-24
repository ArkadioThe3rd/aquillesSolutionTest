import { Route, Routes } from 'react-router-dom';
import { Home, Configuracion } from '../pages';

const RouteHandler = () => (
  <Routes>
    <Route path="/configuracion" element={<Configuracion />} />
    <Route path="*" element={<Home />} />
  </Routes>
);

export default RouteHandler;
