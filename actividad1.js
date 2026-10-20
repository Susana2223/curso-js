//Almacenar un texto en una variable y luego mostrarlo en orden inverso en la consola
//Ejemplo: "senati" -> 'itanes'

const textoOriginal = "SENATI"
const longitud = textoOriginal.length
let inverso= ""

for(let i= longitud - 1; i >= 0; i--){
  inverso=inverso.concat(textoOriginal.substring(i, i + 1))
}
console.log(inverso)



//Crear una variable donde almacene una dirección de correo electronico
//verificar si el correo es válido cuando tiene un solo @
//Ejemplo:
// jhon@gmail.com [correcto]
// luis@gmail@.com [incorrecto]
// mariagmail.com [incorrecto]
const correo = "susana@gmail.com"
let total = 0

for (let i = 0; i < correo.length; i++){
  //Calcular cuántos @ encuntras...
  if(correo.substring(i, i + 1) === "@"){
    total= total +1
  }
}

if(total === 1){
   console.log(correo,'[correcto]')
}else{
  console.log(correo, '[incorrecto]')
}
 