class Animal {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }

    hacerSonido() {
        return `${this.nombre} no tiene un sonido específico.`;
    }
}

class Leon extends Animal {
    constructor(nombre) {
        super(nombre, 'León');
    }

    hacerSonido() {
        return `${this.nombre} ruge: ¡Roar!`;
    }
}

class Elefante extends Animal {
    constructor(nombre) {
        super(nombre, 'Elefante');
    }

    hacerSonido() {
        return `${this.nombre} trompetea: ¡Pawoo!`;
    }
}

class Tigre extends Animal {
    constructor(nombre) {
        super(nombre, 'Tigre');
    }

    hacerSonido() {
        return `${this.nombre} ruge: ¡Grrr!`;
    }
}

// Crear un arreglo de animales
const animales = [
    new Leon('Simba'),
    new Elefante('Dumbo'),
    new Tigre('Shere Khan')
];

// Función para mostrar los sonidos de los animales
function mostrarSonidos() {
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = ''; // Limpiar resultados anteriores

    animales.forEach(animal => {
        const sonido = document.createElement('p');
        sonido.textContent = animal.hacerSonido();
        resultados.appendChild(sonido);
    });
}

// Evento para el botón
document.getElementById('mostrarSonidos').addEventListener('click', mostrarSonidos);