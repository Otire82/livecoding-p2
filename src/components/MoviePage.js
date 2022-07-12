import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import key from '../apiKey';

const MoviePage = () => {

    const [detailsMovie, setDetailsMovie] = useState("");
    const [actors, setActors] = useState("");

    const {id} = useParams();

    useEffect(()=> {
        axios
            .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=fr-FR`)
            .then(response => response.data)
            .then(data => setDetailsMovie(data))
    }, []);

    useEffect(()=> {
        axios
            .get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=fr-FR`)
            .then(response => response.data)
            .then(data => setActors(data.cast))
    }, []);

    if (!detailsMovie) {
        return (
            <div>En cours de chargement</div>
        );
    }

    return (
        <div>
            <h2>Movie Page</h2>
            {
                detailsMovie.poster_path ? <img src={`https://image.tmdb.org/t/p/w200/${detailsMovie.poster_path}`} alt={detailsMovie.title}/> : ""
            }
            <p>{detailsMovie.title}</p>

          <ul>
            {
                actors && actors.map((actor, index) => (
                    <Link to={`/actor/${actor.id}`} key={index}>
                        <li>{actor.name}</li>
                    </Link>
                )).slice(0,10)
            }
          </ul>

            <Link to="/">
                <p>Retour à l'accueil</p>
            </Link>
            
        </div>
    );
}

export default MoviePage;