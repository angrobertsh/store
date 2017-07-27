import axios from 'axios';

const request = () => (
  axios.create({
    headers: {'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')},
    responseType: 'json'
  })
)

export default request;
