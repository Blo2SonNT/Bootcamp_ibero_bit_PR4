let valorMoto = 15000000

function agregar_quitar_producto(accion) {
    let cantidadActual = document.getElementById("cantidad_1f")
    if (accion == 'agregar_producto') {
        cantidadActual.value = parseInt(cantidadActual.value) + 1
    } else {
        if (cantidadActual.value == 1) {
            alert("No se pueden quitar mas productos")
        } else {
            cantidadActual.value = cantidadActual.value - 1
        }
    }
}

function agregar() {
    let cantidadActual = document.getElementById("cantidad_2f")
    cantidadActual.value = parseInt(cantidadActual.value) + 1
    setTimeout(() => {
        let calculoValorMoto = valorMoto * parseInt(document.getElementById("cantidad_2f").value)
        document.getElementById('valor_2f').innerHTML = calculoValorMoto
    }, 300);
}

function quitar() {
    let cantidadActual = document.getElementById("cantidad_2f")

    if (cantidadActual.value == 1) {
        alert("No se pueden quitar mas productos")
    } else {
        cantidadActual.value = cantidadActual.value - 1
        setTimeout(() => {
            let calculoValorMoto = valorMoto * parseInt(document.getElementById("cantidad_2f").value)
            document.getElementById('valor_2f').innerHTML = calculoValorMoto
        }, 300);
    }

}

localStorage.setItem("institucion", "BIT")

function guardar_data() {
    localStorage.setItem("de_funcion", "ejemplo")
}