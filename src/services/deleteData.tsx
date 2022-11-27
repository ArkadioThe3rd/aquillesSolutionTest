import Axios from 'axios';

async function DeleteData(id: number) {
  const peticion = Axios.delete(`http://localhost:5000/configs/${id}`);
  console.log(peticion);
  return peticion;
}

export default DeleteData;
