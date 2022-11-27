import Axios from 'axios';

async function DeleteData(id: number) {
  const peticion = Axios.delete(`http://localhost:5000/configs/:${id}`);
  return peticion;
}

export default DeleteData;
