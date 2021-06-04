import {Link} from 'react-router-dom';

const HomePage = (props) => {

    return (
        <div id="homepage">
            <h1>Welcome to Wildlife Park!</h1>
            <button className="home-button"><Link to="/habitats">SEE HABITATS</Link></button>
            <button className="home-button"><Link to="/animals">SEE ANIMALS</Link></button>
        </div>
    )
}

export default HomePage