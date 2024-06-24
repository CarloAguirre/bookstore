
const categorias = [
    'ARTE',
    'BELLAS ARTES',
    'CIENCIA',
    'COMICS',
    'DESARROLLO WEB',
    'DISEÑO',
    'EDUCACIÓN',
    'ELECTRONICA',
    'ENSAYOS',
    'FILOSOFÍA',
    'GEOGRAFÍA',
    'INFANTIL',
    'TURISMO',
]

const libros = [
    {
        url: '1.jpg',
        estreno: false
    },
    {
        url: '2.jpg',
        estreno: false
    },
    {
        url: '3.webp',
        estreno: false
    },
    {
        url: '4.jpg',
        estreno: false
    },
    {
        url: '5.webp',
        estreno: true
    },
    {
        url: '6.webp',
        estreno: true
    },
    {
        url: '7.webp',
        estreno: true
    },
    {
        url: '8.jpg',
        estreno: true
    },
]

var navLinks = document.querySelector('.nav-links')

var categoryTemplate = ''

for(let categoria of categorias){
    categoryTemplate += `<a href="">> ${categoria}</a>`
}
navLinks.innerHTML = categoryTemplate



// libros render
const librosContainer = document.querySelector('.libros')
var librosTemplate = ''
var counter = 0

if(librosContainer){
    for(let libro of libros){
        if(libro['estreno'] == false && counter <= 2){
            librosTemplate += 
            `<a href=""><div class="libro">
                <img src="./assets/imgs/${libro.url}" alt="">
            </div></a>`
            counter ++
        }else if(libro['estreno'] == false && counter <= 3){
            librosTemplate +=
            `<a href="./estrenos.html"><div class="libro libro-4">
            <img src="./assets/imgs/${libro.url}" alt=""><span class="triangle-text"></span></div></a>`
        }
    }
    librosContainer.innerHTML = librosTemplate
}

// estrenos render
const estrenosContainer = document.querySelector('.estrenos')
var estrenosTemplate = ''
let counterEstreno = 0;

if(estrenosContainer){
    for(let libro of libros){
        if(libro.estreno == true && counterEstreno <= 3){
            estrenosTemplate += 
            `<a href=""><div class="libro">
                <img src="./assets/imgs/${libro.url}" alt="">
            </div></a>`
            counterEstreno ++
        }
    }
    estrenosContainer.innerHTML = estrenosTemplate
}