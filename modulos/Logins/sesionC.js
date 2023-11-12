function ir() {
    let c = "admonC";
    let u = "admonC";
    let password = document.getElementById("password").value;
    let login = document.getElementById("login").value;
    if(password !== "" && login !== ""){
        if(password !== c && login !== u){ // devuelve verdadero son del mismo tipo pero no iguales o son de diferete tipo
            Swal.fire({
                icon: 'error',
                title: 'Datos incorrectos.',
                text: 'Por favor ingresa un usuario y contraseña correctos!'
              });
        }else{
            Swal.fire({
                icon: 'success',
                title: 'BIENVENIDO',
                text: 'Haz ingresado exitosamente a Sicefa Central!',
                confirmButtonText:'Ok'
              }).then((result) => {
                 if(result.isConfirmed){
                    window.location = "../Central.html";
                 }
                });
        }
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Datos vacíos.',
            text: 'Asegurate de ingresar datos en los campos, intentalo nuevamente!'
          });
    }
}






   
function admonS() {
    const cas = "admonS";
    const uas = "admonS";
    let passwordAdms = document.getElementById("passwordAdms").value;
    let loginAdms = document.getElementById("loginAdms").value;

    if (passwordAdms === cas && loginAdms === uas) {
        window.location = "../Sucursal.html";
    } else {
        alert("Por favor ingrese el usuario y contraseña correctos.");
    }
}

function emps() {
    const ce = "empsS";
    const ue = "empsS";
    let passwordEmps = document.getElementById("passwordEmps").value;
    let loginEmps = document.getElementById("loginEmps").value;

    if (passwordEmps === ce && loginEmps === ue) {
        alert("Bienvenido a SICEFA SUCURSAL");
        window.location = "../Empleados.html";
    } else {
        alert("Por favor ingrese el usuario y contraseña correctos.");
    }
}

Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Bienvenido a \n SICEFA CENTRAL',
    showConfirmButton: false,
    timer: 1150
});

Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Bienvenido a \n SICEFA SUCURSAL',
    showConfirmButton: false,
    timer: 1150
});

Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Bienvenido a \n SICEFA SUCURSAL',
    showConfirmButton: false,
    timer: 1150
});