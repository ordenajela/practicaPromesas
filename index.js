//Ejercicio Uno

function operacionesAsincronas() {
    let numeroAleatorio;
    return new Promise((resolve, reject) => {
      // Inicia una promesa que se resuelva después de 2 segundos con un número aleatorio entre 1 y 100.
      setTimeout(() => {
        numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        console.log('Número aleatorio:', numeroAleatorio);
        resolve(numeroAleatorio);
      }, 2000);
    })
      .then((numero) => {
        // Luego, toma ese número y crea una segunda promesa que se resuelva después de 3 segundos con el resultado de elevar ese número al cuadrado.s
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const resultadoCuadrado = numero * numero;
            console.log('Número al cuadrado:', resultadoCuadrado);
            resolve(resultadoCuadrado);
          }, 3000);
        });
      })
      .then((numeroCuadrado) => {
        // toma el resultado de la segunda promesa y crea una tercera promesa que se resuelva después de 1 segundo con la raíz cuadrada del número resultante.
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const raizCuadrada = Math.sqrt(numeroCuadrado);
            console.log('Raíz cuadrada:', raizCuadrada);
            resolve(raizCuadrada, "termino ej1");
          }, 1000);
        });
      });
  }
  operacionesAsincronas()



//Ejercicio Dos


  function getapis(urls) {

    // Crear un array para almacenar las promesas de las solicitudes
    const promesas = [];
  
    // Iterar a través de las URLs y crear una promesa para cada una
    for (const url of urls) {
      const promesa = fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`La regué`);
          }
          return response.json();
        })
        
  
      promesas.push(promesa);
    }
  
    // Devolver una promesa que se resuelva cuando todas las solicitudes se completen
    return Promise.all(promesas);
  }
  
  const urls = ['https://api.chucknorris.io/jokes/random', 'https://api.chucknorris.io/jokes/random']; 
 
  
    setTimeout (()=>{getapis(urls).then((resultados) =>{
        console.log(resultados, "termino ej2");
    })
}, 6000)


// Ejercicio Tres

    function promesasEnParalelo(funcionesPromesa) {
        // Utiliza Promise.all para ejecutar todas las promesas en paralelo
        return Promise.all(funcionesPromesa.map((func) => func()))
          .then((res3) => res3)
      }
      
      const promesa1 = () => new Promise((resolve) => setTimeout(() => resolve('uno'), 1000));
      const promesa2 = () => new Promise((resolve) => setTimeout(() => resolve('dos'), 2000));
      const promesa3 = () => new Promise((resolve) => setTimeout(() => resolve('medio'), 500));
      
      const funcionesPromesa = [promesa1, promesa2, promesa3];
      
      
      setTimeout(() => { promesasEnParalelo(funcionesPromesa).then((res3) => {
            console.log(res3, "terminó ej3");
          })
      }, 6300); 


//Ejercicio Cuatro
      
function cadenaDePromesas(n) {
    return new Promise((resolve, reject) => {
      let contador = 0;
  
      function resolverPromesa() {
        if (contador < n) {
          const numeroActual = contador + 1;
          console.log(`Promesa ${numeroActual} resuelta`);
          setTimeout(() => {
            contador++;
            resolverPromesa();
          }, 1000); // Espera 1 segundo antes de resolver la siguiente promesa
        } else {
          resolve('terminó ej4');
        }
      }
  
      resolverPromesa();
    });
  }

  setTimeout(() => {
    const n = 3; 
    cadenaDePromesas(n)
      .then((mensaje) => {
        console.log(mensaje);
      })
      .catch((error) => {
        console.error('Ocurrió un error:', error);
      });
  }, 9000); 

  
  