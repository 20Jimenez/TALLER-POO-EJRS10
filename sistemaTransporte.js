class Transporte {
    constructor(capacidad, tipoCombustible) {
        this.capacidad = capacidad;
        this.tipoCombustible = tipoCombustible;
    }
}

class Autobus extends Transporte {
    constructor(capacidad, tipoCombustible) {
        super(capacidad, tipoCombustible);
    }

    arrancar() {
        console.log("El autobús ha arrancado.");
    }
}

class Bicicleta extends Transporte {
    constructor(capacidad) {
        super(capacidad, "N/A"); // Las bicicletas no requieren combustible
    }

    pedalear() {
        console.log("La bicicleta está en movimiento.");
    }
}

// Arreglo para almacenar los transportes
const transportes = [];

// Función para agregar un transporte
document.querySelector("#agregar").addEventListener("click", function () {
    const tipoInput = document.querySelector("#tipo").value.toLowerCase();
    const capacidadInput = parseInt(document.querySelector("#capacidad").value);
    const combustibleInput = document.querySelector("#combustible").value;

    let nuevoTransporte;

    if (tipoInput === "autobus") {
        nuevoTransporte = new Autobus(capacidadInput, combustibleInput);
    } else if (tipoInput === "bicicleta") {
        nuevoTransporte = new Bicicleta(capacidadInput);
    } else {
        alert("Tipo de transporte no válido. Usa 'Autobus' o 'Bicicleta'.");
        return;
    }

    transportes.push(nuevoTransporte);
    alert("Transporte agregado exitosamente.");
    document.querySelector("#tipo").value = "";
    document.querySelector("#capacidad").value = "";
    document.querySelector("#combustible").value = "";
});

// Función para mostrar los transportes
document.querySelector("#mostrar").addEventListener("click", function () {
    const listaTransportes = document.querySelector("#lista-transportes");
    listaTransportes.innerHTML = ""; // Limpiar la lista antes de mostrar

    transportes.forEach(transporte => {
        let item = document.createElement("li");
        if (transporte instanceof Autobus) {
            item.textContent = `Autobús - Capacidad: ${transporte.capacidad}, Combustible: ${transporte.tipoCombustible}`;
        } else if (transporte instanceof Bicicleta) {
            item.textContent = `Bicicleta - Capacidad: ${transporte.capacidad}`;
        }
        listaTransportes.appendChild(item);
    });
});