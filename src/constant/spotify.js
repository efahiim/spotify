export const spotifyConstant = { 
    VIEW_MODE_ALL : 'all',
    VIEW_MODE_ARTISTS : 'artists',
    VIEW_MODE_ALBUMS : 'albums',
}

export const initialState = {
    albums: {},
    artists: {},
    viewMode: spotifyConstant.VIEW_MODE_ALL
  }