// obtiene diferencia de años
export function obtenerDiferenciaYear (Year){
    return new Date().getFullYear() - Year
}
// calcula total a pagar segun la marca
export function calcularMarca (Marca) {
    let incremento 
    
    switch (Marca) {
        case 'europeo':
            incremento = 1.30
            break;
        case 'americano':
            incremento = 1.15
            break;
        case 'asiatico':
            incremento = 1.05
            break;
        default:
            break;
    }
    return incremento
}
// calcular el tipo de seguro
export function obtenerPlan (Plan){
    return (Plan === 'basico') ? 1.20 : 1.50
}

// muestra la 1 letra en mayuscula
export function primeraMayuscula (texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1) 
}