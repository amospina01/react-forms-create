import React from 'react';
import  './LicoresRow.style.css'


const LicoresRow = (props) => {
    return(
        <div >
            <div className='LicoresRow-container'>

                <span className='LicoresRow-container1'>{props.Licores.name}{'    '}
                {props.Licores.pais}{'    '}
                ${props.Licores.precio}{'    '}

                {
                    props.Licores.estado === 'Agotado'
                    ?
                        
                        <span className='Licores-agotado'>{props.Licores.estado}</span>
                    :
                    <span>{props.Licores.estado}</span>

                }</span>

                
                

                


                
                
            </div>

        </div>
    );
}

export default LicoresRow;