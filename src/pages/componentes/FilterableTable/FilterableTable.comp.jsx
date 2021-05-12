import React, { useState } from 'react';
import Titulo from '../Titulo/Titulo.comp'
import LicoresTable from '../LicoresTable/LicoresTable.comp'
import LicoresPromocionTable from '../LicoresPromocionTable/LicoresPromocionTable.comp'

import  './FilterableTable.style.css'


const FilterableTable = (props) => {

    const [tipo, setTipo] = useState('l1');
    const [name, setName] = useState('');
    const [pais, setPais] = useState('');
    const [precio, setPrecio] = useState('');
    const [estado, setEstado] = useState('Disponible');


    const [nameOne, setNameOne] = useState('');
    const [nameTwo, setNameTwo] = useState('');
    const [valor, setValor] = useState('');

    const agregarLicor = (event) =>{
        event.preventDefault();
        const newLicor = 
        {
            id:name,
            name:name,
            pais:pais,
            precio: Number (precio),
            estado: estado,

        };
        props.onAddLicor(newLicor, tipo);

     

    
    }

    const agregarProm = (event) =>{
        event.preventDefault();

        console.log('nameOne ' + nameOne);
        console.log('nameTwo ' + nameTwo);
        console.log('valor ' + valor);


    }

    return(
        <div className='FilterableTable-container'>
            <Titulo/>
            <span className='products-form'>
                <form>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                Tipo
                            </td>
                        </tr>
                        
                        <tr>
                            <td>
                    <select value={tipo}
                     onChange={(event)=>{
                        setTipo(event.target.value);}}>
                        <option value="l1">Aguardiente</option>
                        <option value="l2">Ron</option>
                        <option value="l3">Whisky</option>
                    </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Marca
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" value={name}
                                onChange={(event)=>{
                                    setName(event.target.value);
                                }}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                pais
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" value={pais}
                                onChange={(event)=>{
                                    setPais(event.target.value);
                                }}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Precio
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" value={precio}
                                onChange={(event)=>{
                                    setPrecio(event.target.value);
                                }}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <select value={estado}
                                onChange={(event)=>{
                                    setEstado(event.target.value);}}>
                                    <option value="Disponible">Disponible</option>
                                    <option value="Agotado">Agotado</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <button onClick={agregarLicor}>Agregar</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>


            </span>
            <span className='products-form2'>
                <form>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                Promocion
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Primer producto
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" value={nameOne}
                                onChange={(event)=>{
                                    setNameOne(event.target.value);
                                }}/>
                            </td>
                        </tr>
                        
                        <tr>
                            <td>
                                Segundo producto
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" value={nameTwo}
                                onChange={(event)=>{
                                    setNameTwo(event.target.value);
                                }}/>
                            </td>
                        </tr>
                        
                        <tr>
                            <td>
                                Precio
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" value={valor}
                                onChange={(event)=>{
                                    setValor(event.target.value);
                                }}/>
                            </td>
                        </tr>
                        
                        <tr>
                            <td>
                            <button onClick={agregarProm}>Agregar</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>


            </span>
            <LicoresTable listaLicores={props.listaLicores}
            onAddLicor={props.onAddLicor}/>
            
            <LicoresPromocionTable/>
            
        </div>
        
    );
}

export default FilterableTable;