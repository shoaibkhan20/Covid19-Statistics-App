import { Link , NavLink } from "react-router-dom";


export default function Navbar(){

    return(
        <>
        <nav className="navbar navbar-dark bg-dark navbar-expand-md fixed-top justify-content-around">
            <div>

                <NavLink to={'/'}  className="navbar-brand font-family-sans">COVID-19</NavLink>

            </div>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    {/* <NavLink to='/api'  className="nav-link">Home</NavLink> */}
                </li>
            </ul>
        </nav>
        </>
    );
}