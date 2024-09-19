// script.js
document.addEventListener("DOMContentLoaded", function() {
  const navbarHeight = document.querySelector('.sabaletas-navbar').offsetHeight;

  document.querySelectorAll('.sabaletas-navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    });
  });
});