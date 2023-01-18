let usuarios = [
        { nombre: "Miguel", imagen: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/52A0BB56BCB3FE9A976B4F16FEE3E64500F9A45DC0966B8CF85E42FACA9B4400/scale?width=280&aspectRatio=1.00&format=png" },
        { nombre: "Mafe", imagen: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7A74A0E7A6645DC70A77DAE5A0EAED101C55161BD8445A7A940BE7C7EC07A63C/scale?width=280&aspectRatio=1.00&format=png" },
        { nombre: "Alejadro", imagen: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/728158A5F7954C71BFC25438648044EB0912ADF8B9055CCE82EB64BFDB6DA9B3/scale?width=280&aspectRatio=1.00&format=png" },
        { nombre: "Impostora", imagen: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D6B7F2DC7BB203D9BC03DF83A96544B4EE94A66974369F1BC076776F42883F3C/scale?width=280&aspectRatio=1.00&format=png" }
    ]
    // let contador = 0
    // for (const usuario of usuarios) {
    //     document.querySelector("#perfiles").innerHTML += `
    //     <div class="d-flex flex-column justify-content-center align-items-center" >
    //         <img class="w-50" src="${usuario.imagen}">
    //         <h5 class="text-white">${usuario.nombre} ${contador}</h5>
    //     <div>
    //     `
    //     contador++
    // }


// usuarios.forEach((usuario, posicion) => {
//     document.querySelector("#perfiles").innerHTML += `
//         <div class="d-flex flex-column justify-content-center align-items-center" >
//             <img class="w-50" src="${usuario.imagen}">
//             <h5 class="text-white">${usuario.nombre} ${posicion}</h5>
//         <div>
//         `
// });

for (let x = 0; x < usuarios.length; x++) {
    document.querySelector("#perfiles").innerHTML += `
        <div class="d-flex flex-column justify-content-center align-items-center" >
            <img class="w-50" src="${usuarios[x].imagen}">
            <h5 class="text-white">${usuarios[x].nombre} ${x}</h5>
        <div>
        `
}