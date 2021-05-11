//Declaración de variables

console.log("js connected")
var nombreUsuario = "wiLson";
var claveUsuario = 0000;
var saldoCuenta = 500;
var limiteExtraccion = 1000;
var cuentaAmiga1 = 1234;
var cuentaAmiga2 = 4321;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {

    exLimit = limiteExtraccion;
    var newLimit = prompt("Cuanto quieres que sea tu nuevo limite?");
    limiteExtraccion = newLimit;
    alert("su limite de extraccion era: $" + exLimit + "\nsu nuevo limite de extraccion es $" + limiteExtraccion);

    actualizarLimiteEnPantalla();

}

function extraerDinero() {
    exSaldo = saldoCuenta;
    var extract = prompt("Cuanto dinero quieres extraer?");

    if (extract > saldoCuenta) {
        alert("No hay saldo dispónible en tu cuenta para extraer esa cantidad de dinero");
    } else if (extract % 100 != 0) {
        alert("Solo puedes extraer billetes de $100");
    } else if (extract <= limiteExtraccion) {
        saldoCuenta = saldoCuenta - extract;
        alert("Has retirado $" + extract + "\ntu saldo era $" + exSaldo + "\ntu saldo ahora es $" + saldoCuenta);
    } else {
        alert("Estas tratando de retirar mas dinero que tu limite de extraccion");
    }

    actualizarSaldoEnPantalla();

}

function depositarDinero() {
    exSaldo = saldoCuenta;
    var deposit = prompt("cuanto dinero quieres depositar?");
    saldoCuenta = saldoCuenta + parseInt(deposit);
    actualizarSaldoEnPantalla();
    alert("has depositado $" + deposit + "\ntu saldo era $" + exSaldo + "\ntu saldo ahora es $" + saldoCuenta);
}

function pagarServicio() {

    var servicioNum = prompt("Ingrese el numero que corresponda con el servicio que desea pagar \n1.Agua\n2.Luz\n3.Internet\n4.Telefono");
    var costoAgu = 350;
    var costoLuz = 210;
    var costoInt = 570;
    var costoTel = 425;

    switch (servicioNum) {
        case '1':
            exSaldo = saldoCuenta;
            if (costoAgu <= saldoCuenta) {
                saldoCuenta = saldoCuenta - costoAgu;
                alert("Has pagado el servicio Agua" + "\nSaldo anterior $" + exSaldo + "\nDinero descontado $" + costoAgu + "\nSaldo actual $" + saldoCuenta);
                actualizarSaldoEnPantalla();
            } else {
                alert("No dispones de dinero para pagar este servicio")
            }
            break;

        case '2':
            exSaldo = saldoCuenta;
            if (costoLuz <= saldoCuenta) {
                saldoCuenta = saldoCuenta - costoLuz;
                alert("Has pagado el servicio Luz" + "\nSaldo anterior $" + exSaldo + "\nDinero descontado $" + costoLuz + "\nSaldo actual $" + saldoCuenta);
                actualizarSaldoEnPantalla();
            } else {
                alert("No dispones de dinero para pagar este servicio")
            }
            break;

        case '3':
            exSaldo = saldoCuenta;
            if (costoInt <= saldoCuenta) {
                saldoCuenta = saldoCuenta - costoInt;
                alert("Has pagado el servicio Internet" + "\nSaldo anterior $" + exSaldo + "\nDinero descontado $" + costoInt + "\nSaldo actual $" + saldoCuenta);
                actualizarSaldoEnPantalla();
            } else {
                alert("No dispones de dinero para pagar este servicio")
            }
            break;

        case '4':
            exSaldo = saldoCuenta;
            if (costoTel <= saldoCuenta) {
                saldoCuenta = saldoCuenta - costoTel;
                alert("Has pagado el servicio Telefono" + "\nSaldo anterior $" + exSaldo + "\nDinero descontado $" + costoTel + "\nSaldo actual $" + saldoCuenta);
                actualizarSaldoEnPantalla();
            } else {
                alert("No dispones de dinero para pagar este servicio")
            }
            break;

        default:
            alert("Usted no ingreso un numero correcto");

    }

}

function transferirDinero() {
    
    var pedirCuenta = prompt("Por favor ingrese la cuenta de destino");
    pedirCuenta = parseInt(pedirCuenta);

    if (pedirCuenta == cuentaAmiga1){

        var transfer1 = prompt("Por favor ingrese la cantidad que desea transferir");
            if (transfer1 <= saldoCuenta) {
                saldoCuenta = saldoCuenta - transfer1;
                alert("Se han transferido $" + transfer1 + "\nCuenta destino " + cuentaAmiga1);
                actualizarSaldoEnPantalla();
            } else {
                alert("No dispones de dinero para hacer esta transferencia");
            }

    } else if (pedirCuenta == cuentaAmiga2){

        var transfer2 = prompt("Por favor ingrese la cantidad que desea transferir");
            if (transfer2 <= saldoCuenta) {
                saldoCuenta = saldoCuenta - transfer2;
                alert("Se han transferido $" + transfer2 + "\nCuenta destino " + cuentaAmiga2);
                actualizarSaldoEnPantalla();
            } else {
                alert("No dispones de dinero para hacer esta transferencia");
            }

    } else {

        alert("La cuenta destino es incorrecta");

    }

}

function iniciarSesion() {
        var iniciando = prompt("Hola "+ nombreUsuario + ", ingrese su clave: \ntip: 0000");
        if (iniciando == claveUsuario){
            alert("Bienvenido "+ nombreUsuario);
        } else {
            saldoCuenta = 0;
            alert("Se retuvo su dinero por cuestiones de seguridad");
            actualizarSaldoEnPantalla();
        }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}