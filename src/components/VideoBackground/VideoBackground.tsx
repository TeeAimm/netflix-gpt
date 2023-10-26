import { useSelector } from "react-redux";

import './VideoBackground.scss'
import { RootState } from "store/appStore";
import { useMovieTrailer } from "hooks/useMovieTrailer";

type props = {
    movieId: number;
};

const VideoBackground = ({ movieId }: props) => {
    useMovieTrailer(movieId)
    const trailerVideo: any = useSelector((store: RootState) => store.movies?.trailerVideo)

    return (
        <div className="trailer__body">
            <iframe
                className="trailer__body__iframe"
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
};

export default VideoBackground;
