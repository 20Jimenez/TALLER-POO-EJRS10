class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
}

class LibroDigital extends Libro {
    constructor(titulo, autor) {
        super(titulo, autor);
    }
}

class LibroFisico extends Libro {
    constructor(titulo, autor) {
        super(titulo, autor);
    }
}

class Biblioteca {
    #libros;

    constructor() {
        this.#libros = [];
    }

    agregarLibro(libro) {
        if (libro instanceof Libro) {
            this.#libros.push(libro);
            console.log("El libro ha sido agregado");
        } else {
            console.log("Solo se pueden agregar instancias de la clase Libro.");
        }
    }

    buscarLibrosPorAutor(autor) {
        return this.#libros.filter(libro => libro.autor.toLowerCase() === autor.toLowerCase());
    }

    obtenerLibros() {
        return this.#libros;
    }
}

const biblioteca = new Biblioteca();

document.querySelector("#agregar").addEventListener("click", function () {
    const tituloInput = document.querySelector("#titulo");
    const autorInput = document.querySelector("#autor");
    const tipoInput = document.querySelector("#tipo").value;

    const titulo = tituloInput.value;
    const autor = autorInput.value;

    let nuevoLibro;

    if (tipoInput === "digital") {
        nuevoLibro = new LibroDigital(titulo, autor);
    } else {
        nuevoLibro = new LibroFisico(titulo, autor);
    }

    biblioteca.agregarLibro(nuevoLibro);

    // Limpiar los campos
    tituloInput.value = "";
    autorInput.value = "";
});

document.querySelector("#buscar").addEventListener("click", function () {
    const autorBusquedaInput = document.querySelector("#autorBusqueda").value;
    const librosEncontrados = biblioteca.buscarLibrosPorAutor(autorBusquedaInput);
    const listaLibros = document.querySelector("#lista-libros");
    listaLibros.innerHTML = ""; // Limpiar la lista antes de mostrar resultados

    if (librosEncontrados.length > 0) {
        librosEncontrados.forEach(libro => {
            const item = document.createElement("li");
            item.textContent = `${libro.titulo} - Autor: ${libro.autor} ${libro instanceof LibroDigital ? `(Digital)` : `(Físico)`}`;
            listaLibros.appendChild(item);
        });
    } else {
        listaLibros.textContent = "No se encontraron libros del autor especificado.";
    }
});