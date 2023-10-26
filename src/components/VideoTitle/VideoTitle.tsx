import React from 'react'

import './VideoTitle.scss'

type props = {
    title: string;
    overview: string
}

const VideoTitle = ({ title, overview }: props) => {
    return (
        <div>
            <div>{title}</div>
            <div>{overview}</div>
        </div>
    )
}

export default VideoTitle