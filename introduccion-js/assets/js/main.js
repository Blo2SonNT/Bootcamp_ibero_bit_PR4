function saludar() {

    let nombreUsuario = document.getElementById("txtNombreUsuario").value

    if (nombreUsuario != "") {
        console.log(`Hola! ${nombreUsuario}, como estas?`)
        let cajaP = document.getElementById("saludoUsuario")
        cajaP.innerHTML = `Hola! ${nombreUsuario}, <span class="text-danger fw-bold">como estas?</span>`
    } else {
        alert("Bruto bestia animal salvaje.... desgraciado.... ponga su nombre en el campo")
    }



}


function huevo() {
    let cantidadHuevos = 1
    if (cantidadHuevos >= 8) {
        console.log("Puedo hacerme la pericada")
    } else if (cantidadHuevos == 1) {
        let cajaP = document.getElementById("saludoUsuario")
        cajaP.innerHTML = "Solo puede fritarse el huevo"
        console.log("Solo puede fritarse el huevo")
    } else if (cantidadHuevos == 4) {
        console.log("hay que comprar tomate")
    } else {
        console.warn("No hay huevos, tengo que comprar")
    }
}


let botonDonacionUsuario = document.getElementById("btnDonar")
botonDonacionUsuario.addEventListener('click', () => {
    let cantidadDonada = document.getElementById("lista_donacion").value

    switch (cantidadDonada) {
        case "1000000":
            console.log("%c Gracias por su donaciopn, un niño le agredecera!! 🙃", "color: blue; font-size:3rem")
            break
        case "500000":
            console.log("%c Algo es algo", "color: yellow; font-size:3rem")
            break
        case "2000":
            console.log("%c Mejor yo se los doy, usted los necesita mas", "color: orange; font-size:3rem")
            break
        default:
            console.error("Seleccione algo... bestia")
            break
    }
})