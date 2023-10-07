const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
 
  /*if (desktopMenu.style.display === "none" || desktopMenu.style.display === "") {
    desktopMenu.style.display = "block";
  } else {
    desktopMenu.style.display = "none";
  }*/
  // version del curso de Platzi XD

  desktopMenu.classList.toggle('inactive');
  }
