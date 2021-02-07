import React from 'react';

function Header() {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <h1 class="navbar-brand">Amanda MacDonald</h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar">
                        <a class="navbar" aria-current="page" href="/">Home</a>
                        <a class="navbar" href="/about">About Me</a>
                        <a class="navbar" href="/portfolio">Portfolio</a>
                        <a class="navbar" href="/contact">Contact Me</a>
                    </div>
                </div>
            </div>
        </nav>


    )
};

export default Header; 