let imagenCabecera = document.querySelector(`#imagen-header`)
let imagenFututa = imagenCabecera.dataset.cambio
console.log('file: main.js:3 ->  imagenFututa', imagenFututa)

setInterval(() => {
    imagenCabecera.src = imagenFututa
    imagenCabecera.setAttribute('data-cambio', )
}, 2000);