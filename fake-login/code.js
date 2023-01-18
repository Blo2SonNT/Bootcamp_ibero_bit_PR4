function validarFormulario() {
    let inputCorreo = document.querySelector("#correoUsuario")
    let inputPassword = document.querySelector("#passUsuario")

    if (inputCorreo.value != '' && inputPassword.value != '') {
        validarUsuarios(inputCorreo.value, inputPassword.value)
    }
}


//guardando una variable en el localstorage
function validarUsuarios(usuario, pass) {
    console.log(usuario)
    console.log(pass)
}

function cambiarFondo(colorSeleccionado, opcionCambio) {
    document.querySelector("body").removeAttribute("style")
    document.querySelector("body").removeAttribute("class")
    if (opcionCambio == "inputColor") {
        document.querySelector("body").setAttribute("style", `background-color: ${colorSeleccionado}`)
    } else if (opcionCambio == "listaDesplegable") {
        document.querySelector("body").classList.add('fs-2', colorSeleccionado, 'degrade')
    }

}

// function saludo(nombre = "Pepe", edad = 18) {
//     if (edad >= 18) {
//         alert(`Hola ${nombre}, como estas?, bienvenido a mi pagina xxx`)
//     } else {
//         location.href = "https://www.google.com"
//     }
// }


// saludo("Fulano", 18)