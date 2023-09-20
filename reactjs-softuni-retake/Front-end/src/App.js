import { useState } from "react";


import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";

import { AuthContext } from "./components/contexts/AuthContext";



function App() {
    const [cartIsShown, setCartIsShown] = useState(false);
    const [auth, setAuth] = useState({});
    const [currentForm, setCurrentForm] = useState("login");
    const [logintrue, setLoginTrue] = useState(false);

    const onLoginSubmit = async (data) => {
    };

    // const showCartHandler = () => {
    //     setCartIsShown(true);
    // };

    // const hideCartHandler = () => {
    //     setCartIsShown(false);
    // };

    // const toggleForm = (formName) => {
    //     setCurrentForm(formName);
    // };

    return (
        <AuthContext.Provider value={{ onLoginSubmit }}>
            <main>
                <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </main>
        </AuthContext.Provider>
    );
    // <CartProvider>
    // {
    //      {currentForm === "login" ? (
    //       <Login onFormSwitch={toggleForm} />
    //     ) : (
    //       <Register onFormSwitch={toggleForm} />
    //     )} 
    // }

    //   {cartIsShown && <Cart onClose={hideCartHandler} />}
    //   <Header onShowCart={showCartHandler} />
    //   <main>
    //     <Routes>
    //       <Route
    //         path="/login"
    //         element={<Login />}
    //         onLoginSubmit={onLoginSubmit}
    //       />
    //     </Routes>
    //     <Meals />
    //   </main>
    // </CartProvider>


}

export default App;
