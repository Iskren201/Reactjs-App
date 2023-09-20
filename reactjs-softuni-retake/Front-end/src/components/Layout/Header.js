import { Fragment, useState } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import { Link, Navigate } from 'react-router-dom';


const Header = (props) => {
    const [isRegistered, setIsRegistered] = useState(true);

    const toggleForm = () => {
        setIsRegistered((prevState) => !prevState);
    };

    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <div>
                    {/* Todo Style button */}
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table full of delicious food!' />
            </div>

        </Fragment>
    );
};

export default Header;
