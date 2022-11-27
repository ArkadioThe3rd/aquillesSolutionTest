import Axios from 'axios';
import { IServicioDataBase } from './interface';

async function ModificarData({
  name,
  code,
  type,
  description,
  active,
  id,
}: IServicioDataBase) {
  const peticion = Axios({
    method: 'put',
    url: `http://localhost:5000/configs/${id}`,
    data: {
      name,
      code,
      type,
      description,
      active,
    },
  });
  return peticion;
}

export default ModificarData;
