import React, { useState } from "react";
import { Link } from "react-router-dom";
import { imageProfile } from "../../styles/images";

const NavProfile = () => {
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };

    // if (!currentUser) return "Loading .....";

    return (
        <div className="dropdown" onClick={toggleMenu}>
            <div className="btn dropdown-toggle d-flex align-items-center">
                <div className="me-2">name</div>
                <img
                    src={imageProfile}
                    alt=""
                    height="40"
                    className="img-responsive rounded-circle"
                />
            </div>
            <div className={"w-100 dropdown-menu" + (isOpen ? " show" : "")}>
                <Link
                    to={`/edit`}
                    className="dropdown-item"
                >
                    Profile
                </Link>
                <Link to="/logout" className="dropdown-item">
                    Log Out
                </Link>
            </div>
        </div>
    );
};

export default NavProfile;
