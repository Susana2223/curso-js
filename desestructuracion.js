//Estructuraa  = OBJETOS
//Desestructuras = ABRIR OBJETOS

const persona = {
  apellidos : "Atuncar Pasache",
  nombres : "Susana Atuncar",
  edad : 20,
  skills : ["PHP", "Java", "Javascript", "SQL", "Python"]
}
//Guardar los apellidos, nombres, edad en variables
/*
const apellidos = persona.apellidos
const nombres = persona.nombres
const edad = persona.edad

console.log(apellidos, nombres, edad)
*/

//Desestructurar es separar datos provenientes de un objeto 
//NOTA1: No es necesario recuperar toda la coleccion
//NOTA2: La variables deben coincidir con las claves
const {nombres, skills} = persona
console.log( nombres, skills)