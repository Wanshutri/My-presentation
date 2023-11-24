// Obtén la referencia a los elementos que deseas animar
let langSec = document.querySelector('.langSec');
let techSec = document.querySelector('.techSec');

// Inicializa las variables necesarias
let isMouseOverSkillsLang = false;
let isMouseOverSkillsTech = false;
let scrollSpeed = 2; // Velocidad de desplazamiento

// Función para manejar la animación de habilidades de lenguaje
function animateSkillsLang() {
    // Implementa la lógica de auto scroll aquí
    langSec.scrollLeft += scrollSpeed;

    // Verifica si llegó al final y reinicia
    if (langSec.scrollLeft >= langSec.scrollWidth - langSec.clientWidth) {
        langSec.scrollLeft = 0;
    }

    // Continúa la animación si el mouse no está sobre el área de habilidades
    if (!isMouseOverSkillsLang) {
        requestAnimationFrame(animateSkillsLang);
    }
}

// Función para manejar la animación de habilidades de tecnología
function animateSkillsTech() {
    // Implementa la lógica de auto scroll aquí
    techSec.scrollLeft += scrollSpeed;

    // Verifica si llegó al final y reinicia
    if (techSec.scrollLeft >= techSec.scrollWidth - techSec.clientWidth) {
        techSec.scrollLeft = 0;
    }

    // Continúa la animación si el mouse no está sobre el área de habilidades
    if (!isMouseOverSkillsTech) {
        requestAnimationFrame(animateSkillsTech);
    }
}

// Función para manejar el evento mouseover de habilidades de lenguaje
function handleMouseOverSkillsLang() {
    isMouseOverSkillsLang = true;
}

// Función para manejar el evento mouseout de habilidades de lenguaje
function handleMouseOutSkillsLang() {
    isMouseOverSkillsLang = false;
    // Reanuda la animación cuando el mouse sale del área de habilidades
    animateSkillsLang();
}

// Función para manejar el evento mouseover de habilidades de tecnología
function handleMouseOverSkillsTech() {
    isMouseOverSkillsTech = true;
}

// Función para manejar el evento mouseout de habilidades de tecnología
function handleMouseOutSkillsTech() {
    isMouseOverSkillsTech = false;
    // Reanuda la animación cuando el mouse sale del área de habilidades
    animateSkillsTech();
}

// Agrega eventos de mouse a los div de habilidades de lenguaje
langSec.addEventListener('mouseover', handleMouseOverSkillsLang);
langSec.addEventListener('mouseout', handleMouseOutSkillsLang);
animateSkillsLang(); // Inicia la animación

// Agrega eventos de mouse a los div de habilidades de tecnología
techSec.addEventListener('mouseover', handleMouseOverSkillsTech);
techSec.addEventListener('mouseout', handleMouseOutSkillsTech);
animateSkillsTech(); // Inicia la animación
