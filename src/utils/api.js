import axios from 'axios';

const APILocation = "https://api.flickr.com/services/rest/?method=flickr.photos.search";
const APIKey = process.env.REACT_APP_API_KEY

const API = {
  getImages: function (tag, image, page) {
    return axios.get(`${APILocation}&api_key=${APIKey}&tags=${tag}&per_page=${image}&page=${page}&format=json&nojsoncallback=1`)
  }
}

export default API;