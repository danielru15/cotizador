import React, { useState } from 'react';
import styled from "styled-components";
import Header from "./components/Header";
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`
function App() {
  const [cargando, setcargando] = useState(false)
  const [resumen, setresumen] = useState({
    cotizacion:0,
    datos: {
      Marca: '',
      year: '', 
      Plan: ''
    }
  })
  const {cotizacion, datos } = resumen
  return (
    <Contenedor>
      <Header
        titulo ='cotizador de seguros'
      />
      <ContenedorFormulario>
        <Formulario
          setcargando={setcargando}
          setresumen={setresumen}
        />
        { cargando ? <Spinner/> : null}
        <Resumen
          datos={datos}
        />
         { !cargando  ?
                <Resultado 
                  cotizacion={cotizacion}
                /> : null
            }
      </ContenedorFormulario>
    </Contenedor>
    
  );
}

export default App;
