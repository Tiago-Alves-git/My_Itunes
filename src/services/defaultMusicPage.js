const billboardAPI = async () => {
  const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3708b5aa00mshc76bd27858be4bep19c422jsn6747d8087d55',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    },
  };

  const APIResponse = await fetch(url, options);

  const results = await APIResponse.json();

  return results;
};

export default billboardAPI;
