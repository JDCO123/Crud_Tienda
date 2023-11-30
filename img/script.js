const productos = [
    { nombre: 'Zapato Casual', precio: 50000, imagen: 'zapato_casual.jfif' },
    { nombre: 'Zapato Deportivo', precio: 70000, imagen: 'zapato_deportivo.jfif' },
    { nombre: 'Botas Elegantes', precio: 100000, imagen: 'botas_elegantes.jfif' }
];

const productosContainer = document.getElementById('productos');

productos.forEach(producto => {
    const productoHTML = `
        <div class="producto">
            <img src"${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.precio}COP</p>
        </div>
    `;

    productosContainer.innerHTML += productoHTML;

});