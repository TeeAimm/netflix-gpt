import React from 'react'

import './VideoTitle.scss'

type props = {
    title: string;
    overview: string
}

const VideoTitle = ({ title, overview }: props) => {
    return (
        <div className='trailer__info'>
            <div className='trailer__info__title'>{title}</div>
            <div className='trailer__info__desc'>{overview}</div>
        </div>
    )
}

export default VideoTitle