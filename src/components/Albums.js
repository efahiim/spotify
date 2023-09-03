import React from 'react';
import './Albums.scss';
import Album from './Album';
import { useSelector, useDispatch } from 'react-redux';
import { setAlbums } from '../actions';
import spotifyService from '../services/spotify';
import { spotifyConstant } from '../constant/spotify';

function Albums({ albums, viewMode }) {

    const dispatch = useDispatch();
    const token    = useSelector(state => state.token);
    const params   = useSelector(state => state.searchParam);
    
    function searchAlbums() {
        spotifyService.getAlbums(params, token.token).then((response) => {
            dispatch(setAlbums(response.data))
          });
    }

    if (albums.items) {
        if (viewMode === spotifyConstant.VIEW_MODE_ALBUMS) {
            return (
                <div className='albums'>
                    <div className='upper'>
                        <h2>All albums for "{params}"</h2>
                    </div>
                    <div className='lower'>
                        {albums.items.map(album => (
                            <Album key={album.name} album={album} />
                        ))}
                    </div>
                </div>
            )
        }

        return (
            <div className='albums'>
                <div className='upper'>
                    <h2>Albums</h2>
                    <button onClick={() => searchAlbums()} className='links'>SEE ALL</button>
                </div>
                <div className='lower'>
                    {albums.items.map(album => (
                        <Album key={album.name} album={album} />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className='albums'>
            <div className='upper'>
                <h2>Albums</h2>
            </div>
            <div className='lower'>
                <h2>No Albums</h2>
            </div>
        </div>
    )
}

export default Albums
