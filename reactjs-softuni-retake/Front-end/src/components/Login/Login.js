import { useForm } from "../../hook/useForm";
import React, { useState, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
}
const user1 = {
    user: "admin@abv.bg",
    password: "admin",
};
export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',

    }, onLoginSubmit);

    const handleLogin = (e) => {
        if (values[LoginFormKeys.Email] === user1.user && values[LoginFormKeys.Password] === user1.password) {
            console.log("Login");
            Navigate("/");
        } else {
            console.log("Error");
        }
    }


    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" method="POST" onSubmit={onSubmit}>
                <label htmlFor="email">email</label>
                <input
                    value={values[LoginFormKeys.Email]}
                    onChange={changeHandler}
                    type="email"
                    placeholder="example@gmail.com"
                    id="email"
                    name={LoginFormKeys.Email}
                />
                <label htmlFor="password">password</label>
                <input
                    value={values[LoginFormKeys.Password]}
                    onChange={changeHandler}
                    type="password"
                    placeholder="********"
                    id="password"
                    name={LoginFormKeys.Password}
                />
                <button type="submit" onClick={handleLogin}>Log In</button>
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
