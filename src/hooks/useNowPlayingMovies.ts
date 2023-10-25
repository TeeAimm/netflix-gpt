import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "store/movieSlice";
import { API_OPTIONS } from "utils/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        try {
            const res = await axios.get(
                "https://api.themoviedb.org/3/movie/now_playing?&page=1",
                API_OPTIONS
            );
            dispatch(addNowPlayingMovies(res.data.results));
            console.log("axios data - ", res.data.results);
        } catch (error) {
            console.error("error :: ", error);
        }
    };
    useEffect(() => {
        getNowPlayingMovies();
    }, []);
};

export default useNowPlayingMovies;
