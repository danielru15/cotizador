import React from 'react'
import styled from 'styled-components';
import {primeraMayuscula} from '../helper'

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
    
`;

const Resumen = ({datos}) => {
    const {Marca , Year , Plan} = datos
    if (Marca === '' || Year === '' || Plan === '' ) return null
    return (
        <ContenedorResumen>
            <h1>Cotizacion</h1>
            <ul>
                <li>Marca: {primeraMayuscula(Marca)} </li>
                <li>Year: {Year} </li>
                <li>Plan: {primeraMayuscula(Plan)} </li>
            </ul>
        </ContenedorResumen>
    )
}

export default Resumen
