class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
        this.calificaciones = [];
    }

    agregarCalificacion(calificacion) {
        this.calificaciones.push(calificacion);
        console.log(`Calificación ${calificacion} agregada a ${this.nombre}.`);
    }

    calcularPromedio() {
        if (this.calificaciones.length === 0) return 0;
        const suma = this.calificaciones.reduce((acc, curr) => acc + curr, 0);
        return suma / this.calificaciones.length;
    }
}

let estudiantes = [];

document.querySelector("#agregarEstudiante").addEventListener("click", function () {
    const nombreInput = document.querySelector("#nombre");
    const edadInput = document.querySelector("#edad");
    const calificacionInput = document.querySelector("#calificacion");

    const nombre = nombreInput.value;
    const edad = parseInt(edadInput.value);
    const calificacion = parseFloat(calificacionInput.value);

    const estudiante = new Estudiante(nombre, edad);
    estudiante.agregarCalificacion(calificacion);
    estudiantes.push(estudiante);

    nombreInput.value = "";
    edadInput.value = "";
    calificacionInput.value = "";
});

document.querySelector("#mostrarPromedios").addEventListener("click", function () {
    const listaEstudiantes = document.querySelector("#lista-estudiantes");
    listaEstudiantes.innerHTML = ""; // Limpiar la lista antes de mostrar

    estudiantes.forEach(estudiante => {
        const promedio = estudiante.calcularPromedio();
        const listItem = document.createElement("li");
        listItem.textContent = `${estudiante.nombre} - Promedio: ${promedio.toFixed(2)}`;
        listaEstudiantes.appendChild(listItem);
    });
});
