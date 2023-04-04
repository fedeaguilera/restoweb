const usuarios = []

const formularioContacto = document.querySelector(".form")
const contenedorHTML = document.querySelector("#contenedorUsuarios")

const renderizarUsuarios = () => {
    contenedorHTML.innerHTML = ""
    for(const usuario of usuarios){
        contenedorHTML.innerHTML += `
        <div class="c-usuario">
            <h3>Nombre: ${usuario.nombre}</h3>
            <h3>Apellido: ${usuario.apellido}</h3>
            <p>Teléfono: <strong>${usuario.telefono}</strong></p>
            <p>Correo electrónico: <strong>${usuario.email}</strong></p>
            <p>Comentario: <strong>${usuario.comentario}</strong></p>
        </div>
        `
    }
}

formularioContacto.addEventListener("submit", (e) =>{
    e.preventDefault()
    usuarios.push({
        nombre: formularioContacto.nombre_ingresado.value, 
        apellido: formularioContacto.apellido_ingresado.value,
        telefono: formularioContacto.telefono_ingresado.value,
        email: formularioContacto.email_ingresado.value,
        comentario: formularioContacto.comentario.value,
    })
    formularioContacto.reset()
    renderizarUsuarios()
})
