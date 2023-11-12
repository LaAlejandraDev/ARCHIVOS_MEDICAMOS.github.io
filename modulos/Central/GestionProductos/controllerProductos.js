console.log("Hola desde JavaScript PRODUCTOS");

let indexProductoSeleccionado;
let productos = [];

fetch("Central/GestionProductos/dataProductos.json")
    .then(response => {
        return response.json();
    })
    .then(function (jsondata) {
        productos = jsondata;
        console.log(productos);
        loadTabla();
    }
    );
export function addProductos() {
    let idProducto,
        nombre,
        nombreGene,
        formaFarma,
        unidadMe,
        presenta,
        princiInca,
        contraIndi,
        concentra,
        unidades,
        precio,
        foto,
        ruta,
        codigoBarras,
        estatus;

    idProducto = document.getElementById("txtProduId").value;
    nombre = document.getElementById("txtNombre").value;
    nombreGene = document.getElementById("txtNombreGe").value;
    formaFarma = document.getElementById("txtFormaFarma").value;
    unidadMe = document.getElementById("txtUnidadMe").value;
    presenta = document.getElementById("txtPresenta").value;
    princiInca = document.getElementById("txtPrinciIn").value;
    contraIndi = document.getElementById("txtContra").value;
    concentra = document.getElementById("txtConcentra").value;
    unidades = document.getElementById("txtUnidadesEn").value;
    precio = document.getElementById("txtPrecioUni").value;
    foto = "";
    ruta = "";
    codigoBarras = document.getElementById("txtCodigoBa").value;
    estatus = document.getElementById("txtEstatus").value;

    let producto = {};
    producto.idProducto = "RF03";
    producto.nombre = nombre;
    producto.nombreGene = nombreGene;
    producto.formaFarma = formaFarma;
    producto.unidadMe = unidadMe;
    producto.presenta = presenta;
    producto.princiInca = princiInca;
    producto.contraIndi = contraIndi;
    producto.concentra = concentra;
    producto.unidades = unidades;
    producto.precio = precio;
    producto.foto = foto;
    producto.ruta = ruta;
    producto.codigoBarras = codigoBarras;
    producto.estatus = "Activo";
    if (productos.push(producto)){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El Producto ha sido Registrado',
            confirmButtonText: 'Ok'
          });
    }
    clean();
    loadTabla();
}
export function loadTabla() {
    let cuerpo = "";
    productos.forEach(function (producto) {
        let registro =
            '<tr onclick="moduloProductos.selectProductos(' + productos.indexOf(producto) + ');">' +
            '<td>' + producto.nombre + '</td>' +
            '<td>' + producto.nombreGene + '</td>' +
            '<td>' + producto.precio + '</td>' +
            '<td>' + producto.codigoBarras + '</td>' +
            '<td>' + producto.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblProductos").innerHTML = cuerpo;

}
export function selectProductos(index) {
    document.getElementById("txtProduId").value = productos[index].idProducto;
    document.getElementById("txtNombre").value = productos[index].nombre;
    document.getElementById("txtNombreGe").value = productos[index].nombreGene;
    document.getElementById("txtFormaFarma").value = productos[index].formaFarma;
    document.getElementById("txtUnidadMe").value = productos[index].unidadMe;
    document.getElementById("txtPresenta").value = productos[index].presenta;
    document.getElementById("txtPrinciIn").value = productos[index].princiInca;
    document.getElementById("txtContra").value = productos[index].contraIndi;
    document.getElementById("txtConcentra").value = productos[index].concentra;
    document.getElementById("txtUnidadesEn").value = productos[index].unidades;
    document.getElementById("txtPrecioUni").value = productos[index].precio;
    document.getElementById("txtRutaFo").value = productos[index].ruta;
    document.getElementById("txtCodigoBa").value = productos[index].codigoBarras;
    document.getElementById("txtEstatus").value = productos[index].estatus;

    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexProductoSeleccionado = index;
}

export function clean() {
    document.getElementById("txtProduId").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtNombreGe").value = "";
    document.getElementById("txtFormaFarma").value = "";
    document.getElementById("txtUnidadMe").value = "";
    document.getElementById("txtPresenta").value = "";
    document.getElementById("txtPrinciIn").value = "";
    document.getElementById("txtContra").value = "";
    document.getElementById("txtConcentra").value = "";
    document.getElementById("txtUnidadesEn").value = "";
    document.getElementById("txtPrecioUni").value = "";
    document.getElementById("imgAdd").value = "";
    document.getElementById("txtRutaFo").value = "";
    document.getElementById("txtCodigoBa").value = "";
    document.getElementById("txtEstatus").value = "";

    document.getElementById("txtNombre").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexProductoSeleccionado = 0;
}

export function updateProductos() {
    let idProducto,
        nombre,
        nombreGene,
        formaFarma,
        unidadMe,
        presenta,
        princiInca,
        contraIndi,
        concentra,
        unidades,
        precio,
        foto,
        ruta,
        codigoBarras,
        estatus;

    idProducto = document.getElementById("txtProduId").value;
    nombre = document.getElementById("txtNombre").value;
    nombreGene = document.getElementById("txtNombreGe").value;
    formaFarma = document.getElementById("txtFormaFarma").value;
    unidadMe = document.getElementById("txtUnidadMe").value;
    presenta = document.getElementById("txtPresenta").value;
    princiInca = document.getElementById("txtPrinciIn").value;
    contraIndi = document.getElementById("txtContra").value;
    concentra = document.getElementById("txtConcentra").value;
    unidades = document.getElementById("txtUnidadesEn").value;
    precio = document.getElementById("txtPrecioUni").value;
    foto = document.getElementById("imgAdd").value;
    ruta = document.getElementById("txtRutaFo").value;
    codigoBarras = document.getElementById("txtCodigoBa").value;
    estatus = document.getElementById("txtEstatus").value;


    let producto = {};
    producto.idProducto = "RF03";
    producto.nombre = nombre;
    producto.nombreGene = nombreGene;
    producto.formaFarma = formaFarma;
    producto.unidadMe = unidadMe;
    producto.presenta = presenta;
    producto.princiInca = princiInca;
    producto.contraIndi = contraIndi;
    producto.concentra = concentra;
    producto.unidades = unidades;
    producto.precio = precio;
    producto.foto = foto;
    producto.ruta = ruta;
    producto.codigoBarras = codigoBarras;
    producto.estatus = "Activo";
    productos[indexProductoSeleccionado] = producto
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'El Producto ha sido Modificado',
        confirmButtonText: 'Ok'
      });
    clean();
    loadTabla();
}

export function deleteProductos() {
    Swal.fire({
        title: '¿Desea eliminar este registro?',
        text: "Este dato aparecerá inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Eliminado!',
                'El dato se ha eliminado.',
                'success'
              )
            productos[indexProductoSeleccionado].estatus = "Inactivo";
            clean();
            loadTabla();
        }
      })
}


export function buscarProductos(){
    let valor= document.getElementById("txtBusquedaProductos").value.toLowerCase().toString(); /*  */
    console.log(valor);
    let filtroProducto = {};
    filtroProducto = productos.filter( (producto) => { /* funcion de flecha es un foreach simplificado*/
        return ( 
            producto.nombre.toLowerCase().includes(valor) ||
            producto.codigoBarras.toLowerCase().includes(valor) /*includes se utiliza para que me arroje todos los datos que sean iguales sin importar que la palabra no este completa*/
        );
    }

    );
    let cuerpo = ""; /* lo que pongo en el filtroEmpleado me lo agrega en esta parte */
    filtroProducto.forEach(function (producto) {
        let registro =
            '<tr onclick="moduloProductos.selectProductos(' + productos.indexOf(producto) + ');">' +
            '<td>' + producto.nombre + '</td>' +
            '<td>' + producto.nombreGene + '</td>' +
            '<td>' + producto.precio + '</td>' +
            '<td>' + producto.codigoBarras + '</td>' +
            '<td>' + producto.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblProductos").innerHTML = cuerpo;
}