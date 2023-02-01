/*  ASINCRONISMO  */


// console.log('A')

// setTimeout(() => {
//     console.log("B")
// }, 3000);

// console.log('C')





/* THIS */


// let informacion = {
//     numero: 56,
//     nombre: "Juan",
//     sistema: function() {
//         return this.nombre
//     }
// }
// informacion.sistema()


/* PROMESAS */


// function respuesta() {
//     console.log("Esta respuesta saldra si la promersa se cumple")
// }


// let cantidad = 56  //GET POST PUT DELETE
// let peticion = new Promise((resolve, reject) => {
//     if (cantidad == 20) {
//         resolve(respuesta())
//     } else {
//         reject('La promesa no se cumplio')
//     }
// })

/*

function mi_funcion(parmaetro) {
    //proceso NO PODEMOS USAR THIS
}


let madrazo = function() {
    //proceso PODEMOS USAR THIS
}

let saludo = () => {
    //proceso PODEMOS USAR THIS
}

*/




// class pepe {

//     color
//     altura

//     constructor(colorDelUsuario) {
//         this.color = colorDelUsuario
//     }


//     medirAltura(nombre){
//         let calculo = prompt("su altura")
//         calculo = (parseInt(calculo) / 5) * 6

//         this.altura = calculo
//         // return this.altura + "es su altura señor " + nombre
//         return `${this.altura} es su altura señor ${nombre}` 
//     }
// }


/*********************************************************************************************** */
/*********************************************************************************************** */
/*********************************************************************************************** */
/*********************************************************************************************** */
/*********************************************************************************************** */

document.querySelector("#btnSolicitud").addEventListener("click", () => {

    let inicio = document.querySelector("#inicio").value - 1
    let fin = document.querySelector("#fin").value - 1

    let urlAPI = "https://dog-api.kinduff.com/api/facts?number=20"

    let peticion = fetch(urlAPI)
        // console.log(peticion)
    peticion.then(res => res.json())
        .then((informacion) => {
            console.log(informacion)
            informacion.facts.forEach((texto, posicion) => {
                if (posicion >= inicio && posicion <= fin) {
                    document.querySelector("#infoApi").innerHTML += `<p>${texto}</p>`
                }
            });
        })
})