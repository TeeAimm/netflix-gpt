import MovieCard from 'components/MovieCard/MovieCard'
import './MovieList.scss'
import { Movies } from 'utils/sharedType'



type props = {
    title: string,
    movies: Movies[]
}

const MovieList = ({ title, movies }: props) => {
    return (
        <div className='movie__list'>
            <div className='movie__list__title'>
                {title}
            </div>
            <div className='movie__list__card'>
                {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie?.poster_path} />)}
            </div>
        </div>
    )
}

export default MovieList