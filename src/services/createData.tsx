import Axios from 'axios';
import { IConfiguracionMaquina } from '../components/configuracionMaquina';

async function CreateData({
  name,
  code,
  type,
  description,
  active,
}: IConfiguracionMaquina) {
  const peticion = Axios({
    method: 'post',
    url: 'http://localhost:5000/configs',
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

export default CreateData;
