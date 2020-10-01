//variables
const carrito = document.querySelector("#carrito");
//contenedor donde se van a colocar los productos
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
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
        //Situarse en el padre del elemento e.target.parentElement.parentElement)
        const cursoSeleccionado = e.target.parentElement.parentElement;

        leerDatosCurso(cursoSeleccionado);
    }
}

//Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso) {
    console.log(curso);

    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1
    };

    console.log(infoCurso);
}