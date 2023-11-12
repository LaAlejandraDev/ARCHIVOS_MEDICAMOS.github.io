let moduloPedidos;
let moduloVentas;
let moduloEmpleados;
let moduloBusquedaPro;
let moduloClientes;

console.log("Hola desde Controller Sucursal");

function cargarModuloVentas(){
    fetch("./Sucursal/GestionVentas/viewVentas.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("./Sucursal/GestionVentas/controllerVentas.js").then(
                            function(controller){
                                moduloVentas = controller;
                            }
                            );
                }
            );
}
function cargarModuloClientes(){
    fetch("./Sucursal/GestionClientes/viewClientes.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("./Sucursal/GestionClientes/controllerClientes.js").then(
                            function(controller){
                                moduloClientes = controller;
                            }
                            );
                }
            );
}

function cargarModuloEmpleados(){
    fetch("./Sucursal/GestionEmpleados/viewEmpleados.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("./Sucursal/GestionEmpleados/controllerEmpleados.js").then(
                            function(controller){
                                moduloEmpleados = controller;
                            }
                            );
                }
            );
}



function cargarModuloBusquedaPro(){
    fetch("./Sucursal/ConsultaBusquedaP/viewBusqueda.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("./Sucursal/ConsultaBusquedaP/controllerBusqueda.js").then(
                            function(controller){
                                moduloBusquedaPro = controller;
                            }
                            );
                }
            );
}









document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("enlace").addEventListener("click", confirmarCierreSesion, false);
});

function confirmarCierreSesion(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace

    Swal.fire({
        title: '¿Estás seguro?',
        text: "Estas por cerrar sesión",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, cerrar sesión',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "Logins/LoginSucursal.html"; 
        }
    });
}



console.log("Hola desde Controller Sucursal");

function cargarModuloPedidosCo(){
    fetch("./Sucursal/PedidosCompra/viewPedidoCo.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("./Sucursal/PedidosCompra/controllerPedidoCo.js").then(
                            function(controller){
                                moduloPedidos = controller;
                            }
                            );
                }
            );
}