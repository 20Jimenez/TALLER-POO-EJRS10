class Mascota {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    realizarAccion() {
        return `${this.nombre} está en la tienda.`;
    }
}

class Perro extends Mascota {
    constructor(nombre) {
        super(nombre, 'Perro');
    }

    ladrar() {
        return `${this.nombre} dice: ¡Guau!`;
    }
}

class Gato extends Mascota {
    constructor(nombre) {
        super(nombre, 'Gato');
    }

    maullar() {
        return `${this.nombre} dice: ¡Miau!`;
    }
}

// Crear un arreglo de mascotas
const mascotas = [];

// Agregar evento para el botón de agregar mascota
document.querySelector("#agregar").addEventListener("click", function () {
    const nombreInput = document.querySelector("#nombre");
    const tipoInput = document.querySelector("#tipo");
    const nombreValue = nombreInput.value.trim();  // Eliminar espacios en blanco
    const tipoValue = tipoInput.value.trim().toLowerCase();  // Convertir a minúsculas

    let nuevaMascota;

    if (tipoValue === "perro") {
        nuevaMascota = new Perro(nombreValue);
    } else if (tipoValue === "gato") {
        nuevaMascota = new Gato(nombreValue);
    } else {
        alert("Tipo de mascota no válido. Usa 'Perro' o 'Gato'.");
        return;
    }

    mascotas.push(nuevaMascota);  // Guardar la nueva mascota en el arreglo
    nombreInput.value = "";  // Limpiar el campo de nombre
    tipoInput.value = "";  // Limpiar el campo de tipo
});

// Agregar evento para el botón de mostrar acciones
document.querySelector("#mostrar").addEventListener("click", function () {
    const listaMascotas = document.querySelector("#lista-mascotas");
    listaMascotas.innerHTML = "";  // Limpiar la lista antes de mostrar

    mascotas.forEach(mascota => {
        const listaItem = document.createElement("li");
        let accion;

        if (mascota instanceof Perro) {
            accion = mascota.ladrar();
        } else if (mascota instanceof Gato) {
            accion = mascota.maullar();
        }

        listaItem.textContent = `${mascota.nombre} (${mascota.tipo}): ${accion}`;
        listaMascotas.appendChild(listaItem);  // Agregar el elemento a la lista
    });
});