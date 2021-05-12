import React from 'react';
import  './Titulo.style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWineBottle} from '@fortawesome/free-solid-svg-icons';

const Titulo = () => {
    return(
        <div className='Titulo-container'>
            Licores AMOL {'    '}    
            <FontAwesomeIcon icon={faWineBottle}/>
        </div>
        
    );
}

export default Titulo;