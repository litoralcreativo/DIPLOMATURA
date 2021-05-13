const usuario = {
  nombre: "Gaston",
  apellido: "Chatelet",
  edad: 31,
  trabajo: "Programador",
};

const { nombre, apellido, edad, trabajo } = usuario;
// deconstructing: nos permite darle valoir a cada variable del objeto o a cada posicion del array
// y nos ahorra anteponer el nombre del objeto (objeto.variable --> variable)
// o la posicion en un array (objeto[i] --> variable)

console.log(
  `nombre: ${nombre}, apellido: ${apellido}, edad: ${edad}, trabajo: ${trabajo}`
);

const frutas = ["frutilla", "durazno", "manzana", "pera", "quinotos", "uva"];

const [fruta1, fruta2, fruta3, fruta4, fruta5, fruta6] = frutas;

console.log(fruta1);

const result = [
  {
    id: 2154,
    nombre: "Gastón",
  },
];

const [persona] = result;
console.log(persona);

// ES6 --> then y catch
// peticion a base de datos. Primero le tengo q decir a JS que espere..
const get = (url = "https://rickandmortyapi.com/api/character") => {
  fetch(url) // fetch: metodo nativo de JS que trae info de un server
    .then((res) => res.json())
    .then((data) => console.log(data)) // then: se ejecuta cuando todo sale bien
    .catch((e) => console.error(e)); // catch: se ejecuta cuando hay un error
};

// ES8 --> async y await
// es mas versatil ya que me permite correr lineas de codigo
// por fuera del bloque de promesas
const getAsync = async (url = "https://rickandmortyapi.com/api/character") => {
  try {
    const response = await fetch(url);
    const { results: personajes } = await response.json();
    const randInt = Math.round(Math.random() * personajes.length);
    console.log(personajes[randInt]); // esta linea recien se va a ejecutar cuando las anteriores hayan terminado

    return personajes;
  } catch (e) {
    console.error(e);
  }
};

const start = async () => {
  const personajes = await getAsync();
  personajes.map((personaje) => {
    const card = `
    <div class="col-4 mt-4">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top p-3" src="${personaje.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-text"><strong>${personaje.name}</strong></h5>
          <p class="card-text"><strong>Especie:</strong> ${personaje.species}</p>
          <p class="card-text"><strong>Planeta de origen:</strong> ${personaje.location.name}</p>
        </div>
      </div>
    </div>
    `;
    document.getElementById("row").insertAdjacentHTML("beforeend", card);
  });
};

const buscador = async () => {
  const { value: nombre } = document.getElementById("input");
  const personajes = await getAsync();
  const personaje = personajes.find((personaje) => personaje.name == nombre);
  if (personaje) {
    const card = `
    <div class="col-4 mt-4">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top p-3" src="${personaje.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-text"><strong>${personaje.name}</strong></h5>
          <p class="card-text"><strong>Especie:</strong> ${personaje.species}</p>
          <p class="card-text"><strong>Planeta de origen:</strong> ${personaje.location.name}</p>
        </div>
      </div>
    </div>
    `;
    document.getElementById("row").innerHTML = "";
    document.getElementById("row").insertAdjacentHTML("beforeend", card);
  }
};

/* const changeCharacter = (personaje) => {
  const titulo = document.getElementById("title");
  const foto = document.getElementById("foto");
  const gender = document.getElementById("gender");
  const status = document.getElementById("status");
  const species = document.getElementById("species");

  titulo.innerHTML = personaje.name;
  foto.src = personaje.image;
  gender.innerHTML = `Gender: ${personaje.gender}`;
  status.innerHTML = `Status: ${personaje.status}`;
  species.innerHTML = `Species: ${personaje.species}`;
};
 */
start();
