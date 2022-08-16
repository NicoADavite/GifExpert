const baseUrl = "https://api.giphy.com/v1/gifs/search";
const apiKey = "tM2b3hOk6W3gVAQAhv0Ns5VJ0zb8akJR";
const limit = 5;

const getGif = async (category) => {
  const url = `${baseUrl}?api_key=${apiKey}&q=${category}&limit=${limit}`;
  const response = await fetch(url);
  let { data } = await response.json();
  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));
  return gifs;
};

export default getGif;
