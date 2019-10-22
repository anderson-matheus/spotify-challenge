export const authorize = () => {
  if (window.location.href.indexOf('access_token') === -1) {
    if (localStorage.getItem('access_token') === null) {
      const responseType = 'token';
      window.location.href = `${process.env.SPOTIFY_ACCOUNT}/authorize?response_type=${responseType}&client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}`;
    }
    return;
  }

  if (window.location.href.indexOf('?access_token') === -1) {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('TOKEN_TYPE');
    localStorage.removeItem('EXPIRES_IN');
    window.location.href = window.location.href.replace('access_token', '?access_token');
  }

  const url = window.location.href;
  const date = new Date();
  let expiresIn = Number(/expires_in=([^&]+)/.exec(url)[1]);
  date.setSeconds(date.getSeconds() + 30);
  expiresIn = date;

  if (localStorage.getItem('ACCESS_TOKEN') !== null) return;

  localStorage.setItem('ACCESS_TOKEN', /access_token=([^&]+)/.exec(url)[1]);
  localStorage.setItem('TOKEN_TYPE', /token_type=([^&]+)/.exec(url)[1]);
  localStorage.setItem('EXPIRES_IN', expiresIn);
};

export const refreshToken = async () => {
  const diff = Math.abs(new Date(localStorage.getItem('EXPIRES_IN')).getTime() - new Date().getTime()) / 1000;
  if (diff < 60) {
    window.console.log('refresh token');
  }
};
