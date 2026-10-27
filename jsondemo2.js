//https://dragonball-api.com/api/characters/1
//Paso 1: Función asincrona (tiempos distintos/diferidos) - Latencia(Esperar...)

//Paso2: URL (endpoint)

async function obtenerPersonaje(id) {
  const API_URL = "https://dragonball-api.com/api/characters/${id}";
  //Paso 3: App es propensa a errores
  try {
    //Paso 4: Realizar la petición
    const respuesta = await fetch(API_URL);

    //Paso 5: ¿Existe una respuesta?
    if (!respuesta.ok) {
      throw new Error(`No hay comunicación con el servidor`); //¡Stop!
    }
    //Paso6 : Si llegamos hasta aquí, entonces hemos recibido los datos (JSON)
    //JSON : (cadena) > OBJECT JS
    const datos = await respuesta.json();
    //Paso 7 : Mostrar todo el json
    //console.log(datos)

    //mostrar solo el nombre de la transformaciones
    const transformaciones = datos.transformations;
    transformaciones.forEach((transformacion) => {
      console.log(transformacion.name);
    });
  } catch (e) {
    console.error(`No se puo concretar la operación: ${e}`);
  }
}

//fin función obtenrePersonaje()
//test
obtenerPersonaje(3);
