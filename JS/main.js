//const { createElement } = require("react");

//const { createElement } = require("react");

let carritoProductos = [];

let productosDisponibles = [];

async function cargarProductos () {

    try {
        
        const response = await fetch ('http://127.0.0.1:5501/JSON/productos.json');

        if (!response.ok) {
            
            throw new Error ("No se puede acceder a los datos");
        }
        const data = await response.json();
        
        return data;
        
    
    } catch (error)  {

        mostrarError(error)
        return[];
        
    }

}


cargarProductos().then((productos) => {
    productosDisponibles = productos;
    productosDeCompra(productos);  
    agregarAlCarrito();
});



function mostrarError (error) {
    console.error("Error capturado" , error);
    

    Swal.fire({
        icon:"error",
        title:"Oops",
        text:"Algo pasó al obtener los datos!",

    });
}



function productosDeCompra(productos) {
    const productosDom = document.getElementById("contenedor");

    productosDom.innerHTML = productos.map(articulos => {
        return `
            <div class="card" style="width: 18rem; margin: 10px;">
                <img src="${articulos.imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Nombre: ${articulos.nombre}</h5>
                    <p class="card-text">Precio: ${articulos.precio}</p>
                    <a href="#" class="btn btn-primary agregar-btn" data-id="${articulos.id}">Agregar al carrito</a>
                </div>
            </div>
        `;
    }).join('');

}

function visualizacionDeProductoEnElCarrito () {
    const carrito = document.getElementById("carrito-visual");

    carrito.innerHTML = "";

    carritoProductos.forEach(producto => {

        carrito.innerHTML +=  `
        <h5 class="card-title">Nombre: ${producto.nombre}</h5>
        <p class="card-text">Precio: ${producto.precio}</p>
        <a href="#" class="btn btn-primary eliminar-btn" data-id="${producto.id}">ELIMINAR</a>
        `

    })

    eliminarProducto();

}





function funcionlidadDeLaImagenCarrito () {
    const carritoProducto = document.getElementById("carrito-icono");

    carritoProducto.addEventListener ("click" , () => {
        if(carritoProducto) {
            abrirElCarrito();
            visualizacionDeProductoEnElCarrito();
        }
    })
}

funcionlidadDeLaImagenCarrito();



function abrirElCarrito () {
    const mostrarProducto = document.getElementById("sidebar-carrito");

    mostrarProducto.classList.add("mostrar");
    cerrarElCarrito();


    
}


function cerrarElCarrito () {
    const carrito = document.getElementById("cerrarCarrito");
    const mostrarProducto1 = document.getElementById("sidebar-carrito");

    carrito.addEventListener("click" , () => {
        
        mostrarProducto1.classList.remove("mostrar");
    
    })

}



function agregarAlCarrito () {

    const agregarProductos = document.querySelectorAll(".agregar-btn");

    agregarProductos.forEach(boton => {
        
        boton.addEventListener("click", () => {
            const idProducto = parseInt(boton.getAttribute("data-id"));
            const productoAgregado1 = productosDisponibles.find(producto => producto.id === idProducto);

            let productoAlmacenados = JSON.parse(localStorage.getItem("producto")) || [];



            if (productoAgregado1) {
                
                productoAlmacenados.push(productoAgregado1);
                
                localStorage.setItem("producto" , JSON.stringify(productoAlmacenados))

                carritoProductos = [...productoAlmacenados];
                

                visualizacionDeProductoEnElCarrito()
                abrirElCarrito();
                Swal.fire({
                    title: "Producto agregado al carrito!",
                    icon: "success",
                    draggable: true
                });
        
                
            } 

        });

    
    });


}


function eliminarProducto () {
    
    const hacerClickEliminar = document.querySelectorAll(".eliminar-btn");

            hacerClickEliminar.forEach (boton => {
                
                boton.addEventListener("click" , () => {
            

                const idclick = parseInt(boton.getAttribute("data-id"));
                const indice = carritoProductos.findIndex(p => p.id === idclick);
                const swalWithBootstrapButtons = Swal.mixin({
                    customClass: {
                    confirmButton: "btn btn-success",
                    cancelButton: "btn btn-danger"
                    },
                    buttonsStyling: false
                });
                swalWithBootstrapButtons.fire({
                    title: "¿Estas seguro que quieres eliminar este producto del carrito?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Sí, eliminar!",
                    cancelButtonText: "No, cancelar!",
                    reverseButtons: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        carritoProductos.splice(indice ,  1);
                        localStorage.setItem("producto" , JSON.stringify(carritoProductos))
                        visualizacionDeProductoEnElCarrito();
                        swalWithBootstrapButtons.fire({
                        title: "Eliminado!",
                        text: "Tu producto fue eliminado del carrito.",
                        icon: "success"
                    });
                    } else if (
                    result.dismiss === Swal.DismissReason.cancel
                    ) {
                    swalWithBootstrapButtons.fire({
                        title: "Cancelado",
                        text: "Tu producto sigue en el carrito",
                        icon: "error"
                    });
                
                    }
                    
                });
                
            })


        });
            
}