import tokenReducer from './token';
import spotifyReducer from './spotify';
import searchReducer from './search';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    token: tokenReducer,
    spotify: spotifyReducer,
    searchParam: searchReducer
})

export default allReducers;