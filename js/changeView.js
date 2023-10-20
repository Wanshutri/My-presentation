var selected = 'h';

function alternateViews(view) {
    if (selected != view) {

        var navItems = document.getElementsByClassName("nav-item");
        for (var i = 0; i < navItems.length; i++) {
            navItems[i].disabled = true;
        }

        homeContent.classList.add('hidden');
        skillsContent.classList.add('hidden');
        proyectsContent.classList.add('hidden');
        cvContent.classList.add('hidden');

        homeContent.classList.remove('fade-in');
        skillsContent.classList.remove('fade-in');
        proyectsContent.classList.remove('fade-in');
        cvContent.classList.remove('fade-in');

        setTimeout(function () {

            const langSwitch = $('#langSwitch');

            langSwitch.on('change', function () {
                const selectedLanguage = langSwitch.prop('checked') ? 'es' : 'en';

                $('[data-translate]').each(function () {
                    const key = $(this).data('translate');
                    $(this).text(translations[selectedLanguage][key]);
                });

                if (selectedLanguage == 'en') {
                    texts = ['Programmer', 'Developer', 'Designer', 'Computer Enginner'];
                } else if (selectedLanguage == 'es') {
                    texts = ['Programador', 'Desarrollador', 'Diseñador', 'Ingeniero en informatica'];
                }
            });

            homeContent.style.display = "none";
            skillsContent.style.display = "none";
            proyectsContent.style.display = "none";
            cvContent.style.display = "none";

            homeContent.classList.remove('hidden');
            skillsContent.classList.remove('hidden');
            proyectsContent.classList.remove('hidden');
            cvContent.classList.remove('hidden');

            if (view === 'h') {
                selected = 'h';
                homeContent.style.display = "block";
                homeContent.classList.add('fade-in');
            } else if (view === 's') {
                selected = 's';
                skillsContent.style.display = "block";
                skillsContent.classList.add('fade-in');
            } else if (view === 'p') {
                selected = 'p';
                proyectsContent.style.display = "block";
                proyectsContent.classList.add('fade-in');
            } else if (view === 'c') {
                selected = 'c';
                cvContent.style.display = "block";
                cvContent.classList.add('fade-in');
                if (window.innerWidth < 1300) {
                    callToast();
                }
            }
            for (var i = 0; i < navItems.length; i++) {
                navItems[i].disabled = false;
            }
        }, 600);
    }
}

function callToast() {
    idioma = document.documentElement.lang;
    setTimeout(function () {
        if (idioma == 'es') {
            mensaje = "Si no ves un PDF, prueba el modo navegador o a descargar el archivo";
        } else if (idioma == 'en'){
            mensaje = "If you don't see a PDF, try the browser mode or download the file";
        }

        Toastify({
            text: mensaje,
            duration: 8000,
            gravity: "center",
            position: "center",
            close: true,
            stopOnFocus: true,
            style: {
                background: "transparent",
                fontSize: "25%",

            },
            onClick: function () { }
        }).showToast();
    }, 250);
}