import React from 'react'
import Albums from './Albums'
import Artists from './Artists'
import NoResult from './NoResult'
import './Body.scss';
import { useSelector } from 'react-redux';
import StartSearch from './StartSearch';

function Body({ playlist }) {
    const params = useSelector(state => state.searchParam);
    if (playlist.artists.items || playlist.albums.items) {
        return (
            <main>
                <>
                    {playlist.artists.items ? <Artists artists={playlist.artists} viewMode={playlist.viewMode} /> : ""}
                    {playlist.albums.items ? <Albums albums={playlist.albums} viewMode={playlist.viewMode} /> : ""}
                </>
            </main>
        )
    }

    if (!params) {
        return (
            <div>
                <StartSearch />
            </div>
        )
    }

    return (
        <div>
            <NoResult param={params} />
        </div>
    )
}

export default Body
