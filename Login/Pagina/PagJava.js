var swiper = new Swiper(".mySwiper-1",{
    slidesPerView:1,
    spaceBetween: 30,
    loop: true,
    pagination:{
        el: ".swiper-paginatiom",
        clickable:true,
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"

    }
});
//movimiento de los productos y de los nuevos productos
var swiper = new Swiper(".mySwiper-2",{//declaramos una variable nuevo y la vinculamos con el div previamente definido en el html
    slidesPerView:3,//numero de puntos que se van a ver en el bullet (hasta el momento no se visualiza :( )
    spaceBetween: 30,//el espacio que hay entre un producto u otro a la hora de desllizarlo
    loop: true,
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    //acorde a la que tanto se expanda la venta se muestran mas o menos productos
    breakpoints : {
        0: {
            slidesPerView:1
        },
        520: {
            slidesPerView: 2
        },
        950: {
            slidesPerView: 3
        }
    }
});

//carrito

const carrito= document.getElementById('carrito');
const elementos1= document.getElementById('lista-1');
const elementos2= document.getElementById('lista-2');
const elementos3= document.getElementById('lista-3');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners(){
    elementos1.addEventListener('click', comprarElemento);
    elementos2.addEventListener('click', comprarElemento);
    elementos3.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);



    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento){
    const infoelemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        Precio: elemento.querySelector('.precio').textContent,
        id:elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoelemento);
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
     <img src="${elemento.imagen}" width=100>
    </td>
    <td>
     ${elemento.titulo}
    </td>
    <td>
     ${elemento.Precio}
    </td>
    <td>
     <a href="#" class="borrar" data-id="${elemento.id}">X</a>
    </td>
    `;
    lista.appendChild(row);

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(elemento);
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function eliminarElemento(e) { 
    e.preventDefault(); 
    
    let elementoId;

    if(e.target.classList.contains('borrar')) {
        elementoId = e.target.getAttribute('data-id');
        e.target.parentElement.parentElement.remove();

        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito = carrito.filter(item => item.id !== elementoId);
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }    
}

function vaciarCarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    localStorage.removeItem('carrito');
    return false;
}
   

document.addEventListener('DOMContentLoaded', function() {
    // Busca el botón por su id
    const btnCheckout = document.getElementById('btnc');
    
    if (btnCheckout) {
        btnCheckout.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'Checkout.html';
        });
    } else {
        // Si no se encuentra por id, busca por clase
        const btnCheckoutByClass = document.querySelector('.btnc');
        if (btnCheckoutByClass) {
            btnCheckoutByClass.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'Checkout.html';
            });
        }
    }

    // Agrega un listener al contenedor del carrito
    const carritoContainer = document.getElementById('carrito');
    if (carritoContainer) {
        carritoContainer.addEventListener('click', function(e) {
            if (e.target && e.target.id === 'btnc' || e.target.classList.contains('btnc')) {
                e.preventDefault();
                window.location.href = 'Checkout.html';
            }
        });
    }
});