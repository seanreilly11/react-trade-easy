import React, { useState } from "react";
import { Link, Redirect, useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export const Navbar = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(sessionStorage.username);
    const [history, setHistory] = useState(useHistory());

    const loginSubmit = async (e) => {
        e.preventDefault();
        if (username === "" || password === "") {
            Swal.fire({
                title: "Enter username and password",
                text: "Please fill all details",
                icon: "warning",
                button: "Got it",
                timer: 2500,
            });
        } else {
            const response = await axios.post("/users/login", {
                username,
                password,
            });
            const data = response.data;
            if (data === "User not found") {
                Swal.fire({
                    title: "Not a user",
                    text:
                        "There is no account for this username. Please try again or register",
                    icon: "warning",
                    button: "Got it",
                    timer: 2500,
                });
                setUsername("");
                setPassword("");
            } else if (data === "Not authorised. Incorrect password") {
                Swal.fire({
                    title: "Incorrect password",
                    text: "Password incorrect. Please try again",
                    icon: "warning",
                    button: "Got it",
                    timer: 2500,
                });
                setPassword("");
            } else {
                sessionStorage.setItem("userID", data._id);
                sessionStorage.setItem("username", data.username);
                sessionStorage.setItem("userFName", data.firstName);
                sessionStorage.setItem("userLName", data.lastName);
                sessionStorage.setItem("userEmail", data.email);
                setLoggedIn(true);
            }
        }
    };

    const handleLogout = () => {
        sessionStorage.clear();
        setLoggedIn(false);
        setUsername("");
        setPassword("");
    };

    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
            <Link to="/" className="navbar-brand">
                trade easy
            </Link>
            {loggedIn ? (
                <div className="form-inline">
                    <p className="my-2 mr-3">Hi, {sessionStorage.username}!</p>
                    <Link to={`/users/${sessionStorage.userID}`}>
                        <button className="btn btn-dark my-2 mr-2">
                            My account
                        </button>
                    </Link>
                    <button
                        className="btn btn-outline-dark my-2"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <div className="form-inline">
                    <form onSubmit={loginSubmit}>
                        <input
                            className="form-control mr-2"
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            aria-label="Username"
                            required
                        />
                        <input
                            className="form-control mr-2"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            aria-label="Password"
                            required
                        />
                        <button className="btn btn-outline-dark my-2 mr-2">
                            Login
                        </button>
                    </form>
                    <Link to="/register">
                        <button className="btn btn-dark my-2">Register</button>
                    </Link>
                </div>
            )}
        </nav>
    );
};
