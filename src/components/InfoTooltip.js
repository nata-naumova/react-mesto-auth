import React from "react";
import succesSvg from '../images/succes-reg.svg';
import errorSvg from '../images/error-reg.svg';

function InfoTooltip({ isOpen, onClose, registration }) {
    const render = () => {
        if (registration) {
            return (
                <React.Fragment>
                    <img className="popup__icon" src={succesSvg} alt="Регистрация прошла успешно!" />
                    <h2 className="popup__title popup__title_type_tooltip">Вы успешно зарегистрировались!</h2>
                    <button className="btn popup__close" onClick={onClose}></button>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <img className="popup__icon" src={errorSvg} alt="Ошибка регистрации!" />
                    <h2 className="popup__title popup__title_type_tooltip">Что-то пошло не так! Попробуйте еще раз.</h2>
                    <button className="btn popup__close" onClick={onClose}></button>
                </React.Fragment>
            )
        }
    }

    return (
        <section className={`popup ${isOpen ? "popup_opened" : ""}`}>
            <div className="popup__content">
                {render()}
            </div>
        </section>
    );
}

export default InfoTooltip;
