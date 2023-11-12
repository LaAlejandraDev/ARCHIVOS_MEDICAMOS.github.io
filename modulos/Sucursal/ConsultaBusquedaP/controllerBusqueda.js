let busquedas = [];

fetch("Sucursal/ConsultaBusquedaP/dataBusqueda.json")
    .then(response => {
        return response.json();
    })
    .then(function (jsondata) {
        busquedas = jsondata;
        console.log(busquedas);
        loadTabla();
    });


export function loadTabla() {
    let cuerpo = "";
    busquedas.forEach(function (busqueda) {
        let registro =
        '<tr onclick="moduloBusquedaPro.busquedaPro('+ busquedas.indexOf(busqueda) +');">'+
        '<td>' + busqueda.idProducto + '</td>' +
        '<td>' + busqueda.nombre + '</td>' +
        '<td>' + busqueda.nombreGene +  '</td>' +
        '<td>' + busqueda.formaFarma +'</td>' +
        '<td>' + busqueda.unidadMe + '</td>' +
        '<td>' + busqueda.codigoBarras + '</td>'+
        '<td>' + busqueda.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblBusqueda").innerHTML = cuerpo;
}


export function busquedaPro(){
    let valor= document.getElementById("txtBusqueda").value.toLowerCase().toString(); /*  */
    console.log(valor);
    let filtroBusqueda = {};
    filtroBusqueda = busquedas.filter( (busqueda) => { /* funcion de flecha es un foreach simplificado*/
        return ( 
            busqueda.nombre.toLowerCase().includes(valor) ||
            busqueda.idProducto.toLowerCase().includes(valor) /*includes se utiliza para que me arroje todos los datos que sean iguales sin importar que la palabra no este completa*/
        );
    }

    );
    let cuerpo = ""; /* lo que pongo en el filtroEmpleado me lo agrega en esta parte */
    filtroBusqueda.forEach(function (busquedaPro) {
        let registro =
        '<td>' + busquedaPro.idProducto + '</td>' +
        '<td>' + busquedaPro.nombre + '</td>' +
        '<td>' + busquedaPro.nombreGene +  '</td>' +
        '<td>' + busquedaPro.formaFarma +'</td>' +
        '<td>' + busquedaPro.unidadMe + '</td>' +
        '<td>' + busquedaPro.codigoBarras + '</td>'+
        '<td>' + busquedaPro.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblBusqueda").innerHTML = cuerpo;
}