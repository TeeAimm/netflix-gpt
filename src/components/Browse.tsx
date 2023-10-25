import React, { useEffect } from 'react'
import Header from './Header/Header'
import { API_OPTIONS } from 'utils/constants'
import axios from 'axios'

const Browse = () => {
    const getNowPlayingMovies = async () => {
        try {
            const res = await axios.get('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS)
            console.log("axios data - ", res.data.results)
        }
        catch (error) {
            console.error("error :: ", error)
        }

    }
    useEffect(() => {
        getNowPlayingMovies()
    }, [])
    return (
        <div>
            <Header />
        </div>
    )
}

export default Browse