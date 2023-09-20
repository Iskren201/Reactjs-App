import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const Login = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");
    const { onLoginSubmit } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login");
    };

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={onLoginSubmit}>
                <label htmlFor="email">email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="youremail@gmail.com"
                    id="email"
                    name="email"
                />
                <label htmlFor="password">password</label>
                <input
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    placeholder="********"
                    id="password"
                    name="password"
                />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn">
                <Link to="/register">Already have an account? Login here.</Link>
                <div>
                    <Link to="/">Go Back Home</Link>
                </div>
            </button>
        </div>
    );
};
