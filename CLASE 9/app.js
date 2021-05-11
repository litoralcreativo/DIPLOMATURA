const alturas = [10, 20, 4, 30, 25, 2, 4, 9, 71, 3];
const alturas2 = [10, 11, 8, 2, 51, 4, -8, 1, 0, -41];

function buscarPicos(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    item > max ? (max = item) : item < min ? (min = item) : null;
  }
  return { min, max };
}

const getOverAverage = () => {
  const alturas = [10, 20, 4, 30, 25, 2, 4, 9, 71, 3];
  let prom = alturas.reduce((acum, value) => acum + value) / alturas.length;
  let result = alturas.filter((item) => item > prom);
  return result;
};

const buscarUsuario = () => {
  const usuarios = [
    {
      id: 0,
      user: "Gaston",
    },
    {
      id: 1,
      user: "Carlos",
    },
  ];
  const user_id = parseInt(document.getElementById("_id").value);
  let usuario = usuarios.find((user) => user.id === user_id);
  // const usuario = getUser(usuarios, id);
  console.log(usuario);
};

/* const getUser = (arr, id) => {
  let user;
  arr.forEach((element) => {
    if ((element.id = id)) user = element;
  });
  return user;
};
 */

/* API = Application Programming Interfaces
 * la usamos como intermediaro entre nuestro script
 * y una base de datos
 */
