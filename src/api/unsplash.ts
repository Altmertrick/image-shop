import axios from 'axios';

export const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Z2exYemUYUHUCjgX5OtzB_gwmX6R53GvpmfgrjIrqUY',
  },
});
