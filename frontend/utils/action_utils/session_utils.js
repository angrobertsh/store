import axios from 'axios';

export const login = (merchant) => (
  axios.post(`api/session/create`, { params: {
    merchant: merchant
  }})
);
