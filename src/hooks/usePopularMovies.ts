import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies } from "store/movieSlice";
import { API_OPTIONS } from "utils/constants";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        try {
            const res = await axios.get(
                "https://api.themoviedb.org/3/movie/popular?&page=1",
                API_OPTIONS
            );

            dispatch(addPopularMovies(res.data.results));
        } catch (error) {
            console.error("error :: ", error);
        }
    };
    useEffect(() => {
        getPopularMovies();
    }, []);
};

export default usePopularMovies;
