import React from 'react';
import LicoresCategoryRow from '../LicoresCategoryRow/LicoresCategoryRow.comp'
import LicoresRow from '../LicoresRow/LicoresRow.comp'
import  './LicoresTable.style.css'



const LicoresTable = (props) => {

    //console.log({props});

    

    return(
        <div className='LicoresTable-container'>
                  
          {props.listaLicores.map((category, index)=>{
              return (<React.Fragment key={category.id}>
                <LicoresCategoryRow categoryName={category.name}/>
                {category.products.map((Licores, indexProduct)=>{
                    return(
                        <LicoresRow 
                            key = {Licores.id}
                            Licores={Licores}
                            />
                        
                    )

                })}
              </React.Fragment>

              )
          })}
                      
            
                                    
        </div>
    );
}

export default LicoresTable;