let btnAgregar1 = document.querySelector("#carrito1")   
let btnAgregar2 = document.querySelector("#carrito2")
let btnAgregar3 = document.querySelector("#carrito3")
let btnAgregar4 = document.querySelector("#carrito4")
let btnAgregar5 = document.querySelector("#carrito5")
let btnAgregar6 = document.querySelector("#carrito6")

const recuperarJSON = (URL) => {  
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            contenidoJSON = data
        })
    }
   
recuperarJSON(URL)

btnAgregar1.addEventListener("click", (URL) => {
        resultado = contenidoJSON.find((el) => el.nombre==="Curso auto-maquillaje");
        llenarCarrito.push(resultado)
        localStorage.setItem("carrito", JSON.stringify(llenarCarrito))
        alertar("Se agrego el producto al carrito.")                                 
})

btnAgregar2.addEventListener("click", (URL) => {
        resultado = contenidoJSON.find((el) => el.nombre==="Curso de pieles");
        llenarCarrito.push(resultado)
        localStorage.setItem("carrito", JSON.stringify(llenarCarrito))
        alertar("Se agrego el producto al carrito.")                                 
})

btnAgregar3.addEventListener("click", (URL) => {
    resultado = contenidoJSON.find((el) => el.nombre==="Curso de ojos");
    llenarCarrito.push(resultado)
    localStorage.setItem("carrito", JSON.stringify(llenarCarrito))
    alertar("Se agrego el producto al carrito.")                                 
})

btnAgregar4.addEventListener("click", (URL) => {
    resultado = contenidoJSON.find((el) => el.nombre==="Curso de delineados");
    llenarCarrito.push(resultado)
    localStorage.setItem("carrito", JSON.stringify(llenarCarrito))
    alertar("Se agrego el producto al carrito.")                                 
})

btnAgregar5.addEventListener("click", (URL) => {
    resultado = contenidoJSON.find((el) => el.nombre==="Curso pieles glow");
    llenarCarrito.push(resultado)
    localStorage.setItem("carrito", JSON.stringify(llenarCarrito))
    alertar("Se agrego el producto al carrito.")                                 
})

btnAgregar6.addEventListener("click", (URL) => {
    resultado = contenidoJSON.find((el) => el.nombre==="Curso maquillaje profesional");
    llenarCarrito.push(resultado)
    localStorage.setItem("carrito", JSON.stringify(llenarCarrito))
    alertar("Se agrego el producto al carrito.")                                 
})
       
btnVer.addEventListener("click", () => {
    location.href = "../pages/totalproductos.html"
})

function alertar(mensaje) {
    Swal.fire({
        title: 'Producto agregado!',
        text: mensaje,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })
}


