import React from 'react'
import './Artists.scss';
import Artist from './Artist'
import { useSelector, useDispatch } from 'react-redux';
import { setArtists } from '../actions';
import spotifyService from '../services/spotify';
import { spotifyConstant } from '../constant/spotify';

function Artists({ artists, viewMode }) {

    const dispatch = useDispatch();
    const token  = useSelector(state => state.token);
    const params = useSelector(state => state.searchParam);

    function searchArtist() {
        spotifyService.getArtists(params, token.token).then((response) => {
            dispatch(setArtists(response.data))
        });
    }

    if (artists.items) {
        if (viewMode === spotifyConstant.VIEW_MODE_ARTISTS) {
            return (
                <div className='artists'>
                    <div className='upper'>
                        <h2>All artists for "{params}"</h2>
                    </div>
                    <div className='lower'>
                        {artists.items.map(artist => (
                            <Artist key={artist.name} artist={artist} />
                        ))}
                    </div>
                </div>
            )
        }
        return (
            <div className='artists'>
                <div className='upper'>
                    <h2>Artists</h2>
                    <button onClick={() => searchArtist()} className='links'>SEE ALL</button>
                </div>
                <div className='lower'>
                    {artists.items.map(artist => (
                        <Artist key={artist.name} artist={artist} />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className='artists'>
            <div className='upper'>
                <h2>Artists</h2>
            </div>
            <div className='lower'>
                <h2>No Artists</h2>
            </div>
        </div>
    )
}

export default Artists
