var selected = 'h';
function alternateViews(view) {
    if (selected != view) {
        homeContent.classList.add('hidden');
        skillsContent.classList.add('hidden');
        proyectsContent.classList.add('hidden');
        cvContent.classList.add('hidden');

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
            } else if (view === 's') {
                selected = 's';
                skillsContent.style.display = "block";
            } else if (view === 'p') {
                selected = 'p';
                proyectsContent.style.display = "block";
            } else if (view === 'c') {
                selected = 'c';
                cvContent.style.display = "block";
            }
        }, 500);
    }
}