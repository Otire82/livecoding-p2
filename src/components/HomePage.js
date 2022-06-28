import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from "axios";
import key from "../apiKey";
import MovieCard from "./MovieCard";

const HomePage = () => {

    const [popularMovies, setPopularMovies] = useState("");

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
            .then(response => response.data)
            .then(data => setPopularMovies(data.results));
    }, []);

    return(
        <div>
            <h2>Home page</h2>
            {console.log(popularMovies)}
            {
                popularMovies && popularMovies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))
            }
            <Link to='/movie'>
                <p>Lien vers la page movie</p>
            </Link>
        </div>
    );
}

export default HomePage;