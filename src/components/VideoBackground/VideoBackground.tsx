import { useEffect } from "react";
import "./VideoBackground.scss";
import axios from "axios";
import { API_OPTIONS } from "utils/constants";
import { pickAnyFromArray } from "utils/pickAnyFromArray";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "store/movieSlice";
import { RootState } from "store/appStore";

type props = {
    movieId: number;
};

const VideoBackground = ({ movieId }: props) => {
    const dispatch = useDispatch()
    const trailerVideo: any = useSelector((store: RootState) => store.movies?.trailerVideo)
    const getMovieVideos = async () => {
        try {
            const res = await axios.get(
                "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
                API_OPTIONS
            );
            const trailers = res?.data?.results?.filter(
                (item: any) => item.type === "Trailer"
            );
            const trailer = trailers.length
                ? pickAnyFromArray(trailers)
                : res?.data?.results[0];
            dispatch(addTrailerVideo(trailer))

            console.log("videos - ", trailer);
        } catch (error) {
            console.log("error:", error);
        }
    };
    useEffect(() => {
        getMovieVideos();
    }, []);
    return (
        <div>
            <iframe
                width="560"
                height="315"
                src={"https://www.youtube.com/embed/" + trailerVideo?.key}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
};

export default VideoBackground;
