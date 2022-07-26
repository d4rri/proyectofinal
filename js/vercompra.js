recuperarObjeto = () => {
    let preciof = 0
    let filas = ""
    let prod=""
    let precioIVA = 0
    let texto =`<p class="btn form3 text-light" type="button">Precio final de mi compra: $`
    llenarCarrito =JSON.parse(localStorage.getItem("carrito")) || ['El carrito esta vacio.'];
        for (prod of llenarCarrito) {
            precioIVA = (parseInt((prod.precio * iva).toFixed(2)));
            filas += `<ul class="list-group mb-3 p-3">
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 class="my-0">${prod.nombre || "Ingrese un producto"}</h6> 
                            <small class="">Iva:${prod.iva || "Ingrese un producto"}</small>  
                        </div>
                            <span class="">Precio del producto: $${prod.precio || "Ingrese un producto"}</span> 
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <p>Total (Con IVA): $${precioIVA || "Ingrese un producto"}</p>
                        </li>          
                        </ul>`                                        
                    preciof += (parseInt((prod.precio * iva).toFixed(2)));
                    document.getElementById('verCompra').innerHTML = filas;
                    document.getElementById('verPrecioFinal').innerHTML = texto + preciof ; 
            }
        }

recuperarObjeto()

btnVolver.addEventListener("click", () => {
    location.href = "../pages/cursos.html"
})

btnCompra.addEventListener("click", () => {
    finalizarCompra("Ingrese su e-mail para confirmar su compra")
})

function vaciarCarrito() {

    llenarCarrito = [];

    filas = "";

    localStorage.clear();

    location.href = "../pages/cursos.html";    
}

btnVaciar.addEventListener('click', vaciarCarrito);

function finalizarCompra (input) {
Swal.fire({
    title: 'Insertar e-mail para confirmar su compra',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    confirmButtonText: 'Confirmar',
    showLoaderOnConfirm: true,
    preConfirm: (mensaje) => {
        Swal.fire({
            title: 'Muchas gracias! Usted recibirá una confirmación de su compra al siguiente e-mail',
            text: mensaje,
            icon: 'success',
            confirmButtonText: 'Aceptar'            
            })
        }                     
    }) 
} 


