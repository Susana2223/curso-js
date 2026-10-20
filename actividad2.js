//Crear un objeto que almacena datos de una mascota
//desestructurar utilizando un minimo de 4 variables


const mascota = {
  nombre: "Maylov",
  raza: "pitbull",
  tamaño: "mediano",
  peso: 25,
  edad: 3,
  vacunado: true

}

const {nombre, raza, tamaño, peso, edad, vacunado} = mascota
console.log(nombre,raza,tamaño, peso, edad,vacunado)