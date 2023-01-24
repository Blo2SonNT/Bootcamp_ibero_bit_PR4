function sumatoria_punto_1() {
    let numeroUsuario = document.querySelector("#inputPunto1")
    let resultado = 0
    for (let x = 0; x <= numeroUsuario.value; x++) {
        resultado = resultado + x
    }
    document.querySelector("#resultado_punto1").innerHTML = `La sumatoria total es: ${resultado}`
}

function parImpar_punto2() {
    let numeroUsuario2 = document.querySelector("#inputPunto2")
    if (numeroUsuario2.value % 2 == 0) {
        document.querySelector("#resultado_punto2").innerHTML = "El numero es par"
    } else {
        document.querySelector("#resultado_punto2").innerHTML = "El numero es impar"
    }
}


function pizzeria_punto3() {
    let edadUsuario = parseInt(document.querySelector("#edadCliente").value)
    let generoUsuario = document.querySelector("#optGenero")
    let H5resultado = document.querySelector("#resultado_punto3")

    console.log(edadUsuario)
    console.log(generoUsuario)

    if (edadUsuario <= 10 || edadUsuario >= 18) {
        if (edadUsuario <= 10) {
            if (generoUsuario.value == 'mujer') {
                H5resultado.innerHTML = "Tiene derecho a un juguito y una piza hawaiana"
            } else if (generoUsuario.value == 'hombre') {
                H5resultado.innerHTML = "Tiene derecho a un jugo y una pizza de 3 carnes"
            } else {
                H5resultado.innerHTML = "Seleccione un genero"
            }
        } else {
            if (generoUsuario.value == 'mujer') {
                H5resultado.innerHTML = "Tiene derecho a una cerveza y una piza hawaiana"
            } else if (generoUsuario.value == 'hombre') {
                H5resultado.innerHTML = "Tiene derecho a un cerveza y una pizza de 3 carnes"
            } else {
                H5resultado.innerHTML = "Seleccione un genero"
            }
        }
    } else {
        H5resultado.innerHTML = "Desafortunadamente no gano nada... otro dia sera"
    }
}

function multiplicacion_punto5() {
    let numeroTabla = document.querySelector("#numeroTabla").value
    let numeroMaximo = document.querySelector("#numeroMaximoTabla").value
    let lista_tabla = document.querySelector("#resultado_punto5")
    for (let x = 1; x <= numeroMaximo; x++) {
        lista_tabla.innerHTML += `${x} X ${numeroTabla} = ${x*numeroTabla} <br>`
    }
}

function matricula_punto6() {
    let promedioUsuario = document.querySelector("#promedioEstudiante").value
    let totalMatricula = 1000000
    let descuento = 0
        //(1000000 x 5 ) / 100
    if (promedioUsuario < 3) {
        document.querySelector("#resultado_punto6").innerHTML = `El valor total de su matricula es ${totalMatricula}`
    } else if (promedioUsuario >= 3 && promedioUsuario <= 4) {
        // descuento = (totalMatricula * .95)    ---> el valor total de la matricula
        // descuento = totalMatricula * 0.05    ---> tambien me da el descuento
        descuento = (totalMatricula * 5) / 100
        totalMatricula = totalMatricula - descuento
        document.querySelector("#resultado_punto6").innerHTML = `El valor total de su matricula es ${totalMatricula}`
    } else {
        descuento = (totalMatricula * 50) / 100
        totalMatricula = totalMatricula - descuento
        document.querySelector("#resultado_punto6").innerHTML = `El valor total de su matricula es ${totalMatricula}`
    }
}


let menu_restaurante = [
    "spaguetis", "coca cola", "brownies marihuanos", "malteada fresa"
]

let precio_menu = [15000, 2500, 3000, 8500]

menu_restaurante.forEach((plato, posicion) => {
    document.querySelector("#menuPunto4").innerHTML += `<li data-plato${posicion}="" class="list-group-item">${plato}</li>`
});

precio_menu.forEach((precio, posicion) => {
    document.querySelector(`[data-plato${posicion}]`).innerHTML += `- $${precio}`
});

function restaurante_punto4() {

    document.querySelector("#platoUsuario").removeAttribute("placeholder")
    document.querySelector("#platoUsuario").removeAttribute("data-ejemplo")
    document.querySelector("#platoUsuario").classList.remove("border", "border-danger")
    document.querySelector("#resultado_punto4").innerHTML = ``


    let solicitudComida = document.querySelector("#platoUsuario").value
    let posicionPrecio = menu_restaurante.indexOf(solicitudComida)
    let precioPlato = precio_menu[posicionPrecio]
    let precioActual = localStorage.getItem("TotalRestaurante")

    if (solicitudComida == "pagar") {
        document.querySelector("#resultado_punto4").innerHTML = `El total a pagar es ${localStorage.getItem("TotalRestaurante")}`
        localStorage.clear()
        return
    }

    if (posicionPrecio != -1) {
        if (precioActual == null) {
            localStorage.setItem("TotalRestaurante", precioPlato)
        } else {
            precioActual = parseInt(precioActual) + precioPlato
            localStorage.setItem("TotalRestaurante", precioActual)
        }
    } else {
        document.querySelector("#resultado_punto4").innerHTML = `El plato solicitado no existe en nuestro menu`
        document.querySelector("#platoUsuario").value = ''
        document.querySelector("#platoUsuario").setAttribute("placeholder", "Escoja un plato de la lista")
        document.querySelector("#platoUsuario").classList.add("border", "border-danger")
        document.querySelector("#platoUsuario").setAttribute("data-ejemplo", "Hola")
    }



    console.log(precioActual)
}