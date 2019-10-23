import axios from 'axios';
import { refreshToken } from 'Actions/Authorize';

const fetchAlbum = async (albumId) => {
  const url = `${process.env.SPOTIFY_API}/albums/${albumId}`;
  await refreshToken();
  const request = await axios.get(url, {
    params: {
      id: albumId,
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return request;
};

export default fetchAlbum;
