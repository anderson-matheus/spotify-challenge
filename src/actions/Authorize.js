import axios from 'axios';
import qs from 'qs';

export const authorize = () => {
  if (window.location.href.indexOf('code') === -1) {
    if (localStorage.getItem('CODE') === null) {
      const responseType = 'code';
      window.location.href = `${process.env.SPOTIFY_ACCOUNT}/authorize?response_type=${responseType}&client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}`;
    }
    return;
  }

  if (localStorage.getItem('ACCESS_TOKEN') !== null && localStorage.getItem('ACCESS_TOKEN') !== undefined) return;

  try {
    const url = window.location.href;
    const urlToken = `${process.env.CORS_HEROKU}/${process.env.SPOTIFY_ACCOUNT}/api/token`;
    const code = /code=([^&]+)/.exec(url)[1];
    localStorage.setItem('CODE', code);
    axios.post(urlToken,
      qs.stringify({
        grant_type: 'authorization_code',
        code: localStorage.getItem('CODE'),
        redirect_uri: process.env.REDIRECT_URI,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).then((res) => {
      const { data } = res;
      const date = new Date();
      let expiresIn = Number(data.expires_in);
      date.setSeconds(date.getSeconds() + expiresIn);
      expiresIn = date;

      localStorage.setItem('ACCESS_TOKEN', data.access_token);
      localStorage.setItem('REFRESH_TOKEN', data.refresh_token);
      localStorage.setItem('TOKEN_TYPE', data.token_type);
      localStorage.setItem('EXPIRES_IN', expiresIn);
    });
  } catch (e) {
    window.console.log(e);
  }
};

export const refreshToken = async () => {
  const expiresTokenDate = new Date(localStorage.getItem('EXPIRES_IN'));
  const now = new Date();

  // const diff = Math.abs(expiresTokenDate.getTime() - now.getTime()) / 1000;
  const url = `${process.env.CORS_HEROKU}/${process.env.SPOTIFY_ACCOUNT}/api/token`;

  if (+now >= +expiresTokenDate) {
    const request = await axios.post(url,
      qs.stringify({
        grant_type: 'refresh_token',
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        refresh_token: localStorage.getItem('REFRESH_TOKEN'),
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).then((res) => {
      const { data } = res;
      const date = new Date();
      let expiresIn = Number(data.expires_in);
      date.setSeconds(date.getSeconds() + expiresIn);
      expiresIn = date;

      localStorage.setItem('ACCESS_TOKEN', data.access_token);
      localStorage.setItem('TOKEN_TYPE', data.token_type);
      localStorage.setItem('EXPIRES_IN', expiresIn);
    });
  }
};
