class CuentaBancaria {
    constructor(numeroCuenta, saldo) {
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        console.log(`Cuenta: ${this.numeroCuenta}, Saldo: $${this.saldo}`);
    }
}

class CuentaAhorros extends CuentaBancaria {
    constructor(numeroCuenta, saldo) {
        super(numeroCuenta, saldo);
    }

    aplicarIntereses(tasa) {
        this.saldo += this.saldo * (tasa / 100);
        console.log(`Intereses aplicados. Nuevo saldo: $${this.saldo}`);
    }
}

class CuentaCorriente extends CuentaBancaria {
    constructor(numeroCuenta, saldo) {
        super(numeroCuenta, saldo);
    }

    cobrarComision(comision) {
        this.saldo -= comision;
        console.log(`Comisión cobrada. Nuevo saldo: $${this.saldo}`);
    }
}

// Arreglo para manejar múltiples cuentas
const cuentas = [];

// Función para agregar una cuenta
document.querySelector("#agregar").addEventListener("click", function () {
    const numeroCuenta = document.querySelector("#numeroCuenta").value;
    const saldo = parseFloat(document.querySelector("#saldo").value);
    const tipoCuenta = document.querySelector("#tipoCuenta").value;

    let nuevaCuenta;
    if (tipoCuenta === "ahorros") {
        nuevaCuenta = new CuentaAhorros(numeroCuenta, saldo);
    } else {
        nuevaCuenta = new CuentaCorriente(numeroCuenta, saldo);
    }

    cuentas.push(nuevaCuenta);
    document.querySelector("#numeroCuenta").value = "";
    document.querySelector("#saldo").value = "";
});

// Función para mostrar cuentas
document.querySelector("#mostrar").addEventListener("click", function () {
    const listaCuentas = document.querySelector("#lista-cuentas");
    listaCuentas.innerHTML = ''; // Limpiar la lista antes de mostrar

    cuentas.forEach(cuenta => {
        const item = document.createElement("li");
        item.textContent = `Cuenta: ${cuenta.numeroCuenta}, Saldo: $${cuenta.saldo}`;
        listaCuentas.appendChild(item);
    });
});