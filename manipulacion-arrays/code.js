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



let miArray = []
let productosCheck = []

function agregarProducto() {
    let productoNuevo = document.querySelector("#inputCompra")
    if (miArray.indexOf(productoNuevo.value) == -1) {
        miArray.push(productoNuevo.value)
        console.log(miArray)
        refrescarLista()
        alerta("Producto agregado", "success", "#32d82f", false, "#0095f6", true, "rgba(83, 214, 47, 0.5)", "img/bmo.gif")
    } else {
        alerta("El producto ya se encuentra en la lista", "error", "#ed5555", false, "#0095f6")
    }
    productoNuevo.value = ''
}

function eliminarItem(posicionItem) {


    Swal.fire({
        title: 'Esta seguro?',
        text: "Esta acción no podra ser reversible",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar'
    }).then((result) => {
        if (result.isConfirmed) {
            miArray.splice(posicionItem, 1)
            refrescarLista()
            Swal.fire(
                'Eliminado!',
                'Este item fue retirado de la lista exitosamente',
                'success'
            )
        }
    })


}

function refrescarLista() {
    document.querySelector("#lista").innerHTML = ""
    miArray.forEach((item, posicion) => {
        let claseTachado = ""
        let botones = ""
        if (productosCheck.indexOf(`${item}`) == -1) {
            claseTachado = ''
            botones = `
                <button class="btn btn-success" onclick="checkItem(${posicion}, '${item}')">
                    <i class="fa-solid fa-check"></i>
                </button>
                <button class="btn btn-danger" onclick="eliminarItem(${posicion})">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <button class="btn btn-warning" onclick="editarItem(${posicion})">
                    <i class="fa-solid fa-pen"></i>
                </button>
            `
        } else {
            claseTachado = "text-decoration-line-through"
            botones = `
                <button class="btn btn-dark" onclick="destacharItem(${posicion},'${item}')">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                </button>
            `
        }
        document.querySelector("#lista").innerHTML += `
            <li class="list-group-item">
                <div class="d-flex justify-content-between align-items-center">
                    <span class="${claseTachado}" id="item${posicion}">${posicion+1}. ${item}</span>
                    <div>
                        ${botones}
                    </div>
                </div>
            </li>
        `
    });
}

function checkItem(posicionItem, item) {
    document.querySelector(`#item${posicionItem}`).classList.add('text-decoration-line-through')
    productosCheck.push(item)
    refrescarLista()
}

function destacharItem(posicionItem, item) {
    document.querySelector(`#item${posicionItem}`).classList.remove('text-decoration-line-through')
    productosCheck.splice(productosCheck.indexOf(item), 1)
    refrescarLista()
}

function editarItem(posicionItem) {
    let nuevoContenido = prompt("Cual es el nuevo texto?")
    miArray[posicionItem] = nuevoContenido
    refrescarLista()
}

function alerta(titulo, icono, colorIcono, eliminar = false, color, gif = false, fondo, urlGif = "") {

    // let audioMp3 = new Audio("audio/que-bendicion.mp3")
    // audioMp3.play()

    let dataConfigAlerta = new Object()
    dataConfigAlerta.title = titulo
    dataConfigAlerta.icon = icono
    dataConfigAlerta.iconColor = colorIcono
    dataConfigAlerta.timer = 3000
    dataConfigAlerta.timerProgressBar = true
    dataConfigAlerta.showConfirmButton = false
    dataConfigAlerta.color = color
    if (gif) {
        dataConfigAlerta.backdrop = `${fondo} url("${urlGif}") right bottom no-repeat`
    }

    console.log(dataConfigAlerta)


    if (!eliminar) {
        Swal.fire(dataConfigAlerta)
    }




}


function traduccion(idiomaUsuario) {
    let textos = [{
        es: "Lista de Compras",
        en: "Shopping List"
    }]
    let tituloPagina = document.querySelector("#TituloPagina")
    for (const idioma of textos) {
        if (idiomaUsuario == "ES") {
            tituloPagina.innerHTML = idioma.es
        } else if (idiomaUsuario == "EN") {
            tituloPagina.innerHTML = idioma.en
        }
    }
}