const navSlide = () => {
  const burger = document.querySelector('.hamburger');
  const nav = document.querySelector('.navbar');

  burger.addEventListener('click', () => {
    nav.classList.toggle('navbar-active');
    document.getElementById("nav").style.backgroundColor = "#232323";
  });
}


navSlide();
