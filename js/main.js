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
function buscarAutos(busqueda) {
    const autosFiltrados = autos.filter(auto => {
        return auto.marca.toLowerCase().includes(busqueda.toLowerCase()) || auto.modelo.toLowerCase().includes(busqueda.toLowerCase());
    });

    return autosFiltrados;
}

document.getElementById("btn-buscar").addEventListener("click", () => {
    const busqueda = document.getElementById("barra-busqueda").value;

    const resultadoBusqueda = buscarAutos(busqueda);

    const divResultado = document.getElementById('resultado-busqueda');
    divResultado.innerHTML = '';

    if (resultadoBusqueda.length === 0) {
        divResultado.innerHTML = 'No se encontraron resultados.';
    } else {
        resultadoBusqueda.forEach(auto => {
        const autoInfo = document.createElement('p');
        autoInfo.textContent = `${auto.marca} ${auto.modelo} - Año: ${auto.año} - Precio: $${auto.precio} Usd`;
        divResultado.appendChild(autoInfo);
        });
    }
});