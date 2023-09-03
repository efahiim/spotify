import { spotifyConstant, initialState } from "../constant/spotify"

const spotifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLAYLIST':
      return { ...state, albums: action.payload.albums, artists: action.payload.artists, viewMode: spotifyConstant.VIEW_MODE_ALL }
    case 'SET_ARTISTS':
      return { ...state, artists: action.payload.artists, albums: {} , viewMode: spotifyConstant.VIEW_MODE_ARTISTS}
    case 'SET_ALBUMS':
      return { ...state, albums: action.payload.albums, artists: {}, viewMode: spotifyConstant.VIEW_MODE_ALBUMS}
    default:
      return state;
  }
}

export default spotifyReducer;