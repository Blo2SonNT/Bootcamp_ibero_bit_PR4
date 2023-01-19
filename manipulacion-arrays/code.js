let estudiantes = ["Miguel", "Lina", "Duban", "Diana"]
let egresedos = ["Susan", "Juam", "Sara", "Dominick", "Kliche"]

let reprobados = ['Carmelo']


let numeros = ["Susan", "Juam", 1, 102, 45, 23, 18, 75, 41, 25, 30, 33, 69, 68]

//push 
estudiantes.push("Santiago") //agregar al final del array
    // console.log(estudiantes)

//unshift
estudiantes.unshift("Juan") //agregar al inicio del array
    // console.log(estudiantes)

//pop
estudiantes.pop() //elimina la ultima posicion del array
    // console.log(estudiantes)

//shift
estudiantes.shift() //elimina la primera posicion del array
    // console.log(estudiantes)

//concat
let personas = egresedos.concat(estudiantes, reprobados) //
    // console.log(personas)

//toString
// console.log(personas.toString())

//sort
// console.log(numeros.sort())

// let nombres2 = [
//     ["beto", "alcantara"],
//     ["diana", "perez"],
//     ["alberto", "molina"]
// ]
// let nombres3 = []
// nombres2.forEach(personita => {
// personita.sort()
//     console.log(personita)
//     let nombreCompleto = personita.join(" ")
//     nombres3.push(nombreCompleto.toString())
// });

// console.log(nombres3.sort())


// personas.forEach((elemento, posicion, miarray) => {
//     console.error(`Iteracion con ${elemento} que esta en la posicion ${posicion} del array ${miarray.toString()}`)
// });





console.log(estudiantes.indexOf("Duban"))


// todo    ["Miguel", "Lina", "Duban", "Diana"]
console.log(personas.reverse())
personas.splice(personas.indexOf("Sara") + 1, 0, "Pepe", "Fulano")
console.log(personas)










// function validar() {
//     let inputFormulario = document.querySelector("#inputPassword5")
//     let inputFormulario2 = document.querySelector("#inputPassword6")

//     let errores = []

//     if (inputFormulario.value == null) {
//         errores.push("El campo de la contraseña es obligatorio")
//     }
//     if (inputFormulario2.value == "") {
//         errores.push("La rectificacion de la contraseña es obligatoria")
//     }
//     console.log(errores)
//     let divErrores = document.querySelector("#errores")

//     errores.forEach(element => {
//         divErrores.innerHTML += element + "<br>"
//     });
// }