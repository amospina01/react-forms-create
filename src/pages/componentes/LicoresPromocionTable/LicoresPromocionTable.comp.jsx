import React from 'react';
import  './LicoresPromocionTable.style.css'
import LicoresPromocionRow from '../LicoresPromocionRow/LicoresPromocionRow.comp'



const LicoresPromocionTable = () => {
    return(
        <div className='LicoresPromocionTable-container'>
                  
                <LicoresPromocionRow licoresProm={{
                nameOne:"Ron leon dormido",
                nameTwo: 'Aguardiente Cristal',
                valor:75000,
            }} />       
            
            
                                    
        </div>
    );
}

export default LicoresPromocionTable;