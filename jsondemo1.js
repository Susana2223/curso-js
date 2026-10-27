//Se requieren tenga las claves:
//2 cadena
//2 numérico (entero, decimal)
//1 null
//1 lógica (false / true)
//1 array (cadenas)
//1 array (objetos)
//1 objeto (arrays)

//10 MINUTOS
const pelicula = {
  titulo: "Avenger",
  sinopsis: "Los vengadores se unen para derrotar a LoKY",
  presupuesto: 220000000,
  recaudacion: 15200000000,
  paisBetado: null,
  reEstreno: false,
  generos: ["Acción", "Ciencia ficción", "Aventura"],
  personajes: [
    { nombre: "Iron Man", actor: "Robert Downey Jr." },
    { nombre: "Capitán América", actor: "Chris Evans" },
    { nombre: "Thor", actor: "Chris Hemsworth" },
  ],

  produccion: {
    estudios: ["Marvel Studios"],
    paises: ["Estados Unidos"],
    idiomas: ["Inglés", "Español", "Francés"],
  },
};

// ¿Cuál es el último idioma?
console.log(pelicula.produccion.idiomas[pelicula.produccion.idiomas.length - 1]);

// ¿Cuál es el personaje del primer actor?
console.log(pelicula.personajes[0].nombre);

// ¿Cuál es el actor del último personaje de la lista?
console.log(pelicula.personajes[pelicula.personajes.length - 1].actor);

// ¿Cuáles son todos los estudios de producción?
const estudios = pelicula.produccion.estudios;
estudios.forEach(estudio => {
    console.log(estudio);
});



