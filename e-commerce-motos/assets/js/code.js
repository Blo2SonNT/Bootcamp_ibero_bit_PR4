//------------------------------ INICIO CONFIGURACION SLICK (CARRUSEL)  -------------------------------------------------

$(document).ready(function() {
    $('.slidermotos').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true
    });
});


//------------------------------ FIN CONFIGURACION SLICK (CARRUSEL)  -------------------------------------------------

let divProductos = document.getElementById("grilla-motos")

let motos = [{
        nombre: "GTX suski 256",
        imagen: "assets/img/moto1.png",
        precio: 14000000
    },
    {
        nombre: "Susuko 890 ABS",
        imagen: "assets/img/moto2.png",
        precio: 12000000
    },
    {
        nombre: "Kawasaki PLUS 6200",
        imagen: "https://royalenfieldco.com/wp-content/uploads/2020/08/side-view-5.png",
        precio: 25000000
    },
    {
        nombre: "Yamaha R300",
        imagen: "https://solollantasparamotos.com/wp-content/uploads/2021/11/motorcycle-slider-img.png",
        precio: 25000000
    },
]

for (const motico of motos) {
    divProductos.innerHTML += `
    <div class="col">
        <div class="card">
            <img src="${motico.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${motico.nombre}</h5>
                <p class="card-text">$${motico.precio}</p>
            </div>
        </div>
    </div>
    `
}

// let botones = [
//     "C", "+",
//     '<i class="fa-solid fa-delete-left"></i>',
//     '<i class="fa-solid fa-percent"></i>',
//     7, 8, 9, "x",
//     4, 5, 6, "/",
//     1, 2, 3, "+",
//     0, ".", "-", "="
// ]
// let contenedorBotones = document.getElementById('botones-grilla')
// botones.forEach(element => {
//     contenedorBotones.innerHTML += `
//         <div class="col-3">
//             <button class="btn btn-dark" onclick="alert('pepe')">${element}</button>
//         </div>

//     `
// });


function operacion(tipoOperacion) {
    alert(tipoOperacion)
}