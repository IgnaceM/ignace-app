
const shareButtons = document.querySelectorAll(".share");

shareButtons.forEach(shareButton => {
    shareButton.addEventListener('click', async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Ignace App ! Meilleure application de développement personnel',
                    text: 'Découvrez ce site incroyable !',
                    url: window.location.href
                });
                console.log('Contenu partagé avec succès');
            } catch (error) {
                console.error('Erreur lors du partage :', error);
            }
        } else {
            alert('Le partage n’est pas pris en charge sur ce navigateur.');
        }
    });
});
