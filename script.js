
let pregunta = document.querySelectorAll('.pregunta-frecuente');
let botonDer = document.querySelectorAll('.simb-der');
let respuesta = document.querySelectorAll('.respuesta-frecuente');
let parrafo = document.querySelectorAll('.respuesta-frecuente p');

for (let i = 0; i < botonDer.length; i = i + 1) {
    let altoparrafo = parrafo[i].clientHeight;
    let conttador = 0;

    botonDer[i].addEventListener('click', () => {
        if ( conttador == 0 ) {
            respuesta[i].style.height = `120px  `;
            respuesta[i].style.width = `85%`;
            pregunta[i].style.marginBottom = '30px';
            botonDer[i].innerHTML = '<i>-</i>';
            conttador = conttador + 1
        }

        else if ( conttador == 1 ) {
            respuesta[i].style.height = `0`;
            pregunta[i].style.marginBottom = '0';
            botonDer[i].innerHTML = '<i class="bi bi-chevron-compact-down"></i>';
            conttador = conttador - 1
        }
    })
}

console.log(parrafo)
let carrousel = document.querySelector('.carrousel-contenedor');

let imagenes = ["./styles/fotos/slide1.jpg", 
                "./styles/fotos/slide2.jpg", 
                "./styles/fotos/slide3.jpg", 
                "./styles/fotos/slide4.jpg", 
                "./styles/fotos/slide5.jpg",
                "./styles/fotos/slide6.jpg",
                "./styles/fotos/slide7.jpg",
                "./styles/fotos/slide8.jpg",
];

let num = 0;

const imgHTML = () => {
    carrousel.innerHTML = `
        <img  
            src = "${imagenes[num]}" 
            alt="slide${num+1}" 
            title = "slide${num+1} 
            class = "img">
    `; 
}

const next = () => {
    num++;
    if (num === imagenes.length) {
        num = 0;
        
    }
    
    imgHTML();
}

const prev = () => {
    num--;
    if (num < 0) {
        num = imagenes.length - 1;
    }
    imgHTML();
}

imgHTML();

let botonAdelante = document.querySelector('.adelante')
botonAdelante.addEventListener('click', next);

let botonAtras = document.querySelector('.atras')
botonAtras.addEventListener('click', prev);

//js del catalogo con Filtro
function filterProducts() {
    const filter = document.getElementById('filter').value;
    const products = document.getElementsByClassName('product');

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const type = product.getAttribute('data-type');

        if (filter === 'all' || filter === type) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    }
} 


