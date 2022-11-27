import Axios from 'axios';
import { IConfiguracionDataBase } from './interface';

async function CreateData({
  name,
  code,
  type,
  description,
  active,
}: IConfiguracionDataBase) {
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
