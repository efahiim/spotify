const axios = require('axios');
const baseUri = 'https://api.spotify.com/v1/search';

const spotifyService = {
  getSearchPreview: function (keyword, token) {
    var config = {
      method: 'get',
      url: `${baseUri}?q=${encodeURIComponent(keyword)}&type=album,artist&limit=6`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    return axios(config);
  },

  getAlbums: function (keyword, token) {
    var config = {
      method: 'get',
      url: `${baseUri}?q=${encodeURIComponent(keyword)}&type=album`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    return axios(config);
  },
  getArtists: function (keyword, token) {
    var config = {
      method: 'get',
      url: `${baseUri}?q=${encodeURIComponent(keyword)}&type=artist`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    return axios(config);
  },
}

export default spotifyService;