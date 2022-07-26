btnSubmit.addEventListener("mousemove", () => {
    btnSubmit.title = "Haga clic para enviar sus datos"
})

btnSubmit.addEventListener("mouseover", () => {
    btnSubmit.className = "w-100 btn-lg bg-dark"
})

btnSubmit.addEventListener("mouseout", () => {
    btnSubmit.className = "w-100 btn btn-lg btn-primary"
})

inputEmail.addEventListener("email", () => {
    inputEmail.value
 })

inputPassword.addEventListener("password", () => {
    inputPassword.value
 })
    
guardarDatosDeUsr = () => { 
        const datosDeUsr = {  
            email: inputEmail.value,
            password: inputPassword.value, 
        }
        if (datosDeUsr.email === "") {
            alertar2("Por favor rellena el formulario")
        } else {
            let str = JSON.stringify(datosDeUsr)
            localStorage.setItem("datosDeUsr", str)
            alertar("Formulario enviado")
        }
    }

recuperoDatosDeUsr = () => {
    const datosDeUsr = JSON.parse(localStorage.getItem("datosDeUsr"))
    inputEmail.value = datosDeUsr.email
    inputPassword.value = datosDeUsr.password
    
}

document.addEventListener("submit", (e) => {
    e.preventDefault()
    guardarDatosDeUsr()
    recuperoDatosDeUsr()
    }
)

function alertar2(mensaje) {
    Swal.fire({
        title: 'Atención!',
        text: mensaje,
        icon: 'info',
        confirmButtonText: 'Aceptar'
    })
}

function alertar(mensaje) {
    Swal.fire({
        title: 'Has iniciado sesion!',
        text: mensaje,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })
}

recuperoDatosDeUsr()

