import React from 'react'
import './GptSearchBar.scss'
import { useSelector } from 'react-redux'
import { RootState } from 'store/appStore'
import languages from 'assets/locale/languages'

const GptSearchBar = () => {
    const selectedLanguage = useSelector((store: RootState) => store.config.language)
    return (
        <div className='gpt__search__bar'>
            <form className='gpt__search__bar__form'>
                <input type='text' placeholder={languages[selectedLanguage].gptPlaceholder} />
                <button type='submit' className='btn btn-danger'>{languages[selectedLanguage].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar