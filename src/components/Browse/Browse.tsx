import './Browse.scss'
import Header from '../Header/Header'
import useNowPlayingMovies from 'hooks/useNowPlayingMovies'
import MainContainer from 'components/MainContainer/MainContainer'
import SecondaryContainer from 'components/SecondaryContainer/SecondaryContainer'

const Browse = () => {
    useNowPlayingMovies()
    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse


/* 
    MainContainer
        - VideoBACKGROUND
        - VideoTitle
    SecondaryContainer
        - Horizontal Movielist * N
            - Cards * N

*/