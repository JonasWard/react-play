import React, {useState} from "react";
import {NavLink} from "react-router-dom";

import {MdClose} from "react-icons/md";
import {FiMenu} from "react-icons/fi";

const Navbar = () => {
    const links = [
        {
            id: 1,
            url: "/",
            text: "Home"
        },
        {
            id: 2,
            url: "/about",
            text: "About"
        },
        {
            id: 3,
            url: "/about-author",
            text: "Contact"
        }
    ];

    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(prev => !prev);
    }

    const closeMenu = () => {
        setNavbarOpen(false);
    }

    return (
        <nav className="navBar">
            <button onClick={handleToggle}>{navbarOpen ? (
                <MdClose style={{ color: "#fff", width: "2Rem", height: "2Rem" }} />
            ) : (
                <FiMenu style={{ color: "#7b7b7b", width: "2Rem", height: "2Rem" }} />
            )}</button>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                {links.map(link => {
                    return (
                        <li key={link.id}>
                            <NavLink
                                to={link.url}
                                activeClassName="active-link"
                                onClick={() => closeMenu()}
                                exact
                            >{link.text}</NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}

export default Navbar;