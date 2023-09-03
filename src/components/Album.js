import React from 'react'
import './Album.scss';
import { BsFillPlayFill } from 'react-icons/bs';

function Album({ album }) {
    return (
        <div className='album'>
            <div className='wrapper'>
                <a href={album.external_urls.spotify}>
                    <div className='img-wrapper'>
                        <div className='portrait'>
                            <img src={album.images.length ? album.images[0].url : '/images/angelina-jordan.jpg'} alt={album.name} />
                        </div>
                        <div className='play'>
                            <BsFillPlayFill />
                        </div>
                    </div>
                    <div className='name'>
                        {album.name}
                    </div>
                    <div className='sub'>
                        {album.artists.length ? album.artists.map(function (artist) {
                            return artist.name;
                        }).join(", ") : 'unknown'}
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Album
