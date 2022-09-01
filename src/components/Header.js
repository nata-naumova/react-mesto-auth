import React from 'react';
import { Link, useLocation } from "react-router-dom";

export function Header({ src, email, handleSignOut }) {
    const location = useLocation();

    const forLogin = () => {
        return (
            <div className="header__info">
                <Link to="/sign-up" className="header__link">
                    Регистрация
                </Link>
            </div>
        )
    }
    const forReg = () => {
        return (
            <div className="header__info">
                <Link to="/sign-in" className="header__link">
                    Войти
                </Link>
            </div>
        )
    }
    const forPage = () => {
        return (
            <div className="header__info">
                <p className="header__title">{email}</p>
                <button className="header__btn btn" onClick={handleSignOut}>
                    Выйти
                </button>
            </div>
        )
    }
    const render = () => {
        if (location.pathname === '/') {
            return forPage();
        } else if (location.pathname === '/sign-in') {
            return forLogin();
        } else if (location.pathname === '/sign-up') {
            return forReg();
        }
    }
    return (
        <header className="header">
            <img className="header__logo" src={src} alt="Логотип сайта" />
            {render()}
        </header>
    )
}