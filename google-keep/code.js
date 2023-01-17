function guardarNota() {
    let notaUsuario = document.querySelector("#inputNota").value
    localStorage.setItem("nota1", notaUsuario)
}