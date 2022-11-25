import Axios from 'axios';

async function getConfiguration() {
  const response = Axios.get('http://localhost:5000/configs');
  return response;
}

export default getConfiguration;
