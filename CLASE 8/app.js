let usuarios = [
  { userName: "admin", password: "admin1234" },
  { userName: "gaston", password: "gaston1234" },
];

function checkUserCredentials() {
  const user = document.getElementById("inputName").value;
  const pass = document.getElementById("inputPassword").value;
  let usuarioValido = false;
  usuarios.forEach((usuario) => {
    let aciertos = 0;
    if (usuario.userName == user && usuario.password == pass) {
      usuarioValido = true;
    }
  });

  if (usuarioValido) {
    console.log("Usuario valido..");
    console.log(user);
    console.log(pass);
    window.location.href = "paginafinal.html";
  } else {
    alert("El nombre de usuario o contraseña no son correctos..");
  }
  return false;
}

function addUser() {
  const user = document.getElementById("inputNameReg").value;
  const pass = document.getElementById("inputPasswordReg").value;

  let usuarioExiste = false;
  usuarios.forEach((usuario) => {
    if (usuario.userName == user) usuarioExiste = true;
  });
  if (usuarioExiste) {
    alert("El usuario ya existe");
  } else {
    let newUser = { userName: user, password: pass };
    usuarios.push(newUser);
    alert("Usuario registrado correctamente..");
    document.getElementById("inputNameReg").value = "";
    document.getElementById("inputPasswordReg").value = "";
  }
  return false;
}
