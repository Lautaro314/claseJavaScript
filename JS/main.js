
const carritoProducto = [];

const productos = [
    ({id: 1 , nombre:"remera oversize" , precio: 10000}),
    ({id: 2 , nombre:"zapatillas campus" , precio: 30000}),
    ({id: 3 , nombre:"jean mom con rotura" , precio: 22000}),
    ({id: 4 , nombre:"chombas" , precio: 9000}),
]


function agregarProductoAlCarrito (product) {

    const agregar = parseInt(prompt("agrega el primer producto de esta lista al carrito: 1- Remera Oversize 2- zapatillas campus 3-Jean mom con rotura , 4-chombas"));

    const productoAgregado = productos.find(producto => producto.id === agregar)

    if (productoAgregado) {
        
    carritoProducto.push(productoAgregado)

    const nombres = productoAgregado.nombre;
        
    alert ("el producto agregado es " + nombres)
    
    } else {
    
    alert("este producto no existe");

    }

    console.log(carritoProducto);
    
    
}
    



agregarProductoAlCarrito();



