// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav ul li a');

  for (const link of links) {
    link.addEventListener('click', function(event) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        event.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
          });
        }
      }
    });
  }
});
