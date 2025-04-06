
/*
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
    


const
agregarProductoAlCarrito();
*/


const carritoProductos = [];

const productosDisponibles = [
    
    ({id:1 , nombre:"Juego de sabanas", precio: 10000}),
    ({id:2 , nombre:"Toallas" , precio: 20000}),
    ({id:3 , nombre:"Termos marcianos Stanley" , precio: 250000 }),
    ({id:4 , nombre:"Mochilas" , precio: 15000}),

]

/*
function elegirOpciones (opción1 , opción2) {
    
    const opciones = parseInt(prompt("Eligir opciones: 1-Agregar el producto al carrito   2-Eliminar el producto del carrito"));

    while (opciones === Number) {
        switch (opciones) {
            case "Opción 1":
                alert ("Productos para agregar: 1- Juego de sabanas 2-Toallas 3-Termos marcianos Stanley 4-Mochilas");
                break;
            case "Opcion2":
                alert ("Eliminar producto: 1- Juego de sabanas 2-Toallas 3-Termos marcianos Stanley 4-Mochilas");
                break;
        }

        opciones = parseInt(prompt("Eligir opciones: 1-Agregar el producto al carrito   2-Eliminar el producto del carrito"))
    }


}


elegirOpciones();

*/

//funcion para gestionar productos
function gestionarProductos () {

    const opciones = parseInt(prompt("Que te gustaria hacer: 1- agregar productos al carrito  2- eliminar productos del carrito  3-salir"));

    return opciones;
}



function iniciarPrograma () {

    let opciones = parseInt(prompt("1 - gestionar los productos"));

    let seguir = true;

    while (seguir) {
        
        const opcion = gestionarProductos(); 
        switch (opcion) {
            case 1:
                agregarAlCarrito();
                break;
            case 2:
                eliminarProducto();
                break;
            case 3:
                seguir = false;
                alert("¡Gracias por usar el carrito");
                break;
            default:
                alert("Opción inválida");
            
            }
    
        }

    }

iniciarPrograma();



function agregarAlCarrito () {
    
    const agregarProducto = parseInt(prompt("Productos para agregar : 1- Juego de sabanas / 2-Toallas / 3-Termos marcianos Stanley / 4-Mochilas"));

    const productoAgregado1 = productosDisponibles.find(producto => producto.id === agregarProducto);

    if (productoAgregado1) {

        carritoProductos.push(productoAgregado1);

        alert ("Producto agregado");
    
    } else {

        alert ("producto no encontrado");
    }
    

}


function eliminarProducto () {
    
    const eliminarProducto = parseInt(prompt("Productos para eliminar : 1- Juego de sabanas / 2-Toallas / 3-Termos marcianos Stanley / 4-Mochilas"));

    const indice = carritoProductos.findIndex(p => p.id === eliminarProducto);

    if (indice !== -1) {
        
        carritoProductos.splice(indice , 1);
        alert ("Producto eliminado");
    
    } else {
        
        alert ("este producto no se encuentra en el carrito ")
    
    }

    console.log(carritoProductos);
    

}




/*
function agregarAlCarrito (articuloAgregado) {

    const agregar1 = parseInt(prompt("agregar el primer producto al carrito: 1-Juego de sabanas 2-Toallas 3-Termos marcianos Staley 4-Mochila"));
    const agregar2 = parseInt(prompt("agregar el segundo producto al carrito: 1-Juego de sabanas 2-Toallas 3-Termos marcianos Staley 4-Mochila"));

    const articulos1 = productosDisponibles.find(productos => productos.id === agregar1);
    const articulos2 = productosDisponibles.find(productos => productos.id === agregar2);


    if (articulos1 && articulos2) {        
        
        carritoProductos.push (articulos1);
        carritoProductos.push (articulos2);
        
        alert ("el primer producto es " + articulos1.nombre);
        alert ("el segundo producto es " + articulos2.nombre);
    
    } else {
        
        alert ("Este producto no existe");

        return carritoProductos;
        
    
    }

    console.log(carritoProductos);

}



agregarAlCarrito ();

*/
