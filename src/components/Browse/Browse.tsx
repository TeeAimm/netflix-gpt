import './Browse.scss'
import Header from '../Header/Header'
import useNowPlayingMovies from 'hooks/useNowPlayingMovies'
import MainContainer from 'components/MainContainer/MainContainer'
import SecondaryContainer from 'components/SecondaryContainer/SecondaryContainer'
import usePopularMovies from 'hooks/usePopularMovies'
import useTopRatedMovies from 'hooks/useTopRatedMovies'
import useUpcomingMovies from 'hooks/useUpcomingMovies'
import GptSearchPage from 'components/GptSearchPage/GptSearchPage'
import { useSelector } from 'react-redux'
import { RootState } from 'store/appStore'

const Browse = () => {
    const toggleGptSearch = useSelector((state: RootState) => state.gpt.showGptSearch)
    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpcomingMovies()
    return (
        <div className='browse__body'>
            <Header />
            {toggleGptSearch ? <GptSearchPage /> : <>
                <MainContainer />
                <SecondaryContainer />
            </>}
        </div>
    )
}

export default Browse
