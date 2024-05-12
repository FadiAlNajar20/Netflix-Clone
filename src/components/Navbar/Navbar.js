import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <>

            <header>
                <nav className="nav-bar">
                    <section className="logo">
                    <Link to="/" className="link">
                        NetFlix Clone
                    </Link>
                    </section>
                    <ul>
                        <li>
                            <Link to="/" className="link">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="link">
                                Favorite
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}



export default Navbar;