// Aplicacion que resuelve salario segun valor hora, jornada, dias trabajados, e impuestos

// Funciones
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplica = (a, b) => a * b;
const impuestos = x => x * 0.22;

// Variables

let valorHora = parseInt(prompt("Escribe el valor hora a calcular"));
let horasTrabajadas = parseInt(prompt("Escribe la cantidad de horas por jornada"));
let diasQuincena = parseInt(prompt("Escribe la cantidad de dias a calcular"));

if((valorHora !="") && (horasTrabajadas !="") && (diasQuincena !="")){
    let resultadoInicial = multiplica(multiplica(valorHora, horasTrabajadas), diasQuincena);
    let descuentos = impuestos(resultadoInicial);
    let resultadoFinal = resta(resultadoInicial, descuentos);
    alert(`El resultado final con 22% de impuestos es $${resultadoFinal}`)
}else{
    alert("Los datos ingresados son incorrectos o estan incompletos.");
}