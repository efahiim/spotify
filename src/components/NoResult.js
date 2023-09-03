import React from 'react'
import './NoResult.scss'

function NoResult({param}) {
    return (
        <div className='error'>
            <h2>No results found for "{param}"</h2>
            <p>Please make sure your words are spelled correctly or use less or different keywords.</p>
        </div>
    )
}

export default NoResult
