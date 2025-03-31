
/*
const productos = ["remera oversize" , "zapatillas campus" , "jean mom con rotura" , "chombas"];
const carritoProductos = [];


//funcion para agregar 2 productos de la lista al carrito
function agregarProductoAlCarrito (producto) {

    const agregar = prompt("agrega el primer producto de esta lista al carrito: 1- Remera Oversize 2- zapatillas campus 3-Jean mom con rotura , 4-chombas");

        
        if (productos.includes(agregar)) {

        carritoProductos.push(agregar)

        alert ("el producto es " + carritoProductos);

        } else {

            alert ("este producto no existe");

        }
        
        console.log(carritoProductos);
        

    }

agregarProductoAlCarrito();
*/

//si el usuario agrega un producto desde la lista al carrito, alert : el producto es (...)
//si el usuario agrega un producto que no existe en la lista, alert : el producto no existe


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
    
}
    



agregarProductoAlCarrito();



//productos.push({id: 1 , nombre:"remera oversize" , precio: 10000}),
//productos.push({id: 2 , nombre:"zapatillas campus" , precio: 30000})
// //productos.push({id: 3 , nombre:"jean mom con rotura" , precio: 22000}),
//productos.push({id: 4 , nombre:"chombas" , precio: 9000}),