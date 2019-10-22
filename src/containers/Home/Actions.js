import axios from 'axios';
import { refreshToken } from 'Actions/Authorize';

const search = async (value) => {
  const url = `${process.env.SPOTIFY_API}/search`;
  await refreshToken();
  const request = await axios.get(url, {
    params: {
      q: value,
      type: 'album,track',
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return request;
};

export default search;
