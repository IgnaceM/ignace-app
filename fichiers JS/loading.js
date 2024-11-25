document.addEventListener('DOMContentLoaded', function() {
  const bubbles = document.querySelectorAll('.bubble');
  
  setTimeout(() => {
      bubbles[0].classList.add('active');
  }, 2000); 

  setTimeout(() => {
      bubbles[1].classList.add('active');
  }, 3000); 

  for (let i = 2; i < bubbles.length; i++) {
      setTimeout(() => {
          bubbles[i].classList.add('active');
      }, 3000 + (i - 2) * 1000);
  }

  setTimeout(() => {
      window.location.href = '../fichiers HTMLS/Home.html'; 
  }, 5000);
});