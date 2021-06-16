import React, { useState } from 'react'
import styled from 'styled-components';
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from '../helper';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;
const Label = styled.label`
    flex: 0 0 100px;
`;
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;
const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;
    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width:100%;
    text-align: center;
    margin-bottom: 2rem;
`;
const Formulario = ({setresumen, setcargando}) => {
    const [error, seterror] = useState(false)
    const [datos, setdatos] = useState({
        Marca:'',
        Year:'',
        Plan:''
    })
    // extraer valores
    const {Marca , Year , Plan} = datos
    // leer datos
    const obtenerDatos = (e) => {
        setdatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }
    // validando formulario
    const cotizador = (e) => {
        e.preventDefault()
        if (Marca.trim() === '' || Year.trim() === '' || Plan.trim() === '' ){
            seterror(true)
            return
        }
        seterror(false)
        // base de 2000
        let resultado = 2000
        // obtener diferencia de años
        const diferencia = obtenerDiferenciaYear(Year)
        // por cada año restar el 5%
        resultado -= ((diferencia * 5) * resultado )/ 100

        // por marca
        resultado = calcularMarca(Marca) * resultado

        // por plan 
        const incrementoPlan = obtenerPlan(Plan) 
        resultado = parseFloat(incrementoPlan * resultado).toFixed(2)
        setcargando(true)
        setTimeout(() => {
            setcargando(false)
            setresumen({
                cotizacion: resultado,
                datos
            })
        },3000);

    }
    return (
        <form
            onSubmit={cotizador}
        >
        { error ? <Error>Todos los campos son obligatorios</Error>  : null }
            <Campo>
                <Label>Marca</Label>
                <Select
                     name='Marca'
                     value={Marca}
                     onChange={obtenerDatos}
                >
                    <option value="">seleccione</option>
                    <option value="americano">americano</option>
                    <option value="europeo">europeo</option>
                    <option value="asiatico">asiatico</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select
                    name="Year"
                    value={Year}
                    onChange={obtenerDatos}
                >
                    <option value="">seleccione</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="Plan"
                    value="basico"
                    checked={Plan === 'basico'}
                    onChange={obtenerDatos}
                /> Básico

                <InputRadio 
                    type="radio"
                    name="Plan"
                    value="completo"
                    checked={Plan === 'completo'}
                    onChange={obtenerDatos}
                /> Completo
            </Campo>

            <Boton type="submit">Cotizar</Boton>
        </form>
    )
}

export default Formulario
