class Producto {
    constructor(nombre, precio, cantidadEnStock) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidadEnStock = cantidadEnStock;
    }
}

class Electrodomestico extends Producto {
    constructor(nombre, precio, cantidadEnStock, marca) {
        super(nombre, precio, cantidadEnStock);
        this.marca = marca;
    }
}

// Crear un arreglo de productos
const productos = [];

// Función para agregar un producto
function agregarProducto(event) {
    event.preventDefault(); // Evitar el envío del formulario
    console.log('Formulario enviado'); // Agrega esta línea para depuración

    const nombre = document.querySelector('#nombre').value;
    const precio = parseFloat(document.querySelector('#precio').value);
    const cantidadEnStock = parseInt(document.querySelector('#cantidadEnStock').value);
    const marca = document.querySelector('#marca').value;

    let nuevoProducto;

    if (marca) {
        nuevoProducto = new Electrodomestico(nombre, precio, cantidadEnStock, marca);
    } else {
        nuevoProducto = new Producto(nombre, precio, cantidadEnStock);
    }

    productos.push(nuevoProducto);
    document.querySelector('#productoForm').reset(); // Reiniciar el formulario
}

// Función para listar productos con bajo stock
function listarBajoStock() {
    const resultados = document.querySelector('#resultados');
    resultados.innerHTML = ''; // Limpiar resultados anteriores

    const productosBajoStock = productos.filter(producto => producto.cantidadEnStock < 10);

    if (productosBajoStock.length > 0) {
        productosBajoStock.forEach(producto => {
            const item = document.createElement('p');
            item.textContent = `${producto.nombre} - Precio: $${producto.precio} - Stock: ${producto.cantidadEnStock}` + (producto.marca ? ` - Marca: ${producto.marca}` : '');
            resultados.appendChild(item);
        });
    } else {
        resultados.textContent = 'No hay productos con bajo stock.';
    }
}

// Eventos
document.querySelector('#productoForm').addEventListener('submit', agregarProducto);
document.querySelector('#listarBajoStock').addEventListener('click', listarBajoStock);