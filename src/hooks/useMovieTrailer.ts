import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "store/movieSlice";
import { API_OPTIONS } from "utils/constants";
import { pickAnyFromArray } from "utils/pickAnyFromArray";

export const useMovieTrailer = (movieId: number) => {
    const dispatch = useDispatch();
    const getMovieTrailer = async () => {
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
            dispatch(addTrailerVideo(trailer));

            console.log("videos - ", trailer);
        } catch (error) {
            console.log("error:", error);
        }
    };
    useEffect(() => {
        getMovieTrailer();
    }, []);
};
