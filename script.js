// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  function openLightbox(imagePath) {
    document.getElementById('lightbox').style.display = 'block';
    document.getElementById('lightbox-image').src = imagePath;
  }
  
  function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
  }
  