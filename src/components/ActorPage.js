import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import key from '../apiKey';


const ActorPage = () => {

    const [detailsActor, setDetailsActor] = useState();
    const [filmo, setFilmo] = useState();

    const {id} = useParams();

    useEffect(()=> {
        axios
            .get(`https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=fr-FR`)
            .then(response=> response.data)
            .then(data => setDetailsActor(data))
    }, []);

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=fr-FR`)
            .then(response => response.data)
            .then(data => setFilmo(data.cast))
    }, []);

    if(!detailsActor) {
        return(
            <div>En cours de chargement</div>
        );
    }

    return(
        <div>
            <h2>{detailsActor.name}</h2>

            {
                detailsActor.profile_path
                    ? <img src={`https://image.tmdb.org/t/p/w200/${detailsActor.profile_path}`} alt={detailsActor.name}/> 
                    : ""
            }

            
            <h3>Filmographie</h3>
            <ul>
                {
                    filmo && filmo.map((movie, index)=> (
                        <li key={index}>
                            <Link to={`/movie/${movie.id}`}>
                                {movie.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Link to="/">
                <p>Retour à l'accueil</p>
            </Link>
        </div>
    );
}

export default ActorPage;