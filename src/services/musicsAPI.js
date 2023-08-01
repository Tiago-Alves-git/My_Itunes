const getMusics = async (id) => {
  const request = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`);
  const requestJson = await request.json();
  return requestJson.results;
};

const getMusicsFromFavorites = async (ids) => {
  const request = await fetch(`https://itunes.apple.com/lookup?amgArtistId=${ids}&entity=song&limit=5&sort=recent.`);
  const requestJson = await request.json();
  return requestJson.results;
};

export default {
  getMusics,
  getMusicsFromFavorites,
};
