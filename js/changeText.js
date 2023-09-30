const textElement = document.getElementById('changeText');
const texts = ['Programmer', 'Developer', 'Computer Enginner', 'Creative', 'Smart', 'Handsome'];
let currentIndex = 0;
let currentText = '';
let isDeleting = false;

window.addEventListener('load', function() {
    const cursorElement = document.querySelector('.cursor-text');

    setTimeout(function() {
        cursorElement.style.display = 'inline';
    }, 2800); // Espera 3 segundos (3000 milisegundos) después de que la página se haya cargado
});


function changeText() {
    const targetText = texts[currentIndex];
    
    if (isDeleting) {
        currentText = targetText.substring(0, currentText.length - 1);
    } else {
        currentText = targetText.substring(0, currentText.length + 1);
    }

    textElement.textContent = currentText;
    
    if (!isDeleting && currentText === targetText) {
        isDeleting = true;
        setTimeout(changeText, 2000);
    } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
        setTimeout(changeText, 1000);
    } else {
        setTimeout(changeText, 80);
    }
}

changeText(); // Comienza el efecto al cargar la página
