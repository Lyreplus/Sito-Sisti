window.onscroll = function (e) {  
    if (document.documentElement.scrollTop > 5) {
      document.getElementById("nav").style.backgroundColor = "#232323";
      document.getElementById("nav").style.boxShadow = "0px 0px 35px #000000";
    }
    if (document.documentElement.scrollTop <= 5) {
      document.getElementById("nav").style.backgroundColor = "transparent";
      document.getElementById("nav").style.boxShadow = "0px 0px 35px transparent";
    }
  }


const navSlide = () => {
  const burger = document.querySelector('.hamburger');
  const nav = document.querySelector('.navbar');

  burger.addEventListener('click', () => {
    nav.classList.toggle('navbar-active');
    document.getElementById("nav").style.backgroundColor = "#232323";
  });
}


navSlide();