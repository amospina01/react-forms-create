import React from 'react';
import  './LicoresCategoryRow.style.css'

const LicoresCategoryRow = (props) => {
    return(
        <div className="LicoresCategoryRow-container">
            {props.categoryName}      
        </div>
        
    );
}

export default LicoresCategoryRow;