import React from "react";
import { useHistory } from "react-router-dom";
import NavProfile from "./navProfile";

const NavBar = () => {
    const history = useHistory();

    const goToLogin = () => {
        history.push("/login");
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark m-1 rounded">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Home
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarColor02"
                    aria-controls="navbarColor02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <button
                                type="button"
                                className="btn btn-primary bg-dark position-relative"
                                onClick={goToLogin}
                            >
                                login
                            </button>
                        </li>

                        <li className="nav-item">
                            <button
                                type="button"
                                className="btn btn-primary bg-dark position-relative"
                            >
                                Basket
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light">
                                    99+
                                </span>
                            </button>
                        </li>
                    </ul>
                    <NavProfile />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
