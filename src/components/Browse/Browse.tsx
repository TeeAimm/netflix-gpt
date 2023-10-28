import './Browse.scss'
import Header from '../Header/Header'
import useNowPlayingMovies from 'hooks/useNowPlayingMovies'
import MainContainer from 'components/MainContainer/MainContainer'
import SecondaryContainer from 'components/SecondaryContainer/SecondaryContainer'
import usePopularMovies from 'hooks/usePopularMovies'
import useTopRatedMovies from 'hooks/useTopRatedMovies'
import useUpcomingMovies from 'hooks/useUpcomingMovies'
import GptSearch from 'components/GptSearch/GptSearch'

const Browse = () => {
    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpcomingMovies()
    return (
        <div className='browse__body'>
            <Header />
            <GptSearch />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse
