export const setPlaylist = (data) => {
    return {
      type: 'SET_PLAYLIST',
      payload: data
    }
  }

  export const setAlbums = (data) => {
    return {
      type: 'SET_ALBUMS',
      payload: data
    }
  }

  export const setArtists = (data) => {
    return {
      type: 'SET_ARTISTS',
      payload: data
    }
  }

  export const setAccessToken = (token, expiryAt) => {
    return {
      type: 'SET_TOKEN',
      payload: {token: token, expiryAt: expiryAt}
    }
  }

  export const setSearchParams = (param) => {
    return {
      type: 'SET_PARAM',
      payload: param
    }
  }
  