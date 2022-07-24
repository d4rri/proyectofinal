// btnVolver.addEventListener("click", () => {
//     location.href = "../pages/cursos.html"
// })

// btnCompra.addEventListener("click", () => {
//     alertar("Su compra ha sido realizada.")
// })

function alertar(mensaje) {
    Swal.fire({
        title: 'Gracias por su compra!',
        text: mensaje,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })
}

 recuperarObjeto = () => {
    let preciof = ""
    let filas = ""
    let prod=""
    let texto =`<p class="btn form3 text-light" type="button">Precio final de mi compra:`
    debugger
    llenarCarrito =JSON.parse(localStorage.getItem("carrito")) || ['El carrito esta vacio.'];
        for (prod of llenarCarrito) {
            filas += `<ul class="list-group mb-3">
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 class="my-0">${prod.nombre || "el producto no existe"}</h6> 
                            <small class="">${prod.iva || "el iva no existe"}</small>  
                        </div>
                            <span class="">${prod.precio || "el precio no existe"}</span> 
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <p>Total (Pesos Argentinos):</p>
                        </li>
                    </ul>`
                    preciof = (parseFloat((prod.precio * iva).toFixed(2)));
                    document.getElementById('verCompra').innerHTML = filas;
                    document.getElementById('verPrecioFinal').innerHTML = texto + preciof; 
            }
        }
recuperarObjeto()
           

// const recuperarJSON = (URL) => {  
//     let filas = "";
//     let prod="";
//     let total = "";
//     let preciof = "";
//     let texto =`<p class="btn form3 text-light" type="button">Precio final de mi compra:`
//     fetch(URL)
//         .then(response => response.json())
//         .then(data => {
//             contenidoJSON = data
//             contenidoJSON.forEach(prod => {; 
//                 total=new Producto(prod.producto,prod.iva,prod.precio);            
//                 filas += `<ul class="list-group mb-3">
//                         <li class="list-group-item d-flex justify-content-between lh-sm">
//                         <div>
//                             <h6 class="my-0">${prod.producto || "el producto no existe"}</h6>
//                             <small class="">${prod.iva || "el iva no existe"}</small>
//                         </div>
//                             <span class="">${prod.precio || "el precio no existe"}</span>
//                         </li>
//                         <li class="list-group-item d-flex justify-content-between">
//                         <p>Total del producto (Pesos Argentinos):</p>
//                     <strong>${total.precioFinal() || "el precio final no existe"}</strong>
//                     </li>
//                     </ul>`
//                 preciof = (parseInt(preciof + total.precioFinal()));
//                 document.getElementById('verCompra').innerHTML = filas;
//                 document.getElementById('verPrecioFinal').innerHTML = texto + preciof;  

//                     })
//             })
//         }
        
// recuperarJSON(URL)
