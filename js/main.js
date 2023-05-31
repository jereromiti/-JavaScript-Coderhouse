// Array de autos
const autos = [
  { marca: "Chevrolet", modelo: "Cruze RS", año: 2023, precio: 22500 },
  { marca: "Chevrolet", modelo: "Joy", año: 2019, precio: 15000 },
  { marca: "Chevrolet", modelo: "Tracker", año: 2021, precio: 27000 },
  { marca: "Toyota", modelo: "Corolla", año: 2019, precio: 20000 },
  { marca: "Toyota", modelo: "Hilux", año: 2023, precio: 35000 },
  { marca: "Toyota", modelo: "Supra", año: 1998, precio: 120000 },
];

// Método de búsqueda
function buscarAutos(filtrado) {
  const autosFiltrados = autos.filter((auto) => {
    return (
      auto.marca.toLowerCase().includes(filtrado.toLowerCase()) ||
      auto.modelo.toLowerCase().includes(filtrado.toLowerCase())
    );
  });
  return autosFiltrados;
}

document.getElementById("btn-buscar").addEventListener("click", () => {
  const busqueda = document.getElementById("barra-busqueda").value.trim();

  const resultadoBusqueda = buscarAutos(busqueda);

  const resultadoHTML = resultadoBusqueda.map(generarCard).join("");

  const divResultado = document.getElementById("resultado-busqueda");
  divResultado.innerHTML = resultadoHTML;

  if (resultadoBusqueda.length === 0) {
    divResultado.innerHTML =
      '<h4 class="text-light">No se han encontrado resultados para tu búsqueda.</h4>';
  }
});

function generarCard(auto) {
  return `
    <div class="card col-lg-4 col-md-6 col-sm-12 m-3" style="width: 18rem;">
        <img src="./assets/img/rs.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${auto.marca} ${auto.modelo} - Año: ${auto.año}</h5>
            <p class="card-text">Precio: $${auto.precio} usd</p>
            <a href="#" class="btn btn-primary">Mas info</a>
        </div>
    </div>
  `;
}
