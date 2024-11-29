class Vehiculo {
    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
}

class Auto extends Vehiculo {
    constructor(marca, modelo, anio) {
        super(marca, modelo, anio);
    }

    conducir() {
        console.log(`${this.marca} ${this.modelo} está conduciendo.`);
    }
}

class Moto extends Vehiculo {
    constructor(marca, modelo, anio) {
        super(marca, modelo, anio);
    }

    conducir() {
        console.log(`${this.marca} ${this.modelo} está conduciendo.`);
    }
}

class CatalogoVehiculos {
    #vehiculos;

    constructor() {
        this.#vehiculos = [];
    }

    agregarVehiculo(vehiculo) {
        if (vehiculo instanceof Vehiculo) {
            this.#vehiculos.push(vehiculo);
            console.log("El vehículo ha sido agregado.");
        } else {
            console.log("Solo se pueden agregar instancias de la clase Vehiculo.");
        }
    }

    listarVehiculos() {
        return this.#vehiculos;
    }
}

const catalogo = new CatalogoVehiculos();

document.querySelector("#agregar").addEventListener("click", function () {
    const marca = document.querySelector("#marca").value;
    const modelo = document.querySelector("#modelo").value;
    const anio = parseInt(document.querySelector("#anio").value);
    const tipo = document.querySelector("#tipo").value;

    let nuevoVehiculo;

    if (tipo === "auto") {
        nuevoVehiculo = new Auto(marca, modelo, anio);
    } else {
        nuevoVehiculo = new Moto(marca, modelo, anio);
    }

    catalogo.agregarVehiculo(nuevoVehiculo);

    // Limpiar los campos de entrada
    document.querySelector("#marca").value = '';
    document.querySelector("#modelo").value = '';
    document.querySelector("#anio").value = '';
    document.querySelector("#tipo").value = 'auto'; // Restablecer tipo a auto
});

document.querySelector("#mostrar").addEventListener("click", function () {
    const listaVehiculos = document.querySelector("#lista-vehiculos");
    listaVehiculos.innerHTML = ''; // Limpiar la lista antes de mostrar

    const vehiculos = catalogo.listarVehiculos();

    vehiculos.forEach(vehiculo => {
        const item = document.createElement("li");
        item.textContent = `${vehiculo.marca} ${vehiculo.modelo} (${vehiculo.anio})`;
        listaVehiculos.appendChild(item);
    });
});