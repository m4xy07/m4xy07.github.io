document.querySelectorAll('.hover').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.classList.add('hover-grow');
  });
  link.addEventListener('mouseleave', () => {
    link.classList.remove('hover-grow');
  });
});