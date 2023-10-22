import './Header.scss'
import netflixLogo from '../../assets/images/Netflix_Logo_PMS.png'

const Header = () => {
    return (
        <div className='header__body'>
            <img className='header__body__img' src={netflixLogo} alt='Netflix logo' />
        </div>
    )
}

export default Header