const MovieCard = ({movie}) => {
    return(
        <div>
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title}/>
            <p>{movie.title}</p>
        </div>
    );
}

export default MovieCard;