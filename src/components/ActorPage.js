import { Link } from 'react-router-dom';

const ActorPage = () => {
    return(
        <div>
            <h2>Actor page</h2>
            <Link to="/">
                <p>Retour à l'accueil</p>
            </Link>
        </div>
    );
}

export default ActorPage;