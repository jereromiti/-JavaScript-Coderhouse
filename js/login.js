// // SIGN IN

// Funcion

// Guardar datos de nuevos usuarios en el localStorage

const userRegisterLocal = (userName, UserPassword) => {
  let jsonUsuariosLocal = localStorage.getItem("users");
  let arregloUsuariosLocal = [];
  // let arregloUsuariosSession = [];

  if (jsonUsuariosLocal) {
    arregloUsuariosLocal = JSON.parse(jsonUsuariosLocal);
  }

  let usuariosLocal = {
    id: arregloUsuariosLocal.length + 1,
    name: userName,
    password: UserPassword,
  };

  arregloUsuariosLocal.push(usuariosLocal);
  localStorage.setItem("users", JSON.stringify(arregloUsuariosLocal));
};

// Funcion

// Guardar datos de nuevos usuarios en sessionStorage

const userRegisterSession = (userName, UserPassword) => {
  let jsonUsuariosSession = sessionStorage.getItem("users");
  let arregloUsuariosSession = [];

  if (jsonUsuariosSession) {
    arregloUsuariosSession = JSON.parse(jsonUsuariosSession);
  }

  let usuariosSession = {
    id: arregloUsuariosSession.length + 1,
    name: userName,
    password: UserPassword,
  };

  arregloUsuariosSession.push(usuariosSession);
  sessionStorage.setItem("users", JSON.stringify(arregloUsuariosSession));
};

// Elementos del DOM HTML

const form = document.getElementById("form");
const saveDataCheckbox = document.getElementById("saveData");
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

// Evento

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let inputs = event.target.children;

  if (saveDataCheckbox.checked) {
    // Guardar datos en localStorage
    userRegisterLocal(inputs[0].value, inputs[1].value);
  } else {
    // Guardar datos en sessionStorage
    userRegisterSession(inputs[0].value, inputs[1].value);
  }

  document.getElementById("message").innerHTML = "Registro exitoso!";
  form.reset();
});

// // LOG IN

// document.getElementById("Form").addEventListener("submit", function(login) {
//   login.preventDefault(); // preventDefault() Evita el envío del formulario por defecto

//   let username = document.getElementById("username").value;
//   let password = document.getElementById("password").value;

//   // Lógica de validación de usuario/contraseña

//   if (username === "jere" && password === "123") {
//     // Usuario/contraseña válidos => redirigir a X sitio
//     window.location.href = "https://www.google.com/";
//   } else {
//     // Usuario/contraseña in válidos => mostrar mensaje de error
//     document.getElementById("message").innerHTML = "Nombre de usuario o contraseña incorrectos.";
//   }
// });
