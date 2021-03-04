import React from 'react';

// Navbar as the Header
function Header() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <h1 className="navbar-brand">Amanda MacDonald</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar">
                        <a className="navbar" aria-current="page" href="/">Home</a>
                        <a className="navbar" href="/about">About Me</a>
                        <a className="navbar" href="/portfolio">Portfolio</a>
                        <a className="navbar" href="/contact">Contact Me</a>
                    </div>
                </div>
            </div>
        </nav>


    )
};

export default Header; 