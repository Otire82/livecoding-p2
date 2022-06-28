import { Link } from "react-router-dom";

const MoviePage = () => {
    return(
        <div>
            <h2>Movie Page</h2>
            <Link to="/actor">
                <p>Jessica Alba</p>
            </Link>
            <Link to="/">
                <p>Retour à l'accueil</p>
            </Link>
        </div>
    );
}

export default MoviePage;