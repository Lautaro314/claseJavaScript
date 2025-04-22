const carritoProductos = [];

const productosDisponibles = [
    
    {
        id:1 , 
        nombre:"Juego de sabanas", 
        precio: 10000
    },
    {
        id:2 , 
        nombre:"Toallas" , 
        precio: 20000
    },
    {
        id:3 , 
        nombre:"Termos marcianos Stanley", 
        precio: 250000 
    },
    {
        id:4, 
        nombre:"Mochilas", 
        precio: 15000
    },

]


//MOSTRAR LOS PRODUCTOS VISUALMENTE 
function productosDeCompra() {
    const productosDom = document.getElementById("contenedor");

    productosDom.innerHTML = productosDisponibles.map(articulos => {
        return `
            <div class="card" style="width: 18rem; margin: 10px;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Nombre: ${articulos.nombre}</h5>
                    <p class="card-text">Precio: ${articulos.precio}</p>
                    <a href="#" class="btn btn-primary agregar-btn" data-id="${articulos.id}">Agregar al carrito</a>
                </div>
            </div>
        `;
    }).join('');

}

productosDeCompra()



//VISUALIZACION DE PRODUCTOS AGREGADOS AL CARRITO
/*function eventoClickDelCarrito () {
    
    const imagen = document.getElementById("carrito-icono");
    const imagen1 = document.getElementById("carrito-visual");

    imagen.addEventListener("click", () => {
        
        imagen.onclick = () => {console.log("click");
        
        };
    
        imagen1.innerHTML +=` 
        <h5 class="card-title">Nombre: ${articulos.nombre}</h5> - <p class="card-text">Precio: ${articulos.precio}</p>`
    
    })

}

eventoClickDelCarrito();
*/

//FUNCION PARA AGREGAR AL CARRITO LOS PRODUCTOS
function agregarAlCarrito () {

    const agregarProductos = document.querySelectorAll(".agregar-btn");
    const imagen1 = document.getElementById("carrito-visual");

    agregarProductos.forEach(boton => {
        
        boton.addEventListener("click", () => {
            const idProducto = parseInt(boton.getAttribute("data-id"));
            const productoAgregado1 = productosDisponibles.find(producto => producto.id === idProducto);
            
            imagen1.innerHTML +=`
            <h5>${productoAgregado1.nombre}</h5>  
            <p>${productoAgregado1.precio}</p>
            `

            if (productoAgregado1) {
                
                carritoProductos.push(productoAgregado1);

                localStorage.setItem ("producto " , JSON.stringify(productoAgregado1));

            } 
            
        });
    
    });

}



//FUNCION PARA ELIMINAR PRODUCTOS DESDE CARRITO

function eliminarProducto () {
    
    const productosEliminar = document.querySelectorAll(".eliminar-btn");
    const hacerClickEliminar = document.getElementById("productos-eliminar");
    let contenidoCarrito = "";


        productosEliminar.forEach( boton => {
            boton.addEventListener("click" , () => {

            const idclick = parseInt(boton.getAttribute("data-id"));
            const indice = carritoProductos.findIndex(p => p.id === idclick);


        hacerClickEliminar.innerHTML = " "

        carritoProductos.forEach (producto => {

            producto.addEventListener("click" , () =>{

            contenidoCarrito += `
            
            <h5>${producto[indice].nombre}</h5>
            <p>${producto[indice].precio}</p>
            <a href="#" class="btn btn-primary eliminar.btn" data-id= "${producto.id}">ELIMINAR</a>
            `

        })

        })
        
        
        if (indice !== -1) {
        
            carritoProductos.splice(indice , 1);

            hacerClickEliminar.innerHTML = contenidoCarrito;
    
        } else {
    
        }

        })

    })
    

}

agregarAlCarrito();
eliminarProducto();
