import React, { useEffect } from 'react'

import './Browse.scss'
import Header from '../Header/Header'
import useNowPlayingMovies from 'hooks/useNowPlayingMovies'

const Browse = () => {
    const nowPlayingMovies = useNowPlayingMovies()
    return (
        <div>
            <Header />
        </div>
    )
}

export default Browse