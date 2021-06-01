import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light mx-5">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><h1 className="fst-italic fw-bold"><span style={{color: 'green'}}>Tech</span><span style={{color: 'crimson'}}>Next</span></h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav menu">
                            <Link className="nav-link active" aria-current="page" to="/"><h6>Home</h6></Link>
                            <Link className="nav-link" to="/post"><h6>Post</h6></Link>
                            <Link className="nav-link" to="/users"><h6>Users</h6></Link>
                            <Link className="nav-link" to="/login"><h6>Login</h6></Link>
                            <Link className="nav-link" to="/profile"><h6>Profile</h6></Link>
                        </div>
                    </div>
                </div>
            </nav>
    );
};

export default Navbar;