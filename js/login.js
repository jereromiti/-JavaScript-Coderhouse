// // SIGN IN

// DOM HTML

const formRegistro = document.getElementById("form__signin");
const formInicio = document.getElementById("form__login");
const saveDataCheckbox = document.getElementById("saveData");

//

// Funcion que al llamarse, guarda los inputs ingresados en el localStorage

const userRegisterLocal = (userName, userPassword) => {
  let jsonUsuariosLocal = localStorage.getItem("users");
  let arregloUsuariosLocal = [];

  if (jsonUsuariosLocal) {
    arregloUsuariosLocal = JSON.parse(jsonUsuariosLocal);
  }

  let usuariosLocal = {
    id: arregloUsuariosLocal.length + 1,
    name: userName,
    password: userPassword,
  };

  arregloUsuariosLocal.push(usuariosLocal);
  localStorage.setItem("users", JSON.stringify(arregloUsuariosLocal));
};

// Funcion que al llamarse, guarda los inputs ingresados en el sessionStorage

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

// Funcion que verifica el estado del input Checkbox, y segun su condicion llama a las funciones (userRegisterLocal[checkBoxOn] y userRegisterSession[checkBoxOff]).

function register(event) {
  event.preventDefault(); // Evita el envío del formulario por defecto

  let inputs = event.target.children;

  if (saveDataCheckbox.checked) {
    // Guarda datos en localStorage
    userRegisterLocal(inputs[0].value, inputs[1].value);
  } else {
    // Guarda datos en sessionStorage
    userRegisterSession(inputs[0].value, inputs[1].value);
  }

  document.getElementById("message").innerHTML = "Registro exitoso!";

  formRegistro.reset();
}

formRegistro.addEventListener("submit", register); // Llamando funcion

// Funcion que valida

function login(event) {
  event.preventDefault();

  let usernameLogin = document.getElementById("username").value;
  let passwordLogin = document.getElementById("password").value;

  let jsonUsuariosLocal = localStorage.getItem("users");
  let arregloUsuariosLocal = [];

  if (jsonUsuariosLocal) {
    arregloUsuariosLocal = JSON.parse(jsonUsuariosLocal);
  }

  // Lógica de validación de user/password
  let userFound = arregloUsuariosLocal.find(
    (user) => user.name === usernameLogin && user.password === passwordLogin
  );

  if (userFound) {
    window.location.href = "/";
  } else {
    document.getElementById("messageInvalid").innerHTML =
      "El nombre de usuario o contraseña es incorrecto o no existe. Verifique los datos y vuelva a intentar.";
  }
}

formInicio.addEventListener("submit", login); // Llamando funcion
