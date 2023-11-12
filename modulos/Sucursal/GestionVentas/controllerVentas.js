console.log("Hola desde JavaScript VENTAS")

let indexVentaSeleccionado;
let ventas = [];

fetch("Sucursal/GestionVentas/dataVentas.json")
        .then(response =>{
            return response.json();
        })
        .then(function(jsondata){
                ventas = jsondata;
                console.log(ventas);
                loadTabla();
            }            
        );

export function addVentas(){
    let idVenta,
        producto,
        cantidad,
        precio,
        empleado,
        cliente,
        estatus;
    let fecha= new Date();
    let fechaActual = fecha.toLocaleDateString();
    let hora = new Date();
    let horaActual = hora.toLocaleTimeString();

    idVenta = document.getElementById("txtVentaId").value;
    producto = document.getElementById("txtProducto").value;
    cantidad = document.getElementById("txtCanti").value;
    precio = document.getElementById("txtPrecio").value;
    document.getElementById("txtFecha").value = fechaActual;
    document.getElementById("txtHora").value = horaActual;
    empleado = document.getElementById("txtEmpleado").value;
    cliente = document.getElementById("txtCliente").value;
    estatus = document.getElementById("txtEstatus").value;
    
    let venta = {};
    venta.idVenta=  "RF06";
    venta.producto = producto;
    venta.cantidad = cantidad;
    venta.precio = precio;
    venta.fechaActual = fechaActual;
    venta.horaActual = horaActual;
    venta.empleado = empleado;
    venta.cliente = cliente;
    venta.estatus = "Activo";
    ventas.push(venta)
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Su Venta ha sido Registrada',
        confirmButtonText: 'Ok'
      });
    clean();
    loadTabla();
}

export function loadTabla(){
    let cuerpo = "";
    ventas.forEach(function (venta){
        let registro =  
                '<tr onclick="moduloVentas.selectVentas('+ ventas.indexOf(venta) +');">'+
                '<td>' + venta.producto + '</td>' +
                '<td>' + venta.cantidad + '</td>' +
                '<td>' + venta.precio + '</td>' +
                '<td>' + venta.fechaActual + '</td>' +
                '<td>' + venta.cliente + '</td>'+
                '<td>' + venta.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblVentas").innerHTML = cuerpo;
    
}

export function selectVentas(index){
    document.getElementById("txtVentaId").value = ventas[index].idVenta;
    document.getElementById("txtProducto").value = ventas[index].producto;
    document.getElementById("txtCanti").value = ventas[index].cantidad;
    document.getElementById("txtPrecio").value = ventas[index].precio;
    document.getElementById("txtFecha").value = ventas[index].fechaActual;
    document.getElementById("txtHora").value = ventas[index].horaActual;
    document.getElementById("txtEmpleado").value = ventas[index].empleado;
    document.getElementById("txtCliente").value = ventas[index].cliente;
    document.getElementById("txtEstatus").value = ventas[index].estatus;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexVentaSeleccionado = index;
}

export function clean(){
    document.getElementById("txtVentaId").value = "";
    document.getElementById("txtProducto").value = "";
    document.getElementById("txtCanti").value = "";
    document.getElementById("txtPrecio").value = "";
    document.getElementById("txtFecha").value = "";
    document.getElementById("txtHora").value = "";
    document.getElementById("txtEmpleado").value = "";
    document.getElementById("txtCliente").value = "";
    document.getElementById("txtEstatus").value = "";
    
    document.getElementById("txtProducto").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexVentaSeleccionado = 0;
}

export function updateVentas(){
    let idVenta,
        producto,
        cantidad,
        precio,
        fechaActual,
        horaActual,
        empleado,
        cliente,
        estatus;

    idVenta = document.getElementById("txtVentaId").value;
    producto = document.getElementById("txtProducto").value;
    cantidad = document.getElementById("txtCanti").value;
    precio = document.getElementById("txtPrecio").value;
    fechaActual = document.getElementById("txtFecha").value;
    horaActual = document.getElementById("txtHora").value;
    empleado = document.getElementById("txtEmpleado").value;
    cliente = document.getElementById("txtCliente").value;
    estatus = document.getElementById("txtEstatus").value;
    
    let venta = {};
    venta.idVenta=  "RF06";
    venta.producto = producto;
    venta.cantidad = cantidad;
    venta.precio = precio;
    venta.fechaActual = fechaActual;
    venta.horaActual= horaActual;
    venta.empleado = empleado;
    venta.cliente = cliente;
    venta.estatus = "Activo";
    ventas[indexVentaSeleccionado] = venta
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'La Venta ha sido Actualizada',
        confirmButtonText: 'Ok'
      });;
    clean();
    loadTabla();
}

export function deleteVentas(){
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
              ventas[indexVentaSeleccionado].estatus = "Inactivo";
              clean();
              loadTabla();
        }
      })
}


export function buscarVenta(){
    let valor= document.getElementById("txtBusquedaVenta").value.toLowerCase(); /*  */
    console.log(valor);
    let filtroVenta = {};
    filtroVenta = ventas.filter( (venta) => { /* funcion de flecha es un foreach simplificado*/
        return ( 
            venta.producto.toLowerCase().includes(valor) ||
            venta.cliente.toLowerCase().includes(valor) /*includes se utiliza para que me arroje todos los datos que sean iguales sin importar que la palabra no este completa*/
        );
    }

    );
    let cuerpo = ""; /* lo que pongo en el filtroEmpleado me lo agrega en esta parte */
        filtroVenta.forEach(function (venta){
            let registro =  
                    '<tr onclick="moduloVentas.selectVentas('+ ventas.indexOf(venta) +');">'+
                    '<td>' + venta.producto + '</td>' +
                    '<td>' + venta.cantidad + '</td>' +
                    '<td>' + venta.precio + '</td>' +
                    '<td>' + venta.fechaActual + '</td>' +
                    '<td>' + venta.cliente + '</td>'+
                    '<td>' + venta.estatus + '</td></tr>' ; 
            cuerpo += registro;
        });
        console.log(cuerpo);
        document.getElementById("tblVentas").innerHTML = cuerpo;
    }
