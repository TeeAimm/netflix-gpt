import React from 'react'
import './MainContainer.scss'
import { useSelector } from 'react-redux'
import { RootState } from 'store/appStore'
import VideoBackground from 'components/VideoBackground/VideoBackground'
import VideoTitle from 'components/VideoTitle/VideoTitle'
import { pickAnyFromArray } from 'utils/pickAnyFromArray'

const MainContainer = () => {
    const movies = useSelector((store: RootState) => store.movies?.nowPlayingMovies)

    if (!movies?.length) return null; // Early return if no movies

    const mainMovie = pickAnyFromArray(movies)
    const { original_title, overview, id } = mainMovie;

    return (
        <div>
            <VideoBackground movieId={id} />
            <VideoTitle title={original_title} overview={overview} />
        </div>
    )
}

export default MainContainer