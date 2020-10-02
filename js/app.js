//variables
const carrito = document.querySelector("#carrito");
//contenedor donde se van a colocar los productos
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

cargarEventListeners();
//funcion para cargar addEventlistener
function cargarEventListeners() {
    // 1° Cuando agregas un curso presionando 'Agregar al Carrito'
    listaCursos.addEventListener("click", agregarCurso);
}

//Funciones
//cuando se crea un curso se ejecuta esta funcion
function agregarCurso(e) {
    e.preventDefault();

    //2° Nos aseguramos que el usuario haya hecho click en agregar carrito
    if (e.target.classList.contains("agregar-carrito")) {
        // 3°  Y accedemos a todo el div que tiene el contenedor del curso
        //Situarse en el padre del elemento e.target.parentElement.parentElement)
        const cursoSeleccionado = e.target.parentElement.parentElement;

        leerDatosCurso(cursoSeleccionado);
    }
}

// 4° leemos datos del curso
//Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso) {
    // console.log(curso);

    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1,
    };
    // 5° agregamos el curso al carrito
    // Agrega elementos al arreglo de carrito
    // se toma una copia del carrito de compra(articulosCarrito)
    //y se agrega la informacion a este array
    //no queremos perder la referencia de los cursos agregados
    //por eso se hace una copia del array
    //equivalente hacer un push
    articulosCarrito = [...articulosCarrito, infoCurso];
    console.log(articulosCarrito);
    //6 °imprimimos ese HTML
    carritoHTML();
}

// Muestra el Carrito de compras en el HTML
// se encarga de generar el HTML basado en el carrito de compras
function carritoHTML() {
    // Limpiar el HTML
    limpiarHTML();

    // Recoore el carrito y genera el HTML
    articulosCarrito.forEach((curso) => {
        const { imagen, titulo, precio, cantidad, id } = curso
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>
                <img src="${imagen}" width="100">
          </td>
          <td>
              ${titulo}     
          </td>
          <td>
              ${precio}     
          </td>
          <td>
          ${cantidad}     
          </td>

          <td>
            <a href="#" class="borrar-curso" data-id="${id}">X</a>
          </td>
        `;
        // Agrega el HTML del carrito en el body
        contenedorCarrito.appendChild(row);
    });
}

// Elimina los cursos del tbody
function limpiarHTML() {
    // Forma lenta
    // contenedorCarrito.innerHTML = ''

    // si ese contenedor carrito tiene aunque sea un elemento dentro (hijo)
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}