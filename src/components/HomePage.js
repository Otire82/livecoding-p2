import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from "axios";
import key from "../apiKey";
import MovieCard from "./MovieCard";
import SearchMovie from "./SearchMovie";
import FilterByGenre from "./FilterByGenreMovie";

const HomePage = () => {

    const [popularMovies, setPopularMovies] = useState("");

    const [query, setQuery] = useState("");
    const [moviesSearched, setMoviesSearched] = useState("");

    const [genres, setGenres] = useState("");
    const [genreSearched, setGenreSearched] = useState("");

    useEffect(()=> {
        axios
            .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=fr-FR`)
            .then(response=>response.data)
            .then(data=>setGenres(data.genres));
    }, []);


    const handleSearch = (e) => {
        e.preventDefault();
        axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=fr-FR&query=${query}&page=1&include_adult=false`)
            .then(response => response.data)
            .then(data => setMoviesSearched(data.results))
    }

    const handleChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
    }

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=fr-FR&page=1`)
            .then(response => response.data)
            .then(data => setPopularMovies(data.results));
    }, []);

    return(
        <div>
            <SearchMovie
                query={query}
                moviesSearched={moviesSearched}
                handleSearch={handleSearch}
                handleChange={handleChange}
                genres={genres}
            />
            <FilterByGenre genres={genres} setGenreSearched={setGenreSearched} />
            <h2>Films les plus populaires</h2>
            {
                !moviesSearched && popularMovies && popularMovies
                    .filter((movie) => movie.genre_ids.includes(genreSearched))
                    .map((movie) => (
                        <MovieCard movie={movie} key={movie.id} genres={genres}/>
                ))
            }
        </div>
    );
}

export default HomePage;