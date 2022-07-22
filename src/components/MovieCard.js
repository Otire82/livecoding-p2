import { Link } from "react-router-dom";

const MovieCard = ({movie, genres}) => {
    return(
        <div>
            <Link to={`/movie/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title}/>
            </Link>
            <p>{movie.title}</p>
            {
                genres && genres.map((genre)=> (
                    movie.genre_ids.includes(genre.id) ? <p key={genre.id}>{genre.name}</p> : ""
                ))
            }
        </div>
    );
}

export default MovieCard;