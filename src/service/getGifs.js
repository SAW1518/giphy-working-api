const apiKey = 'TifQppIspCQWW0J41AANoytOYVC5ZJAj'

export default async function getGifs ({ keyword = 'homes' } = {}) {
  const apiURl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=21&rating=g&lang=en`
  return await fetch(apiURl).then(r => r.json()).then(response => {
    const { data } = response
    if (Array.isArray(data)) {
      return data.map(img => {
        const { images, title, id } = img
        const { url } = images.downsized_medium
        return { title, id, url }
      })
    }
  })
}
