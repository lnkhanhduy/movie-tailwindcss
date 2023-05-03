export function BaseAPI(path) {
  const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com' + path,
    headers: {
      'X-RapidAPI-Key': '41dd089a2dmsh99003c1ff558bd6p16ee13jsn2c347790813c',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
    },
  };

  return options;
}
