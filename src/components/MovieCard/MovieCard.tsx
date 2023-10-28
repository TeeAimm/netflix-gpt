import { IMG_CDN_URL } from 'utils/constants'
import './MovieCard.scss'

type props = {
    posterPath: string
}

const MovieCard = ({ posterPath }: props) => {
    return (
        <div className='movie__card me-2'>
            <img className='movie__card__img' alt='Movie image' src={IMG_CDN_URL + posterPath} />
        </div>
    )
}

export default MovieCard