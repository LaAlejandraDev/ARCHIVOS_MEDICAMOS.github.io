let empleados = [];
let indexEmpleadoSeleccionado;

fetch("Sucursal/GestionEmpleados/dataEmpleados.json")
    .then(response => {
        return response.json();
    })
    .then(function (jsondata) {
        empleados = jsondata;
        console.log(empleados);
        loadTabla();
    });

export function addEmpleados() {
    let idEmpleado,
        nombre,
        apellidoPa,
        apellidoMa,
        genero,
        fechaNac,
        rfc,
        curp,
        foto,
        domicilio,
        codPostal,
        ciudad,
        estado,
        telefono,
        correoElectronico,
        puesto,
        salario,
        estatus;
        let fecha= new Date();
        let fechaRegistro = fecha.toLocaleDateString();

    idEmpleado = document.getElementById("txtIdE").value;
    nombre = document.getElementById("txtNombre").value;
    apellidoPa = document.getElementById("txtApt").value;
    apellidoMa = document.getElementById("txtAmt").value;
    genero = document.getElementById("txtGenero").value;
    fechaNac = document.getElementById("txtFnac").value;
    rfc = document.getElementById("txtRFC").value;
    curp = document.getElementById("txtCURP").value;
    foto = "";
    domicilio = document.getElementById("txtDmc").value;
    codPostal = document.getElementById("txtCP").value;
    ciudad = document.getElementById("txtCiu").value;
    estado = document.getElementById("txtEDO").value;
    telefono = document.getElementById("txtTel").value;
    fechaRegistro = document.getElementById("txtFechaR").value;
    correoElectronico = document.getElementById("txtCoEl").value;
    puesto = document.getElementById("txtPuesto").value;
    salario = document.getElementById("txtSalario").value;
    estatus = document.getElementById("txtEstatus").value;

    let empleado = {};
    empleado.idEmpleado = "RF07";
    empleado.nombre = nombre;
    empleado.apellidoPa = apellidoPa;
    empleado.apellidoMa = apellidoMa;
    empleado.genero = genero;
    empleado.fechaNac = fechaNac;
    empleado.rfc = rfc;
    empleado.curp = curp;
    empleado.foto = foto;
    empleado.domicilio = domicilio;
    empleado.codPostal =codPostal;
    empleado.ciudad = ciudad;
    empleado.estado = estado;
    empleado.telefono = telefono;
    empleado.fechaRegistro = fechaRegistro;
    empleado.correoElectronico = correoElectronico;
    empleado.puesto = puesto;
    empleado.salario = salario;
    empleado.estatus = "Activo";
    empleados.push(empleado)
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
    empleados.forEach(function (empleado) {
        let registro =
        '<tr onclick="moduloEmpleados.selectEmpleados('+ empleados.indexOf(empleado) +');">'+
        '<td>' + empleado.nombre + '</td>' +
        '<td>' + empleado.apellidoPa + ' '+empleado.apellidoMa + '</td>' +
        '<td>' + empleado.telefono + '</td>' +
        '<td>' + empleado.puesto + '</td>'+
        '<td>' + empleado.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblEmpleados").innerHTML = cuerpo;
}

export function selectEmpleados(index) {
    document.getElementById("txtIdE").value = empleados[index].idEmpleado;
    document.getElementById("txtNombre").value = empleados[index].nombre;
    document.getElementById("txtApt").value = empleados[index].apellidoPa;
    document.getElementById("txtAmt").value = empleados[index].apellidoMa;
    document.getElementById("txtGenero").value = empleados[index].genero;
    document.getElementById("txtFnac").value = empleados[index].fechaNac;
    document.getElementById("txtRFC").value = empleados[index].rfc;
    document.getElementById("txtCURP").value = empleados[index].curp;
    document.getElementById("txtDmc").value = empleados[index].domicilio;
    document.getElementById("txtCP").value = empleados[index].codPostal;
    document.getElementById("txtCiu").value = empleados[index].ciudad;
    document.getElementById("txtEDO").value = empleados[index].estado;
    document.getElementById("txtTel").value = empleados[index].telefono;
    document.getElementById("txtFechaR").value = empleados[index].fechaRegistro;
    document.getElementById("txtCoEl").value = empleados[index].correoElectronico;
    document.getElementById("txtPuesto").value = empleados[index].puesto;
    document.getElementById("txtSalario").value = empleados[index].salario;
    document.getElementById("txtEstatus").value = empleados[index].estatus;

    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexEmpleadoSeleccionado = index;
}

export function clean() {
    document.getElementById("txtIdE").value = "";
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
    document.getElementById("txtPuesto").value = "";
    document.getElementById("txtSalario").value = "";
    document.getElementById("txtEstatus").value = "";
    document.getElementById("txtNombre").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexEmpleadoSeleccionado = 0;
}

export function updateEmpleados() {
    let idEmpleado,
        nombre,
        apellidoPa,
        apellidoMa,
        genero,
        fechaNac,
        rfc,
        curp,
        foto,
        domicilio,
        codPostal,
        ciudad,
        estado,
        telefono,
        correoElectronico,
        puesto,
        salario,
        estatus;
        let fecha= new Date();
        let fechaRegistro = fecha.toLocaleDateString();

    idEmpleado = document.getElementById("txtIdE").value;
    nombre = document.getElementById("txtNombre").value;
    apellidoPa = document.getElementById("txtApt").value;
    apellidoMa = document.getElementById("txtAmt").value;
    genero = document.getElementById("txtGenero").value;
    fechaNac = document.getElementById("txtFnac").value;
    rfc = document.getElementById("txtRFC").value;
    curp = document.getElementById("txtCURP").value;
    foto = "";
    domicilio = document.getElementById("txtDmc").value;
    codPostal = document.getElementById("txtCP").value;
    ciudad = document.getElementById("txtCiu").value;
    estado = document.getElementById("txtEDO").value;
    telefono = document.getElementById("txtTel").value;
    fechaRegistro = document.getElementById("txtFechaR").value;
    correoElectronico = document.getElementById("txtCoEl").value;
    puesto = document.getElementById("txtPuesto").value;
    salario = document.getElementById("txtSalario").value;
    estatus = document.getElementById("txtEstatus").value;

    let empleado = {};
    empleado.idEmpleado = "RF07";
    empleado.nombre = nombre;
    empleado.apellidoPa = apellidoPa;
    empleado.apellidoMa = apellidoMa;
    empleado.genero = genero;
    empleado.fechaNac = fechaNac;
    empleado.rfc = rfc;
    empleado.curp = curp;
    empleado.foto = foto;
    empleado.domicilio = domicilio;
    empleado.codPostal =codPostal;
    empleado.ciudad = ciudad;
    empleado.estado = estado;
    empleado.telefono = telefono;
    empleado.fechaRegistro = fechaRegistro;
    empleado.correoElectronico = correoElectronico;
    empleado.puesto = puesto;
    empleado.salario = salario;
    empleado.estatus = "Activo";
    empleados[indexEmpleadoSeleccionado] = empleado
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cliente Actualizado',
        confirmButtonText: 'Ok'
      });
    clean();
    loadTabla();
}

export function deleteEmpleados() {
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
            empleados[indexEmpleadoSeleccionado].estatus = "Inactivo";
            clean();
            loadTabla();
        }
      })
}

export function buscarEmpleados(){
    let valor= document.getElementById("txtBusquedaCliente").value.toLowerCase(); /*  */
    console.log(valor);
    let filtroEmpleado = {};
    filtroEmpleado = empleados.filter( (empleado) => { /* funcion de flecha es un foreach simplificado*/
        return ( 
            empleado.nombre.toLowerCase().includes(valor) ||
            empleado.apellidoPa.toLowerCase().includes(valor) /*includes se utiliza para que me arroje todos los datos que sean iguales sin importar que la palabra no este completa*/
        );
    }

    );
    let cuerpo = ""; /* lo que pongo en el filtroEmpleado me lo agrega en esta parte */
    filtroEmpleado.forEach(function (empleado) {
        let registro =
        '<tr onclick="moduloEmpleados.selectEmpleados('+ empleados.indexOf(empleado) +');">'+
        '<td>' + empleado.nombre + '</td>' +
        '<td>' + empleado.apellidoPa + ' '+empleado.apellidoMa + '</td>' +
        '<td>' + empleado.telefono + '</td>' +
        '<td>' + empleado.puesto + '</td>'+
        '<td>' + empleado.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblEmpleados").innerHTML = cuerpo;
}
