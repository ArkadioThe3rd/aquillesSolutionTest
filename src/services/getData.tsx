import axios from 'axios';

function getCards() {
  const response = axios.get('http://localhost:5000/cards');
  return response;
}

export default getCards;
