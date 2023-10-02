const textElement = document.getElementById('changeText');
var lang = document.documentElement.lang;
var texts = ['Programmer', 'Developer', 'Designer', 'Computer Enginner'];

let currentIndex = 0;
let currentText = '';
let isDeleting = false;

window.addEventListener('load', function () {
    const cursorElement = document.querySelector('.cursor-text');

    setTimeout(function () {
        cursorElement.style.display = 'inline';
    }, 2800);
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

changeText();

