const persona = {
  nombre: "Gaston",
  apellido: "Chatelet",
  edad: 31,
  hobbies: [{ nombre: "programar" }, { nombre: "tocar la guitarra" }],
};

// JSON
let alumnos = [
  {
    id: 1,
    nombre: "Gaston",
    edad: 31,
  },
  {
    id: 2,
    nombre: "Carlos",
    edad: 29,
  },
  {
    id: 3,
    nombre: "Maria",
    edad: 33,
  },
  {
    id: 4,
    nombre: "Juana",
    edad: 25,
  },
];
let contador = 0;
let acumulador = 0;
for (let i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i]);
  acumulador += alumnos[i].edad;
}
console.log("Acumulador: " + acumulador);

const numeros = () => {
  const n1 = parseInt(document.getElementById("n1").value);
  const n2 = parseInt(document.getElementById("n2").value);
  const result = n1 + n2;
  console.log("El resultado de la suma es: " + result);
};

// hacer una calculadora que sume reste multiplique o divida
let firstElement = "";
let secondElement = "";
let second = false;
let esSuma = false;
let esResta = false;
let esMultiplicacion = false;
let esDivision = false;
let clean = false;
let needEquals = false;

function setNum(element) {
  if (clean) {
    limpiar();
    clean = false;
  }
  let num = 0;
  if (second) {
    secondElement += element.innerHTML;
    num = element.innerHTML;
  } else {
    firstElement += element.innerHTML;
    num = element.innerHTML;
  }
  const mon = document.getElementById("monitor");
  mon.value += num;
}

function limpiar() {
  const mon = document.getElementById("monitor");
  mon.value = "";
  firstElement = 0;
  secondElement = 0;
}

function igual() {
  if (clean) {
    limpiar();
    clean = false;
  }
  second = false;
  let n1 = parseInt(firstElement);
  let n2 = parseInt(secondElement);
  const mon = document.getElementById("monitor");
  if (esSuma) {
    mon.value = n1 + n2;
  } else if (esResta) {
    mon.value = n1 - n2;
  } else if (esMultiplicacion) {
    mon.value = n1 * n2;
  } else if (esDivision) {
    if (n2 == 0) {
      mon.value = "division por cero";
    } else {
      mon.value = (n1 / n2).toFixed(2);
    }
  }

  esSuma = false;
  esResta = false;
  esMultiplicacion = false;
  esDivision = false;
  clean = true;
  firstElement = mon.value;
  needEquals = false;
}

function suma() {
  if (clean) {
    second = true;
    secondElement = 0;
    clean = false;
  }
  if (needEquals) return;
  if (!second) second = true;
  const mon = document.getElementById("monitor");
  mon.value += "+";
  esSuma = true;
  needEquals = true;
}

function resta() {
  if (clean) {
    second = true;
    secondElement = 0;
    clean = false;
  }
  if (needEquals) return;
  if (!second) second = true;
  const mon = document.getElementById("monitor");
  mon.value += "-";
  esResta = true;
  needEquals = true;
}

function mult() {
  if (clean) {
    second = true;
    secondElement = 0;
    clean = false;
  }
  if (needEquals) return;
  if (!second) second = true;
  const mon = document.getElementById("monitor");
  mon.value += "*";
  esMultiplicacion = true;
  needEquals = true;
}

function div() {
  if (clean) {
    second = true;
    secondElement = 0;
    clean = false;
  }
  if (needEquals) return;
  if (!second) second = true;
  const mon = document.getElementById("monitor");
  mon.value += "/";
  esDivision = true;
  needEquals = true;
}
