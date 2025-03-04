import MovieCard from "./MovieCard";

const SearchMovie = ({query, moviesSearched, handleSearch, handleChange, genres}) => {

    return(
        <>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Indiquez le titre d'un film"
                    value={query}
                    onChange={handleChange}
                />
                <button type="submit">Rechercher</button>
            </form>
            {
                moviesSearched && moviesSearched.map((movie)=> (
                    <MovieCard movie={movie} key={movie.id} genres={genres}/>
                ))
            }
        </>
    );
}

export default SearchMovie;