import React from 'react';

class shareAll extends React.Component {
    render() {
        return (
            <div className="containerShareTop">
                <div className="subContainer">
                    <div><i className="icon fas fa-share-alt"></i></div>
                    <p className="title">COMPARTE</p>
                </div>
                <div className="iconDirection"><i className="iconDirection3 fas fa-chevron-down"></i></div>
            </div>
            <div className="containerShareBottom">
                <p id="error-message" className="hiddenMessage">Completa los campos obligatorios*</p>
                <button id="buttonValidation" className="button buttonShare" type="button" disabled>
                    <i className="iconSend far fa-address-card"></i>
                    <span className="textButton">CREAR TARJETA</span>
                </button>
                <div className="card__share hidden" id="card-share">
                    <p>La tarjeta ha sido creada:</p>
                    <p id="card-link" className="card__link">card link</p>
                    <a id="twitter-share" href="" target="_blank">
                        <div className="btn-twitter"><i className="fab fa-twitter"></i>Compartir en twitter</div>
                    </a>
                </div>
            </div>
            <div className="line-separator"></div>
        )
    }
}

export default shareAll;