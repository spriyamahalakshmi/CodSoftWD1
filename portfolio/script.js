let menuIcon = document.querySelector('menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx.x')
    navbar.classList.toggle('active');
}


const downloadButton = document.querySelector('.download-cv .btn');

downloadButton.addEventListener('click', (event) => {
  if (!confirm('Are you sure you want to download the CV?')) {
    event.preventDefault(); 
  }
});
