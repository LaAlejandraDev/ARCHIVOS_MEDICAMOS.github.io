let clientes = []; // definir arreglo, hacer referencia a los datos que vamos a solicitar
let indexClienteSeleccionado;

fetch("Sucursal/GestionClientes/dataClientes.json") // realiza promesas, 
//lo que esta entre parentesis significa la peticion "clientes" donde hacemos referencia al origen
// de los datos
    .then(response => { // then es una promesa
        //realizamos una solicitud para que nos retorne la informacion del json, resolvermos la promesa
        // donde lo pasa a un determinado formato en este caso json
        return response.json();
    })
    .then(function (jsondata) { // aqui ya leemos la promesa anterior y por ende nos imprime los datos,
        //tanto en consola como en la funcion loadTabla donde mostraremos la informacion
        clientes = jsondata;
        console.log(clientes);
        loadTabla();
    });

export function addClientes() {
    let idCliente,
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        genero,
        fechaNacimiento,
        rfc,
        curp,
        foto,
        domicilio,
        codigoPostal,
        ciudad,
        estado,
        telefono,
        correoElectronico,
        estatus;
        let fecha= new Date();
        let fechaRegistro = fecha.toLocaleDateString();

    idCliente = document.getElementById("txtIdC").value;
    nombre = document.getElementById("txtNombre").value;
    apellidoPaterno = document.getElementById("txtApt").value;
    apellidoMaterno = document.getElementById("txtAmt").value;
    genero = document.getElementById("txtGenero").value;
    fechaNacimiento = document.getElementById("txtFnac").value;
    rfc = document.getElementById("txtRFC").value;
    curp = document.getElementById("txtCURP").value;
    foto = "";
    domicilio = document.getElementById("txtDmc").value;
    codigoPostal = document.getElementById("txtCP").value;
    ciudad = document.getElementById("txtCiu").value;
    estado = document.getElementById("txtEDO").value;
    telefono = document.getElementById("txtTel").value;
    fechaRegistro = document.getElementById("txtFechaR").value;
    correoElectronico = document.getElementById("txtCoEl").value;
    estatus = document.getElementById("txtEstatus").value;

    let cliente = {}; // crear e instanciar el objeto
    cliente.idCliente = "RF10";
    cliente.nombre = nombre;
    cliente.apellidoPaterno = apellidoPaterno;
    cliente.apellidoMaterno = apellidoMaterno;
    cliente.genero = genero;
    cliente.fechaNacimiento = fechaNacimiento;
    cliente.rfc = rfc;
    cliente.curp = curp;
    cliente.foto = foto;
    cliente.domicilio = domicilio;
    cliente.codigoPostal =codigoPostal;
    cliente.ciudad = ciudad;
    cliente.estado = estado;
    cliente.telefono = telefono;
    cliente.fechaRegistro = fechaRegistro;
    cliente.correoElectronico = correoElectronico;
    cliente.estatus = "Activo";
    clientes.push(cliente); // se envia ese objeto al arreglo principal
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cliente Registrado',
        confirmButtonText: 'Ok'
      });
    clean();
    loadTabla();
}

export function loadTabla() {
    let cuerpo = "";
    clientes.forEach(function (cliente) { //recorre el arreglo y ejecuta una funcion proporcionada en cada uno de ellos
        let registro =
        '<tr onclick="moduloClientes.selectClientes('+ clientes.indexOf(cliente) +');">'+
        '<td>' + cliente.nombre + '</td>' +
        '<td>' + cliente.apellidoPaterno + ' '+cliente.apellidoMaterno + '</td>' +
        '<td>' + cliente.genero + '</td>' +
        '<td>' + cliente.telefono + '</td>'+
        '<td>' + cliente.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblClientes").innerHTML = cuerpo;
}

export function selectClientes(index) { // funcion con parametros
    document.getElementById("txtIdC").value = clientes[index].idCliente;
    document.getElementById("txtNombre").value = clientes[index].nombre;
    document.getElementById("txtApt").value = clientes[index].apellidoPaterno;
    document.getElementById("txtAmt").value = clientes[index].apellidoMaterno;
    document.getElementById("txtGenero").value = clientes[index].genero;
    document.getElementById("txtFnac").value = clientes[index].fechaNacimiento;
    document.getElementById("txtRFC").value = clientes[index].rfc;
    document.getElementById("txtCURP").value = clientes[index].curp;
    document.getElementById("txtDmc").value = clientes[index].domicilio;
    document.getElementById("txtCP").value = clientes[index].codigoPostal;
    document.getElementById("txtCiu").value = clientes[index].ciudad;
    document.getElementById("txtEDO").value = clientes[index].estado;
    document.getElementById("txtTel").value = clientes[index].telefono;
    document.getElementById("txtFechaR").value = clientes[index].fechaRegistro;
    document.getElementById("txtCoEl").value = clientes[index].correoElectronico;
    document.getElementById("txtEstatus").value =clientes[index].estatus;

    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexClienteSeleccionado = index;
}

export function clean() {
    document.getElementById("txtIdC").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApt").value = "";
    document.getElementById("txtAmt").value = "";
    document.getElementById("txtGenero").value = "";
    document.getElementById("txtFnac").value = "";
    document.getElementById("txtRFC").value = "";
    document.getElementById("txtCURP").value = "";
    document.getElementById("imgAdd").value = "";
    document.getElementById("txtDmc").value = "";
    document.getElementById("txtCP").value = "";
    document.getElementById("txtCiu").value = "";
    document.getElementById("txtEDO").value = "";
    document.getElementById("txtTel").value = "";
    document.getElementById("txtFechaR").value = "";
    document.getElementById("txtCoEl").value = "";
    document.getElementById("txtEstatus").value = "";
    document.getElementById("txtNombre").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexClienteSeleccionado = 0;
}

export function updateClientes() {
    let idCliente,
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        genero,
        fechaNacimiento,
        rfc,
        curp,
        foto,
        domicilio,
        codigoPostal,
        ciudad,
        estado,
        telefono,
        fechaRegistro,
        correoElectronico,
        estatus;

    idCliente = document.getElementById("txtIdC").value; //asignar valores
    nombre = document.getElementById("txtNombre").value;
    apellidoPaterno = document.getElementById("txtApt").value;
    apellidoMaterno = document.getElementById("txtAmt").value;
    genero = document.getElementById("txtGenero").value;
    fechaNacimiento = document.getElementById("txtFnac").value;
    rfc = document.getElementById("txtRFC").value;
    curp = document.getElementById("txtCURP").value;
    foto = "";
    domicilio = document.getElementById("txtDmc").value;
    codigoPostal = document.getElementById("txtCP").value;
    ciudad = document.getElementById("txtCiu").value;
    estado = document.getElementById("txtEDO").value;
    telefono = document.getElementById("txtTel").value;
    fechaRegistro = document.getElementById("txtFechaR").value;
    correoElectronico = document.getElementById("txtCoEl").value;
    estatus = document.getElementById("txtEstatus").value;

    let cliente = {};
    cliente.idCliente = "RF10";
    cliente.nombre = nombre;
    cliente.apellidoPaterno = apellidoPaterno;
    cliente.apellidoMaterno = apellidoMaterno;
    cliente.genero = genero;
    cliente.fechaNacimiento = fechaNacimiento;
    cliente.rfc = rfc;
    cliente.curp = curp;
    cliente.foto = foto;
    cliente.domicilio = domicilio;
    cliente.codigoPostal =codigoPostal;
    cliente.ciudad = ciudad;
    cliente.estado = estado;
    cliente.telefono = telefono;
    cliente.fechaRegistro = fechaRegistro;
    cliente.correoElectronico = correoElectronico;
    cliente.estatus = "Activo";
    clientes[indexClienteSeleccionado] = cliente;
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cliente Actualizado',
        text:'Usted acaba de modificar un cliente',
        confirmButtonText: 'Ok'
      });;
    clean();
    loadTabla();
}

export function deleteClientes() {
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
            clientes[indexClienteSeleccionado].estatus = "Inactivo";
            clean();
            loadTabla();
        }
      })
}


export function buscarClientes(){
    let valor= document.getElementById("txtBusquedaClientes").value.toLowerCase(); /*  */
    console.log(valor);
    let filtroClientes = {}; // QUE SE INICIALIZA COMO UN obejeto
    filtroClientes = clientes.filter( ( cliente ) => { /* funcion de flecha es un foreach simplificado*/
        return ( 
            cliente.nombre.toLowerCase().includes(valor) || // OR //
            cliente.apellidoPaterno.toLowerCase().includes(valor) /*includes se utiliza para que me arroje todos los datos que sean iguales sin importar que la palabra no este completa*/
        );
    }

    );
    let cuerpo = ""; /* lo que pongo en el filtroEmpleado me lo agrega en esta parte */
    filtroClientes.forEach(function (cliente) {
        let registro =
        '<tr onclick="moduloClientes.selectClientes('+ clientes.indexOf(cliente) +');">'+
        '<td>' + cliente.nombre + '</td>' +
        '<td>' + cliente.apellidoPaterno + ' '+cliente.apellidoMaterno + '</td>' +
        '<td>' + cliente.genero + '</td>' +
        '<td>' + cliente.telefono + '</td>'+
        '<td>' + cliente.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblClientes").innerHTML = '';
    document.getElementById("tblClientes").innerHTML = cuerpo;
}
