import Axios from 'axios';
import { IConfiguracionMaquina } from '../components/configuracionMaquina';

interface IModificarData extends IConfiguracionMaquina {
  id: number;
}

async function ModificarData({
  name,
  code,
  type,
  description,
  active,
  id,
}: IModificarData) {
  const peticion = Axios({
    method: 'post',
    url: `http://localhost:5000/configs/:${id}`,
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
