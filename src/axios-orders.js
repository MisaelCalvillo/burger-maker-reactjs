import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-misa.firebaseio.com/' 
});

export default instance;