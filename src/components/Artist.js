import React from 'react'
import './Artist.scss';
import { BsFillPlayFill } from 'react-icons/bs';

function Artist({ artist }) {
    return (
        <div className='artist'>
            <div className='wrapper'>
                <a href={artist.external_urls.spotify}>
                    <div className='img-wrapper'>
                        <div className='portrait'>
                            <img src={artist.images.length ? artist.images[0].url : '/images/angelina-jordan.jpg' } alt={artist.name} />
                        </div>
                        <div className='play'>
                            <BsFillPlayFill />
                        </div>
                    </div>
                    <div className='name'>
                        {artist.name}
                    </div>
                    <div className='sub'>
                        Artist
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Artist
