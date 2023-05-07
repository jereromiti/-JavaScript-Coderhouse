// Aplicacion que resuelve salario segun valor hora, jornada, dias trabajados, e impuestos

// Funciones
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplica = (a, b) => a * b;
// const impuestos = x => x * 0.22;
function impuestos(impEntero) {
    let impDecimal = impEntero / 100;
    return impDecimal;
}
function descuento(x, impDecimal) {
    return (x * impDecimal);
}

function calcularSalario() {
    // Variables Input
    let valorHora = parseFloat(prompt("Escribe el valor hora a calcular"));
    let horasTrabajadas = parseInt(prompt("Escribe la cantidad de horas por jornada"));
    let diasQuincena = parseInt(prompt("Escribe la cantidad de dias a calcular"));
    let impEntero = parseFloat(prompt("Escribe el porcentaje total de impuestos"))
    //
    
    if(!isNaN(valorHora) && !isNaN(horasTrabajadas) && !isNaN(diasQuincena) && !isNaN(impEntero)){
        let impDecimal = impuestos(impEntero)
        let resultadoInicial = multiplica(multiplica(valorHora, horasTrabajadas), diasQuincena);
        let descuentos = descuento(resultadoInicial, impDecimal);
        let resultadoFinal = resta(resultadoInicial, descuentos);
        alert(`El resultado final con ${impEntero}% de impuestos es $${resultadoFinal} pesos`)
    }else{
        alert("Los datos ingresados son incorrectos o estan incompletos.");
    }
}

calcularSalario()