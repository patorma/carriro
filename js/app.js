//variables
const carrito = document.querySelector("#carrito");
//contenedor donde se van a colocar los productos
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBTN = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");

cargarEventListeners();
//funcion para cargar addEventlistener
function cargarEventListeners() {
    //Cuando agregas un curso presionando 'Agregar al Carrito'
    listaCursos.addEventListener("click", agregarCurso);
}

//Funciones
function agregarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains("agregar-carrito")) {
        console.log(e.target);
    }
}