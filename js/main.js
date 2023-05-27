// Array de autos
const autos = [
    { marca: 'Chevrolet', modelo: 'Cruze RS', año: 2023, precio: 22500 },
    { marca: 'Chevrolet', modelo: 'Joy', año: 2019, precio: 15000 },
    { marca: 'Chevrolet', modelo: 'Tracker', año: 2021, precio: 27000 },
    { marca: 'Toyota', modelo: 'Corolla', año: 2019, precio: 20000 },
    { marca: 'Toyota', modelo: 'Hilux', año: 2023, precio: 35000 },
    { marca: 'Toyota', modelo: 'Supra', año: 1998, precio: 120000 },

]

// Método de búsqueda
function buscarAutos(filtrado) {
    const autosFiltrados = autos.filter(auto => {
        return auto.marca.toLowerCase().includes(filtrado.toLowerCase()) || auto.modelo.toLowerCase().includes(filtrado.toLowerCase());
    });
    return autosFiltrados;
}

document.getElementById("btn-buscar").addEventListener("click", () => {
    const busqueda = document.getElementById("barra-busqueda").value;

    const resultadoBusqueda = buscarAutos(busqueda);

    const divResultado = document.getElementById('resultado-busqueda');
    divResultado.innerHTML = '';

    // Operador ternario
    resul = resultadoBusqueda.length === 0 ? true : false
    resul ? divResultado.innerHTML = 'No se encontraron resultados.' : resultadoBusqueda.forEach(auto => {
        const autoInfo = document.createElement('p');
        autoInfo.textContent = `${auto.marca} ${auto.modelo} - Año: ${auto.año} - Precio: $${auto.precio} Usd`;
        divResultado.appendChild(autoInfo);
        });
});


let userPrompt = prompt("Ingrese su nombre de usuario para acceder al sitio")
let pwPrompt = prompt("Ingrese su contraseña")

// guardar informacion
sessionStorage.setItem("nombre", userPrompt);
sessionStorage.setItem("contraseña", pwPrompt);

// recuperar datos del storage
let user = sessionStorage.getItem("nombre");
let pw = sessionStorage.getItem("contraseña");

// Condicionalles If Else if Else
// if (user === "admin" && pw === "admin") {
//     alert(`Bienvenido administrador`)
// }   else if (!isNaN(user) || !isNaN(pw)){
//         alert(`Los datos ingresados estan incompletos`)
//     }   else if (user !== "admin" && pw !== "admin") {
//         alert(`No eres el administrador de este sitio`)
//         }

// Operador ternario
let alerta = (user === "admin" && pw === "admin") ? true : false;
alerta ? alert(`Bienvenido administrador`) : alert(`No eres el administrador de este sitio`);