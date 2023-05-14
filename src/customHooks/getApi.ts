async function getApi(keyName: string) {
  const res = await fetch(`api.giphy.com/v1/gifs/search?api_key=hbrH2e76pcieIfpPjMNg6689hgeeg3Oe&q=${keyName}`);
  const data = await res.json()
  const result = await data.data.map((images: { downsized_medium: { url: string; }; }) => {return images.downsized_medium.url});
  return result
}

export default getApi;