import './SecondaryContainer.scss'
import MovieList from 'components/MovieList/MovieList'
import { useSelector } from 'react-redux'
import { RootState } from 'store/appStore'
import { Movies } from 'utils/sharedType'

const SecondaryContainer = () => {
    const nowPlayingMovies: Movies[] = useSelector((store: RootState) => store.movies.nowPlayingMovies)
    const upcomingMovies: Movies[] = useSelector((store: RootState) => store.movies.upcomingMovies)
    const popularMovies: Movies[] = useSelector((store: RootState) => store.movies.popularMovies)
    const topRatedMovies: Movies[] = useSelector((store: RootState) => store.movies.topRatedMovies)

    return (
        <div className='secondary__container'>
            <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
            <MovieList title={"Upcoming"} movies={upcomingMovies} />
            <MovieList title={"Popular"} movies={popularMovies} />
            <MovieList title={"Top Rated"} movies={topRatedMovies} />
        </div>
    )
}

export default SecondaryContainer