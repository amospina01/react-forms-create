import React from 'react';
import  './LicoresPromocionRow.style.css'


const LicoresPromocionRow = (props) => {
    return(
        <div >
            <div className='LicoresPromocionRow-container'>

                <span className='LicoresPromocionRow-container1'>{props.licoresProm.nameOne}{' + '}
                {props.licoresProm.nameTwo}{'    '}
                ${props.licoresProm.valor}{'    '}

                </span>

               
            </div>

        </div>
    );
}

export default LicoresPromocionRow;