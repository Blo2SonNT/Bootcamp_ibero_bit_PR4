function guardarNota() {
    let notaUsuario = document.querySelector("#inputNota").value
    let contador = 1
    if (notaUsuario != '') {
        if (localStorage.getItem(`nota${contador}`) == null) {
            localStorage.setItem(`nota${contador}`, notaUsuario)
            localStorage.setItem('contador', contador)
        } else {
            contador = parseInt(localStorage.getItem(`contador`))
            localStorage.setItem(`nota${contador+1}`, notaUsuario)
            localStorage.setItem('contador', contador + 1)
        }
    }
    let grillaNotas = document.querySelector("[data-grilla-notas]")
    grillaNotas.innerHTML = ''
    contador = parseInt(localStorage.getItem(`contador`))
    for (let x = 0; x <= contador; x++) {
        let nota = localStorage.getItem(`nota${x}`)
        grillaNotas.innerHTML += `
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <p class="card-text">${nota}</p>
                            </div>
                        </div>
                    </div>
        `
    }
}
guardarNota()