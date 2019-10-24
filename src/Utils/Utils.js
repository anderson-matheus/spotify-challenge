export const shortenText = (text, maxLength) => (
  text.length <= maxLength
    ? text : `${text.substr(0, maxLength)}...`
);

export const shortenArtists = (artists, maxLength) => (
  artists.map((artist) => artist.name).join(', ').length <= maxLength
    ? artists.map((artist) => artist.name).join(', ')
    : `${artists.map((artist) => artist.name).join(', ').substr(0, maxLength)}...`
);
