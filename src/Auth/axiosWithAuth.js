import axios from 'axios';

export default function () {
  const token = localStorage.getItem('token');
  return axios.create({
    headers: {
      'Authorization': 'token',
      'credentials': 'include',
      'Access-Control-Allow-Origin': 'https://how-to-1.netlify.app'
    }
  })
}
