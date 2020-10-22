import React from 'react';

const Navbar = () => {
    return(
        <nav className="nav-wrapper blue darken-4">
            <div className="container">
                <a className="brand-logo">Poke's Time</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about.html">About Us</a></li>
                    <li><a href="/contacts.html">Contact Us</a></li>
                </ul>
             </div>
        </nav>

    )
}


export default Navbar;