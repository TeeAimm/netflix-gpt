import React from 'react'
import './MainContainer.scss'
import { useSelector } from 'react-redux'
import { RootState } from 'store/appStore'
import VideoBackground from 'components/VideoBackground/VideoBackground'
import VideoTitle from 'components/VideoTitle/VideoTitle'

const MainContainer = () => {
    const movies = useSelector((store: RootState) => store.movies?.nowPlayingMovies)
    console.log("🚀 ~ file: MainContainer.tsx:8 ~ MainContainer ~ movies:", movies)

    if (!movies) return null; // Early return if no movies

    const mainMovie = movies[0]
    const { original_title, overview } = mainMovie;
    console.log("🚀 ~ file: MainContainer.tsx:15 ~ MainContainer ~ mainMovie:", mainMovie)

    return (
        <div>
            <VideoBackground />
            <VideoTitle title={original_title} overview={overview} />
        </div>
    )
}

export default MainContainer