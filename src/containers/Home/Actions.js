import axios from 'axios';

const search = async (value) => {
  const url = `${process.env.SPOTIFY_API}/search`;
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
