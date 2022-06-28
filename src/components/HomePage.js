import { Link } from "react-router-dom";

const HomePage = () => {
    return(
        <div>
            <h2>Home page</h2>
            <Link to='/movie'>
                <p>Lien vers la page movie</p>
            </Link>
        </div>
    );
}

export default HomePage;