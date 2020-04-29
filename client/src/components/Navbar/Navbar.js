import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
            <Link to="/" className="navbar-brand">
                trade easy
            </Link>
            <div className="form-inline">
                <input
                    className="form-control mr-2"
                    type="text"
                    placeholder="Username"
                    aria-label="Username"
                />
                <input
                    className="form-control mr-2"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                />
                <button className="btn btn-outline-dark my-2 mr-2">
                    Login
                </button>
                <button className="btn btn-dark my-2">Register</button>
            </div>
        </nav>
    );
};
