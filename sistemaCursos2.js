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

class Curso {
    constructor(nombreCurso) {
        this.nombreCurso = nombreCurso;
        this.estudiantes = [];
    }

    agregarEstudiante(estudiante) {
        if (estudiante instanceof Estudiante) {
            this.estudiantes.push(estudiante);
            console.log(`Estudiante ${estudiante.nombre} agregado al curso ${this.nombreCurso}.`);
        } else {
            console.log("Solo se pueden agregar instancias de la clase Estudiante.");
        }
    }

    calcularPromedioCurso() {
        if (this.estudiantes.length === 0) return 0;
        const sumaPromedios = this.estudiantes.reduce((acc, estudiante) => acc + estudiante.calcularPromedio(), 0);
        return sumaPromedios / this.estudiantes.length;
    }
}

class CursoOnline extends Curso {
    constructor(nombreCurso) {
        super(nombreCurso);
        this.tipo = "Online";
    }
}

class CursoPresencial extends Curso {
    constructor(nombreCurso) {
        super(nombreCurso);
        this.tipo = "Presencial";
    }
}

let cursos = [];

document.querySelector("#agregarCurso").addEventListener("click", function () {
    const nombreCurso = document.querySelector("#nombreCurso").value;
    const curso = new Curso(nombreCurso);
    cursos.push(curso);
    document.querySelector("#nombreCurso").value = "";
    console.log(`Curso ${nombreCurso} creado.`);
});

document.querySelector("#agregarEstudiante").addEventListener("click", function () {
    const nombreEstudiante = document.querySelector("#nombreEstudiante").value;
    const edadEstudiante = parseInt(document.querySelector("#edadEstudiante").value);
    const calificacionEstudiante = parseFloat(document.querySelector("#calificacionEstudiante").value);

    const estudiante = new Estudiante(nombreEstudiante, edadEstudiante);
    estudiante.agregarCalificacion(calificacionEstudiante);

    // Agregar el estudiante al último curso creado
    if (cursos.length > 0) {
        cursos[cursos.length - 1].agregarEstudiante(estudiante);
    } else {
        console.log("No hay cursos creados. Crea un curso primero.");
    }

    document.querySelector("#nombreEstudiante").value = "";
    document.querySelector("#edadEstudiante").value = "";
    document.querySelector("#calificacionEstudiante").value = "";
});

document.querySelector("#mostrarPromediosCursos").addEventListener("click", function () {
    const listaCursos = document.querySelector("#lista-cursos");
    listaCursos.innerHTML = ""; // Limpiar la lista antes de mostrar

    cursos.forEach(curso => {
        const promedioCurso = curso.calcularPromedioCurso();
        const listItem = document.createElement("li");
        listItem.textContent = `${curso.nombreCurso} - Promedio del Curso: ${promedioCurso.toFixed(2)}`;
        listaCursos.appendChild(listItem);
    });
});
