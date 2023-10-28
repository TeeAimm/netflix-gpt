import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addUpcomingMovies } from "store/movieSlice";
import { API_OPTIONS } from "utils/constants";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
        try {
            const res = await axios.get(
                "https://api.themoviedb.org/3/movie/upcoming?&page=1",
                API_OPTIONS
            );

            dispatch(addUpcomingMovies(res.data.results));
        } catch (error) {
            console.error("error :: ", error);
        }
    };
    useEffect(() => {
        getUpcomingMovies();
    }, []);
};

export default useUpcomingMovies;
