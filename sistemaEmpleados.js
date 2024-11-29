class Empleado {
    constructor(nombre, sueldoPorHora) {
        this.nombre = nombre;
        this.sueldoPorHora = sueldoPorHora;
    }

    calcularSueldo(horas) {
        return this.sueldoPorHora * horas;
    }
}

class EmpleadoTiempoCompleto extends Empleado {
    constructor(nombre, sueldoPorHora) {
        super(nombre, sueldoPorHora);
    }

    calcularSueldo(horas) {
        return super.calcularSueldo(horas) * 1.5; // Sueldo adicional para tiempo completo
    }
}

class EmpleadoMedioTiempo extends Empleado {
    constructor(nombre, sueldoPorHora) {
        super(nombre, sueldoPorHora);
    }

    calcularSueldo(horas) {
        return super.calcularSueldo(horas); // Sueldo normal
    }
}

// Arreglo para almacenar empleados
const empleados = [];

// Evento para agregar empleado
document.querySelector("#agregar").addEventListener("click", function () {
    const nombre = document.querySelector("#nombre").value;
    const sueldoPorHora = parseFloat(document.querySelector("#sueldo").value);
    const horas = parseInt(document.querySelector("#horas").value);
    const tipo = document.querySelector("#tipo").value;

    let nuevoEmpleado;

    if (tipo === "tiempoCompleto") {
        nuevoEmpleado = new EmpleadoTiempoCompleto(nombre, sueldoPorHora);
    } else {
        nuevoEmpleado = new EmpleadoMedioTiempo(nombre, sueldoPorHora);
    }

    empleados.push(nuevoEmpleado);
    document.querySelector("#nombre").value = "";
    document.querySelector("#sueldo").value = "";
    document.querySelector("#horas").value = "";
});

// Evento para mostrar sueldos
document.querySelector("#mostrar").addEventListener("click", function () {
    const listaEmpleados = document.querySelector("#lista-empleados");
    listaEmpleados.innerHTML = ''; // Limpiar lista anterior

    empleados.forEach(empleado => {
        const sueldo = empleado.calcularSueldo(40); // Calcular sueldo para 40 horas
        const item = document.createElement("li");
        item.textContent = `${empleado.nombre} - Sueldo: $${sueldo.toFixed(2)}`;
        listaEmpleados.appendChild(item);
    });
});