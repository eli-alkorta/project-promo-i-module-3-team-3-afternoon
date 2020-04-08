import React from 'react';

class Share extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
    
            <div className="containerShareBottom">
                <p id="error-message" className="hiddenMessage">{this.props.requiredMessage}</p>
                <button id="buttonValidation" className="button buttonShare buttonDisabled" type="button" disabled>
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
           
        )
    }
}

export default Share;