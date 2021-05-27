var express = require("express");
var router = express.Router();

const profesor = {
  nombre: "Jon",
};

const alumnos = [
  {
    id: 1,
    nombre: "Gaston",
    apellido: "Chatelet",
  },
  {
    id: 2,
    nombre: "Leo",
    apellido: "Messi",
  },
];

// hace un get en la subruta / (localhost:3000/alumnos)
/* GET alumnos page. */
router.get("/", function (req, res) {
  res.render("alumnos", { alumnos, profesor });
});

module.exports = router;
