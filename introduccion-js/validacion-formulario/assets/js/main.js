function validarFormulario() {
    let mnsaje_error = "El correo es obligatorio"
    let correoFormulario = document.getElementById(`txtCorreoUsuario`)
    if (correoFormulario.value == ``) {
        let spanErrorCorreo = document.getElementById(`mensajeErrorCorreo`)
        spanErrorCorreo.innerHTML = `error: ${mnsaje_error}`
        correoFormulario.classList.add(`border`, `border-danger`)
    }
    console.log(correoFormulario)


    let listaFormulario = document.getElementById("selectListaEjemplo")
    if (listaFormulario.value == "") {
        let mensajeErrorSelect = document.getElementById(`mensajeErrorSelect`)
        mensajeErrorSelect.innerHTML = `error: Seleccione una opción`
        listaFormulario.classList.add(`border`, `border-danger`)
    }

}