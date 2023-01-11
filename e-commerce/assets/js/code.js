let productos = [{
        id: 1,
        nombre: 'Empanadita de carne',
        precio: 2500,
        imagen: "https://www.buengusto.co/wp-content/uploads/2019/02/empanada-colombia.jpg",
        ingredientes: [
            { nombre: "harina", precio_unidad: 1000, precio_mayoritario: 700 },
            { nombre: "papa", precio_unidad: 200, precio_mayoritario: 75 },
            { nombre: "carne", precio_unidad: 8000, precio_mayoritario: 5000 }
        ]
    },
    {
        id: 2,
        nombre: 'Empanadita de pollo',
        precio: 2000,
        imagen: "https://www.comedera.com/wp-content/uploads/2021/12/empanadas-colombianas1.jpg",
        ingredientes: [
            { nombre: "harina", precio_unidad: 1000, precio_mayoritario: 700 },
            { nombre: "papa", precio_unidad: 200, precio_mayoritario: 75 },
            { nombre: "pollo", precio_unidad: 6000, precio_mayoritario: 4200 },
            { nombre: "huevo", precio_unidad: 500, precio_mayoritario: 300 }
        ]
    },
    {
        id: 3,
        nombre: 'Empanadita de queso',
        precio: 3000,
        imagen: "assets/img/empanada-queso.jpg",
        ingredientes: [
            { nombre: "harina", precio_unidad: 1000, precio_mayoritario: 700 },
            { nombre: "queso", precio_unidad: 15000, precio_mayoritario: 10000 }
        ]
    },
    {
        id: 4,
        nombre: 'Empanadita de chorizo',
        precio: 3600,
        imagen: "https://dam.cocinafacil.com.mx/wp-content/uploads/2013/12/empanadas-chorizo-y-pimiento.jpg",
        ingredientes: [
            { nombre: "harina", precio_unidad: 1000, precio_mayoritario: 700 },
            { nombre: "papa", precio_unidad: 200, precio_mayoritario: 75 },
            { nombre: "carne", precio_unidad: 8000, precio_mayoritario: 5000 },
            { nombre: "chorizo", precio_unidad: 3600, precio_mayoritario: 1500 },
            { nombre: "pimenton", precio_unidad: 1400, precio_mayoritario: 700 }
        ]
    },
    {
        id: 5,
        nombre: 'Empanadita de arroz',
        precio: 1500,
        imagen: "https://www.federal.co/wp-content/uploads/2020/11/Empanaditas-de-arroz-y-carne-portada-1-700x525.jpg",
        ingredientes: [
            { nombre: "harina", precio_unidad: 1000, precio_mayoritario: 700 },
            { nombre: "papa", precio_unidad: 200, precio_mayoritario: 75 },
            { nombre: "arroz", precio_unidad: 8000, precio_mayoritario: 5000 },
            { nombre: "cebolla", precio_unidad: 3600, precio_mayoritario: 1500 },
            { nombre: "aceite", precio_unidad: 1400, precio_mayoritario: 700 }
        ]
    }
]

// console.table(productos)

/**
 * 15 tipos de empanadas
 * 
 * 
 * nombre
 * precio
 * imagen
 * ingredientes
 */

let tituloTienda = "Marlon y sus choaventuras con empanadas"

var tiutloBienvenida = "Gracias por visitarnos... se gano una natilla"

const nitTienda = "10289656-4"


let tituloh1 = document.getElementById("titulo")
tituloh1.innerText = tituloTienda

setTimeout(() => {
    tituloh1.innerHTML = tiutloBienvenida + " - " + nitTienda
}, 5000);

let contenedorProductos = document.getElementById('grilla-productos')
    // console.log(contenedorProductos)



for (const productoEmpanada of productos) {

    console.log(productoEmpanada.nombre)
    contenedorProductos.innerHTML += `
        <div class="col">
            <div class="card">
                <img src="${productoEmpanada.imagen}" class="card-img-top w-50 m-auto" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-center">${productoEmpanada.nombre}</h5>
                    <p class="card-text text-center">$ ${productoEmpanada.precio}</p>
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="input-group mb-3 w-25">
                            <span onclick="accionCarrito('quitar', ${productoEmpanada.id})" data-producto="${productoEmpanada.id}" class="input-group-text btnProductoCarrito">
                                <i class="fa-solid fa-minus"></i>
                            </span>
                            <input type="number" readonly id="cantidadEmpanadas${productoEmpanada.id}" class="form-control"  value="0">
                            <span onclick="accionCarrito('agregar', ${productoEmpanada.id})" data-producto="${productoEmpanada.id}" class="input-group-text btnProductoCarrito">
                                <i class="fa-solid fa-plus"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}


// let codigoHTML = document.querySelector("[data-manuel-perez]")
// codigoHTML.dataset.manuelPerez
// console.log(codigoHTML.dataset.manuelPerez)


function accionCarrito(accion, idProducto) {
    let inputCantidad = document.getElementById(`cantidadEmpanadas${idProducto}`)
    let cantidadActual = inputCantidad.value
    if (accion == 'quitar') {
        if (parseInt(cantidadActual) > 0) {
            inputCantidad.value = cantidadActual - 1
        } else {
            alert('papi... no se ponga pesado')
        }
    }


    if (accion == 'agregar') {
        inputCantidad.value = parseInt(cantidadActual) + 1
    }

}