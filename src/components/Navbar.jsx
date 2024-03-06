import { Link } from "react-router-dom";

function Navbar(){

    return(
        <ul className="flex gap-10 mb-10">
            <li>
                <Link to={'/'}>HomePage</Link>
            </li>
            <li>
                <Link to={'/contatti'}>Contatti</Link>
            </li>
            <li>
                <Link to={'/about'}>About</Link>
            </li>
            <li>
                <Link to={'/cards'}>Card versione 1</Link>
            </li>
            <li>
                <Link to={'/cards-children'}>Card versione 2</Link>
            </li>
        </ul>
    );
}

export default Navbar;