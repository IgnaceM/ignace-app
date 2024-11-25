// Sélectionne tous les éléments avec les classes .theme1, .theme2, .theme3, .theme4
const themes = document.querySelectorAll('.theme1, .theme2, .theme3, .theme4');

// Ajoute un événement de clic à chaque élément
themes.forEach(theme => {
  theme.addEventListener('click', () => {
    // Retire la classe "active" de tous les éléments
    themes.forEach(t => t.classList.remove('active'));
    // Ajoute la classe "active" à l'élément cliqué
    theme.classList.add('active');
  });
});
