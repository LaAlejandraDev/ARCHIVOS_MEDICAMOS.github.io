let moduloSucursales;
let moduloVentas;
let moduloProductos;

console.log("Hola desde Controller Central");

function cargarModuloProductos() {
    fetch("./Central/GestionProductos/viewProductos.html")
        .then(
            function (response) {
                return response.text();
            }
        )
        .then(
            function (html) {
                document.getElementById("contenedorPrincipal").innerHTML = html;
                import("./Central/GestionProductos/controllerProductos.js").then(
                    function (controller) {
                        moduloProductos = controller;
                    }
                );
            }
        );
}

function cargarModuloSucursales() {
    fetch("./Central/GestionSucursales/viewSucursales.html")
        .then(
            function (response) {
                return response.text();
            }
        )
        .then(
            function (html) {
                document.getElementById("contenedorPrincipal").innerHTML = html;
                import("./Central/GestionSucursales/controllerSucursales.js").then(
                    function (controller) {
                        moduloSucursales = controller;
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
            window.location.href = "Logins/LoginCentral.html"; 
        }
    });
}
