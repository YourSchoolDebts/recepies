import { Link } from "react-router-dom";

function Header() {
    return <nav className="indigo lighten-1 header">
        <div className="container">
            <nav className="nav-wrapper">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">
                        SPA React Project
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    </nav>
}
export { Header };