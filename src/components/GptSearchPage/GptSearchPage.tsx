import React from 'react'
import './GptSearchPage.scss';
import GptSearchBar from 'components/GptSearchBar/GptSearchBar';
import GptMovieSuggestions from 'components/GptMovieSuggestions/GptMovieSuggestions';

const GptSearchPage = () => {
    return (
        <div className='gpt__search__page'>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearchPage