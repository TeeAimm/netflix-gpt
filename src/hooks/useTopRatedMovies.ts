import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addTopRatedMovies } from "store/movieSlice";
import { API_OPTIONS } from "utils/constants";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        try {
            const res = await axios.get(
                "https://api.themoviedb.org/3/movie/top_rated?&page=1",
                API_OPTIONS
            );

            dispatch(addTopRatedMovies(res.data.results));
        } catch (error) {
            console.error("error :: ", error);
        }
    };
    useEffect(() => {
        getTopRatedMovies();
    }, []);
};

export default useTopRatedMovies;
