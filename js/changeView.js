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
            }
            for (var i = 0; i < navItems.length; i++) {
                navItems[i].disabled = false;
            }
        }, 600);
    }
}