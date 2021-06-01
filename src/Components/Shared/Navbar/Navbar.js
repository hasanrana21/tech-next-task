import React from 'react';

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light mx-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><h1>TechNext</h1></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/"><h6>Home</h6></a>
                            <a className="nav-link" href="/post"><h6>Post</h6></a>
                            <a className="nav-link" href="/users"><h6>Users</h6></a>
                            <a className="nav-link" href="/login"><h6>Login</h6></a>
                        </div>
                    </div>
                </div>
            </nav>
    );
};

export default Navbar;