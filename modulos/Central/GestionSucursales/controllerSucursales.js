let sucursalSelec;
let sucursales = [];

let moduloSucursales = {
    addSucursal: function () {
        let Clave_de_Sucursal,
            Nombre_de_Sucursal,
            Encargado,
            Direccion,
            Telefono,
            Codigo_Postal;

        Clave_de_Sucursal = document.getElementById("txtClaveUnica").value;
        Nombre_de_Sucursal = document.getElementById("txtNomSuc").value;
        Encargado = document.getElementById("txtNomEncargado").value;
        Direccion = document.getElementById("txtDireccion").value;
        Telefono = document.getElementById("txtTel").value;
        Codigo_Postal = document.getElementById("txtCP").value;

        let sucursal = {
            Clave_de_Sucursal: Clave_de_Sucursal,
            Nombre_de_Sucursal: Nombre_de_Sucursal,
            Encargado: Encargado,
            Direccion: Direccion,
            Telefono: Telefono,
            Codigo_Postal: Codigo_Postal,
            estatus: "Activo"
        };
        sucursales.push(sucursal);
        this.loadTabla();
    },

    loadTabla: function (sucursalesMostrar) {
        let cuerpo = "";
        let sucursalesToShow = sucursalesMostrar || sucursales;

        sucursalesToShow.forEach(function (sucursal) {
            let registro =
                '<tr onclick="moduloSucursal.selectSucursal(' + sucursales.indexOf(sucursal) + ');">' +
                '<td>' + sucursal.Nombre_de_Sucursal + '</td>' +
                '<td>' + sucursal.Encargado + '</td>' +
                '<td>' + sucursal.Direccion + '</td>' +
                '<td>' + sucursal.Telefono + '</td>' +
                '<td>' + sucursal.Codigo_Postal + '</td>' +
                '<td>' + sucursal.estatus + '</td></tr>';
            cuerpo += registro;
        });

        document.getElementById("tblSucursal").innerHTML = cuerpo;
    },
    selectSucursal: function (index) {
        document.getElementById("txtClaveUnica").value = sucursales[index].Clave_de_Sucursal;
        document.getElementById("txtNomSuc").value = sucursales[index].Nombre_de_Sucursal;
        document.getElementById("txtNomEncargado").value = sucursales[index].Encargado;
        document.getElementById("txtDireccion").value = sucursales[index].Direccion;
        document.getElementById("txtTel").value = sucursales[index].Telefono;
        document.getElementById("txtCP").value = sucursales[index].Codigo_Postal;

        document.getElementById("btnEli").classList.remove("disabled");
        document.getElementById("btnMod").classList.remove("disabled");
        document.getElementById("btnAgr").classList.add("disabled");
        sucursalSelec = index;
    },

    modificarSucursal: function () {
        if (sucursalSelec !== undefined && sucursalSelec >= 0 && sucursalSelec < sucursales.length) {
            let Clave_de_Sucursal,
                Nombre_de_Sucursal,
                Encargado,
                Direccion,
                Telefono,
                Codigo_Postal;

            Clave_de_Sucursal = document.getElementById("txtClaveUnica").value;
            Nombre_de_Sucursal = document.getElementById("txtNomSuc").value;
            Encargado = document.getElementById("txtNomEncargado").value;
            Direccion = document.getElementById("txtDireccion").value;
            Telefono = document.getElementById("txtTel").value;
            Codigo_Postal = document.getElementById("txtCP").value;

            sucursales[sucursalSelec].Clave_de_Sucursal = Clave_de_Sucursal;
            sucursales[sucursalSelec].Nombre_de_Sucursal = Nombre_de_Sucursal;
            sucursales[sucursalSelec].Encargado = Encargado;
            sucursales[sucursalSelec].Direccion = Direccion;
            sucursales[sucursalSelec].Telefono = Telefono;
            sucursales[sucursalSelec].Codigo_Postal = Codigo_Postal;

            this.loadTabla();
            this.clean();
        }
    },

    eliminarSucursales: function () {
        sucursales[sucursalSelec].estatus = "Inactivo";
        this.loadTabla();
        this.clean();
    },

    clean: function () {
        document.getElementById("txtClaveUnica").value = "";
        document.getElementById("txtNomSuc").value = "";
        document.getElementById("txtNomEncargado").value = "";
        document.getElementById("txtDireccion").value = "";
        document.getElementById("txtTel").value = "";
        document.getElementById("txtCP").value = "";

        document.getElementById("btnEli").classList.add("disabled");
        document.getElementById("btnMod").classList.add("disabled");
        document.getElementById("btnAgr").classList.remove("disabled");
    },

    buscarSucursal: function () {
        let terminoBusqueda = document.getElementById("txtBuscar").value.toLowerCase();

        let sucursalesFiltradas = sucursales.filter(function (sucursal) {
            return (
                sucursal.Nombre_de_Sucursal.toLowerCase().includes(terminoBusqueda) ||
                sucursal.Encargado.toLowerCase().includes(terminoBusqueda) ||
                sucursal.Direccion.toLowerCase().includes(terminoBusqueda) ||
                sucursal.Telefono.toLowerCase().includes(terminoBusqueda) ||
                sucursal.Codigo_Postal.toLowerCase().includes(terminoBusqueda)
            );
        });

        this.loadTabla(sucursalesFiltradas);
    }
};

fetch("Central/GestionSucursales/dataSucursales.json")
    .then(response => {
        return response.json();
    })
    .then(function (jsondata) {
        sucursales = jsondata;
        loadTabla();
});