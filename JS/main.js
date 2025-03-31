

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

//si el usuario agrega un producto desde la lista al carrito, alert : el producto es (...)
//si el usuario agrega un producto que no existe en la lista, alert : el producto no existe

